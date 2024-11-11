import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles["footer-line"]}>&copy; 2024 FerretSoftware Clips.</p>
      <p className={styles["footer-line"]}>FerretSoftware Clips is not affiliated with Twitch or <Link href="https://www.twitch.tv/ferretsoftware">FerretSoftware</Link>. All photos of the ferrets are copyrights of <Link href="https://www.twitch.tv/ferretsoftware">FerretSoftware</Link> and are available under <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons BY-NC-SA</Link>.</p>
    </footer>
  );
}