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
  Input
} from "@mantine/core";

import { bodyFont, titleFont } from "./fonts";

const brown: MantineColorsTuple = [
  "#fdf3ed",
  "#efe5e0",
  "#dbcac0",
  "#c7ad9d",
  "#b6947f",
  "#ac846c",
  "#a87c61",
  "#936950",
  "#845d45",
  "#754f38"
];

/* Override variants as it still defaults to blue */
const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  if (input.variant === "light") {
    return {
      background: "var(--mantine-color-body)",
      hover: "rgba(199, 173, 156, 0.15)",
      color: "var(--mantine-color-brown-6)",
      border: `${rem(1)} solid var(--mantine-color-brown-8)`
    };
  }

  if (input.variant === "subtle") {
    return {
      background: "transparent",
      hover: "rgba(199, 173, 156, 0.15)",
      color: "var(--mantine-color-brown-6)",
      border: "0"
    };
  }

  return defaultResolvedColors;
}

const themeOverride = createTheme({
  white: "#fef5f1",
  black: "#1d1815",
  colors: { brown },
  primaryShade: 7,
  variantColorResolver: variantColorResolver,
  fontFamily: bodyFont.style.fontFamily,
  headings: {
    fontFamily: `${titleFont.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);