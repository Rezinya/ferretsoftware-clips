import Link from "next/link";
import Image from "next/image";
import { RiMenLine, RiWomenLine } from "@remixicon/react";

import { handwrittenFont } from "components/Layout/fonts";
import { FerretMugshot, ferretMugshots } from "data/ferretMugshots";
import styles from "components/Polaroid/Polaroid.module.scss";

export default function Polaroid({ name, sex, valhallaDate }: {
  name: string;
  sex: "male" | "female";
  valhallaDate: string | null;
}) {
  const found = ferretMugshots.find((item) => item.name === name) as FerretMugshot;

  return (
    <div className={styles.wrapper}>
      <div className={styles.film}>
        <Link href={`../search?q=${name}`} className={styles["film-link"]}>
          <Image
            src={found.src}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            alt={found.alt}
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
        </Link>
      </div>

      {/* Extra div for Valhalla ferrets */}
      {valhallaDate !== null ? (
        <div className={styles.mark}>
          <div className={styles["mark-box"]}>
            <span className={`${handwrittenFont.className} mark-label`}>
              {valhallaDate}
            </span>
            <span className={styles["mark-rainbow"]}>
              <Image
                src="/rainbow.png"
                width={36}
                height={20}
                alt="rainbow"
              />
            </span>
          </div>
        </div>
      ) : (
        null
      )}
    </div>
  );
}