export function groupBy<K, V>(arr: V[], grouper: (item: V) => K) {
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