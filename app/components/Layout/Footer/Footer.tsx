import Link from "next/link";
import classes from "components/layout/footer/footer.module.scss";

export default function Footer() {
  return (
    <div className={classes.wrapper}>
      <footer className={`${classes.footer} max-content-width`}>
        <p className={classes["footer-text"]}>&copy; 2024 FerretSoftware Clips.</p>
        <p className={classes["footer-text"]}>
          FerretSoftware Clips is not affiliated with Twitch or
          {" "}
          <Link href="https://www.twitch.tv/ferretsoftware" className={classes["footer-link"]}>
            FerretSoftware
          </Link>
          . All photos of the ferrets are copyrights of
          {" "}
          <Link href="https://www.twitch.tv/ferretsoftware" className={classes["footer-link"]}>
            FerretSoftware
          </Link>
          {" "}
          and are available under
          {" "}
          <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className={classes["footer-link"]}>
            Creative Commons BY-NC-S
          </Link>.
        </p>
      </footer>
    </div>
  );
}