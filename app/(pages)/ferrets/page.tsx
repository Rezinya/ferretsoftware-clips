import { Metadata } from "next";
import Link from "next/link";
import { Title } from "@mantine/core";

import { ferrets, playgroups } from "data/ferrets";
import { groupBy } from "utils/arrayHelpers";
import Polaroid from "components/polaroid/polaroid";
import classes from "pages/ferrets/page.module.scss";

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
        <span className={classes.mark}>*</span>
      </Title>
      <p>
        <span className={classes.mark}>* </span>
        With the exception of a few specific ferrets, being put into a playgroup does not mean that they will never interact with ferrets from other playgroups.
      </p>
      <p>Want to learn more about the noodles? Visit their <Link href="https://piratesoftware.wiki/wiki/Ferrets">wiki</Link>!</p>
      
      {playgroups.map(playgroup => (
        <div className={classes["playgroup-wrapper"]} key={`${playgroup}-wrapper`}>
          <Title order={2} className="sub-title" key={`${playgroup}-title`}>
            <Link href={`#${playgroup}`} className={classes["sub-title-link"]} key={`${playgroup}-title-link`}>
              {playgroup}
            </Link>
          </Title>

          <div
            className={playgroup === "Valhalla" ? (
              classes["grid-valhalla"]
            ) : (
              classes["grid"] )}
            key={`${playgroup}-grid`}
          >
            {groupedFerrets.get(playgroup)?.map(ferret => (
              <Polaroid name={ferret.name} sex={ferret.sex} valhallaDate={ferret.valhallaDate} key={ferret.name} />
            ))}
          </div>
        </div>
      ))}      
    </>
  );
}