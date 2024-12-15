"use client";

import {
  DEFAULT_THEME,
  createTheme,
  MantineColorsTuple,
  mergeMantineTheme,
  Input,
  Paper,
  Button,
  Popover,
  Drawer
} from "@mantine/core";

import { bodyFont, titleFont } from "components/Layout/fonts";
import classes from "styles/mantine.module.scss";

const brown: MantineColorsTuple = [
  "hsla(35, 55%, 96%, 1)",
  "hsla(33, 38%, 89%, 1)",
  "hsla(33, 37%, 83%, 1)",
  "hsla(25, 26%, 39%, 1)",
  "hsla(25, 33%, 34%, 1)",
  "hsla(23, 20%, 17%, 1)",
  "hsla(21, 20%, 14%, 1)",
  "hsla(22, 23%, 9%, 1)",
  "hsla(26, 34%, 77%, 1)",
  "hsla(26, 33%, 68%, 1)"
];

// Based on the Snails' House logo
const snails: MantineColorsTuple = [
  "hsla(0, 95%, 75%, 1)",   /* red    */
  "hsla(27, 100%, 80%, 1)", /* peach  */
  "hsla(34, 100%, 89%, 1)", /* yellow */
  "hsla(79, 63%, 59%, 1)",  /* green  */
  "hsla(177, 60%, 59%, 1)", /* teal   */
  "hsla(198, 62%, 57%, 1)", /* blue   */
  "hsla(252, 69%, 61%, 1)", /* purple */
  "hsla(24, 33%, 40%, 1)",
  "hsla(21, 24%, 23%, 1)",  /* browns */
  "hsla(8, 100%, 8%, 1)"
];

const themeOverride = createTheme({
  white: "hsla(35, 55%, 96%, 1)",
  black: "hsla(22, 23%, 9%, 1)",
  colors: {
    brown,
    snails
  },
  primaryColor: "brown",
  primaryShade: {
    light: 3,
    dark: 5
  },
  fontFamily: bodyFont.style.fontFamily,
  headings: {
    fontFamily: `${titleFont.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`
  },
  components: {
    Button: Button.extend({
      classNames: {
        root: classes.btnroot
      }
    }),
    Drawer: Drawer.extend({
      classNames: {
        header: classes.drawheader,
        title: classes.drawtitle
      }
    }),
    Input: Input.extend({
      classNames: {
        input: classes.input
      }
    }),
    Paper: Paper.extend({
      classNames: {
        root: classes.paperroot
      }
    }),
    Popover: Popover.extend({
      classNames: {
        dropdown: classes.btnroot
      }
    }),
  }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);