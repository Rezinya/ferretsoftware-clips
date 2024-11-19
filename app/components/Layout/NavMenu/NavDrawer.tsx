"use client";

import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "components/layout/header/header.module.scss";

export default function NavDrawer() {
  const [drawerOpened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Burger onClick={open} className={classes.burger} aria-label="Toggle navigation" />

      <Drawer opened={drawerOpened} onClose={close}>
        {}
      </Drawer>
    </>
  );
}