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

import { bodyFont, titleFont } from "components/layout/fonts";

const custom: MantineColorsTuple = [
  "#fdf3ed",
  "#fe8483", /* red    */
  "#ffc798", /* orange */
  "#ffe7c5", /* yellow */
  "#b0d94d", /* green  */
  "#48aed4", /* blue   */
  "#7354de", /* purple */
  "#936950",
  "#845d45",
  "#754f38"
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
      background: "rgba(147, 105, 80, 0.15)",
      hover: "rgba(147, 105, 80, 0.15)",
      color: "var(--mantine-color-custom-7)",
      border: "0"
    };
  }

  if (input.variant === "outline") {
    return {
      background: "var(--mantine-color-body)",
      hover: "rgba(147, 105, 80, 0.15)",
      color: "var(--mantine-color-custom-7)",
      border: `${rem(1)} solid var(--mantine-color-custom-8)`
    };
  }

  return defaultResolvedColors;
}

const themeOverride = createTheme({
  white: "#fef5f1",
  black: "#1d1815",
  colors: { custom },
  primaryShade: 7,
  variantColorResolver: variantColorResolver,
  fontFamily: bodyFont.style.fontFamily,
  headings: {
    fontFamily: `${titleFont.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);