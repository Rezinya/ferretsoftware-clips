"use client";

import Image from "next/image";
import Link from "next/link";
import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { handwrittenFont } from "components/Layout/fonts";
import NavLink from "components/Layout/Header/NavLink";
import GitHubButton from "components/Layout/Header/GitHubButton";
import ColorSchemeButton from "components/Layout/Header/ColorSchemeButton";
import classes from "components/Layout/Header/Header.module.scss";

const links = [
  { link: "/search", label: "Search"}, 
  { link: "/ferrets", label: "Ferrets"},
  { link: "/about", label: "About"},
];

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const navLinks = links.map((item) => (
    <NavLink
      path={item.link}
      label={item.label}
      key={item.label}
    />
  ));

  const drawerNavLinks = links.map((item) => (
    <Link
      href={item.link}
      key={item.label}
      onClick={closeDrawer}
      className={classes["nav-link"]}
    >
      {item.label}
    </Link>
  ));

  return (
    <div className={classes.section}>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            aria-label="Toggle navigation"
            className={classes.burger}
          />

          <Link href="/" className={classes.title}>
            <Image
              src="/ferretsoftware-clips.png"
              width={42}
              height={42}
              alt="FerretSoftware Clips"
            />
            <div className={`${classes["title-text"]} ${handwrittenFont.className}`}>
              FerretSoftware Clips
            </div>
          </Link>

          <div className={classes["links-wrapper"]}>
            <nav className={classes["header-nav"]}>
              {navLinks}
            </nav>

            <div className={classes["button-section"]}>
              <div className={classes["button-github"]}>
                <GitHubButton
                  link="https://github.com/Rezinya/ferretsoftware-clips"
                  size="lg"
                  radius="sm"
                />
              </div>
              <div className={classes["button-scheme"]}>
                <ColorSchemeButton
                  size="lg"
                  radius="sm"
                />
              </div>
            </div>
          </div>

          <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            title="Navigation"
            size="sm"
            className={handwrittenFont.variable}
          >
            <nav className={classes["drawer-nav"]}>
              {drawerNavLinks}
            </nav>
          </Drawer>
        </header>
      </div>
    </div>
  );
}