import Image from "next/image";
import Link from "next/link";

import { handwrittenFont } from "components/Layout/fonts";
import NavMenu from "components/Layout/NavMenu/NavMenu";
import classes from "components/Layout/Header/Header.module.scss";

export default function Header() {
  return (
    <div className={classes.section}>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <Link href="/" className={classes.title}>
            <Image
              src="/ferretsoftware-clips.png"
              width={42}
              height={42}
              alt="FerretSoftware Clips"
            />
            <div className={`${classes["title-text"]} ${handwrittenFont.className}`}>FerretSoftware Clips</div>
          </Link>
          <NavMenu />
        </header>
      </div>
    </div>
  );
}