"use client";

import {
  DEFAULT_THEME,
  createTheme,
  MantineColorsTuple,
  mergeMantineTheme,
  VariantColorsResolver,
  defaultVariantColorsResolver,
  parseThemeColor,
  rem,
  Input,
  Card,
  Blockquote
} from "@mantine/core";

import { bodyFont, titleFont } from "components/layout/fonts";
import classes from "styles/mantine.module.scss";

const brown: MantineColorsTuple = [
  "#fbf8f3",
  "#e1d6cb",
  "#c8b3a3",
  "#ae8e7a",
  "#966e5a",
  "#825745",
  "#704a38",
  "#61402e",
  "#523423",
  "#432919"
];

// Based on the colors on the Snails' House logo
const custom: MantineColorsTuple = [
  "#ff8281",  /* red    */
  "#ffc798",  /* orange */
  "#ffe7c5",  /* yellow */
  "#b0d94d",  /* green  */
  "#4adcc5",  /* teal   */
  "#4ab1d4",  /* blue   */
  "#7354de",  /* purple */
  "#644e44",  /* brown-greys */
  "#4d3c33",
  "#382b23"
];

// Override variants as it still defaults to blue
const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });
  
  if (input.variant === "light") {
    return {
      background: "var(--background-brown-light)",
      hover: "var(--background-brown-light)",
      color: "var(--mantine-color-custom-7)",
      border: "0"
    };
  }

  if (input.variant === "outline") {
    return {
      background: "var(--mantine-color-body)",
      hover: "var(--background-brown-light)",
      color: "var(--mantine-color-brown-6)",
      border: `${rem(1)} solid var(--mantine-color-brown-7)`
    };
  }

  if (input.variant === "blank") {
    return {
      background: "transparent",
      hover: "transparent",
      color: "transparent",
      border: "0"
    };
  }

  return defaultResolvedColors;
}

const themeOverride = createTheme({
  white: "#fcf9f5",
  black: "#1a0d08",
  colors: {
    brown,
    custom
  },
  primaryColor: "brown",
  primaryShade: 6,
  variantColorResolver: variantColorResolver,
  defaultGradient: {
    from: "#ff8281",
    to: "#ffc798",
    deg: 70,
  },
  fontFamily: bodyFont.style.fontFamily,
  headings: {
    fontFamily: `${titleFont.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`
  },
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.textinput
      }
    }),
    Card: Card.extend({
      classNames: {
        root: classes.cardroot
      }
    }),
    Blockquote: Blockquote.extend({
      classNames: {
        root: classes.blockquoteroot
      }
    }),
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);