import { Metadata } from "next";
import Link from "next/link";
import { Title } from "@mantine/core";

import { ferrets, playgroups } from "data/ferrets";
import Polaroid from "components/polaroid/polaroid";
import { groupBy } from "utils/arrayHelpers";
import styles from "pages/ferrets/page.module.scss";

export const metadata: Metadata = {
  title: "Ferrets",
}

export default function FerretsPage() {
  // Ferrets are sorted by playgroup then name (alphabetically)
  const groupedFerrets = groupBy(ferrets, x => x.playgroup);

  playgroups.map(playgroup => {
    groupedFerrets.get(playgroup)?.sort((a, b) => {
      return (a.name.localeCompare(b.name));
    });
  });

  // Valhalla residents are sorted the date of their passing in ascending order
  groupedFerrets.get("Valhalla")?.sort((a, b) => {
    return ("" + a.valhallaDate).localeCompare("" + b.valhallaDate);
  });

  return (
    <>
      <Title order={1} className="title">Ferrets by Playgroup
        <span className={styles.mark}>*</span>
      </Title>
      <p>
        <span className={styles.mark}>* </span>
        With the exception of a few specific ferrets, being put into a playgroup does not mean that they will never interact with ferrets from other playgroups.
      </p>
      <p>Want to learn more about the noodles? Visit their <Link href="https://piratesoftware.wiki/wiki/Ferrets">wiki</Link>!</p>
      
      {playgroups.map(playgroup => (
        <>
          <Title order={2} className={styles["sub-title"]} key={playgroup}>
            {playgroup}
          </Title>

          <div className={playgroup === "Valhalla" ? ( styles["grid-valhalla"] ) : ( styles["grid"] )} key={`${playgroup}-grid`}>
            <ul className={styles["playgroup-list"]} key={`${playgroup}-list`}>
              {groupedFerrets.get(playgroup)?.map(ferret => (
                <>
                <li key={`${playgroup}-${ferret.name}`}>
                  <Polaroid name={ferret.name} sex={ferret.sex} valhallaDate={ferret.valhallaDate} key={ferret.name} />
                </li>
                </>
              ))}
            </ul>
          </div>
        </>
      ))}
    </>
  );
}