import Image from "next/image";
import Link from "next/link";

import { shantell } from "../fonts";
import GitHubButton from "./githubButton";
import ColorSchemeToggle from "./colorSchemeToggle";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>
        <Image
          src="/mug-shots/placeholder.webp"
          width={42}
          height={42}
          alt="FerretSoftware Clips"
        />
        <div className={`${styles["title-text"]} ${shantell.className}`}>FerretSoftware Clips</div>
      </Link>

      <nav className={styles.nav}>
        <ul className={styles["nav-list"]}>
        <li className={styles["nav-item"]}>
            <Link href="/" className={styles["nav-link"]}>Search</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/ferrets" className={styles["nav-link"]}>Ferrets</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/about" className={styles["nav-link"]}>About</Link>
          </li>
        </ul>

        <div className={styles["nav-buttons"]}>
          <GitHubButton link="https://github.com/Rezinya/ferretsoftware-clips" size="lg" radius="sm" />
          <ColorSchemeToggle size="lg" radius="sm"  />
        </div>
      </nav>
    </header>
  );
}