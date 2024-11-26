import Image from "next/image";
import { RiMenLine, RiWomenLine } from "@remixicon/react";

import { handwrittenFont } from "components/Layout/fonts";
import KodaPhoto from "assets/koda_202408.webp";
import styles from "components/Polaroid/Polaroid.module.scss";

// Copy of Polaroid component used in the About page
export default function Polaroid({ name, sex }: {
  name: string;
  sex: "male" | "female";
}) {
  const description = "A photo of Rezi's ferret, Koda. He's asleep, looking like he's grinning while looking towards the camera.";
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.film}>
        <Image
          src={KodaPhoto}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          alt={description}
          className={styles["film-image"]}
          placeholder="blur"
        />
        <div className={styles["label"]}>
          <span className={`${handwrittenFont.className} ${styles["label-name"]}`}>
            {name}
          </span>
          {sex === "male" ?
            <RiMenLine size={26} /> : 
            <RiWomenLine size={26} />
          }
        </div>
      </div>
    </div>
  );
}