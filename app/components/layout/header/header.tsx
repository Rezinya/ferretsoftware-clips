import Image from "next/image";
import Link from "next/link";

import { handwrittenFont } from "components/layout/fonts";
import NavLink from "components/layout/header/navLink";
import GitHubButton from "components/layout/header/buttonGitHub";
import ColorSchemeButton from "components/layout/header/buttonColorScheme";
import classes from "components/layout/header/header.module.scss";

export default function Header() {
  return (
    <div className={classes.wrapper}>
      <header className={`${classes.header} max-content-width`}>
        <Link href="/" className={classes.title}>
          <Image
            src="/ferretsoftware-clips.png"
            width={42}
            height={42}
            alt="FerretSoftware Clips"
          />
          <div className={`${classes["title-text"]} ${handwrittenFont.className}`}>FerretSoftware Clips</div>
        </Link>

        <nav className={classes.nav}>
          <ul className={classes["nav-list"]}>
          <li className={classes["nav-item"]}>
              <NavLink path="/search" label="Search" />
            </li>
            <li className={classes["nav-item"]}>
              <NavLink path="/ferrets" label="Ferrets" />
            </li>
            <li className={classes["nav-item"]}>
              <NavLink path="/about" label="About" />
            </li>
          </ul>

          <div className={classes["nav-buttons"]}>
            <GitHubButton link="https://github.com/Rezinya/ferretsoftware-clips" size="lg" radius="sm" />
            <ColorSchemeButton size="lg" radius="sm"  />
          </div>
        </nav>
      </header>
    </div>
    
  );
}