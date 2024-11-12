import Link from "next/link";
import classes from "components/layout/footer/footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes["footer-text"]}>&copy; 2024 FerretSoftware Clips.</p>
      <p className={classes["footer-text"]}>FerretSoftware Clips is not affiliated with Twitch or <Link href="https://www.twitch.tv/ferretsoftware">FerretSoftware</Link>. All photos of the ferrets are copyrights of <Link href="https://www.twitch.tv/ferretsoftware">FerretSoftware</Link> and are available under <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons BY-NC-SA</Link>.</p>
    </footer>
  );
}