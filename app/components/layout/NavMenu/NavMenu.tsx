import NavLink from "components/Layout/NavMenu/NavLink";
import GitHubButton from "components/Layout/NavMenu/GitHubButton";
import ColorSchemeButton from "components/Layout/NavMenu/ColorSchemeButton";
import classes from "components/Layout/Nav/NavMenu.module.scss";

export default function NavMenu() {
  return (
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
  );
}