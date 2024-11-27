import { Ferret, ferrets, playgroups } from "data/ferrets";

function groupBy<K, V>(arr: V[], grouper: (item: V) => K) {
  return arr.reduce((store, item) => {
    const key = grouper(item);
    if (!store.has(key)) {
      store.set(key, [item]);
    }
    else {
      store.get(key)?.push(item);
    }
    return store;
  }, new Map<K,V[]>());
}

export function sortFerrets(ferrets: Ferret[]) {
  // Ferrets are sorted by playgroup then name (alphabetically)
  const sortedFerrets = groupBy(ferrets, x => x.playgroup);

  playgroups.map((playgroup) => {
    sortedFerrets.get(playgroup)?.sort((a, b) => {
      return (a.name.localeCompare(b.name));
    });
  });

  // Valhalla residents are sorted the date of their passing in ascending order
  sortedFerrets.get("Valhalla")?.sort((a, b) => {
    return ("" + a.valhallaDate).localeCompare("" + b.valhallaDate);
  });

  return sortedFerrets;
}

export function getSortedFerretNames() {
  const sortedFerrets = sortFerrets(ferrets);
  const ferretArr = Array.from(sortedFerrets.values()).flat();
  const ferretNames = [];

  for (const ferret of ferretArr) {
    ferretNames.push(ferret.name);
  }

  return ferretNames;
}