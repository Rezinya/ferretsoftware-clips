import {
  Atkinson_Hyperlegible,
  Geologica,
  Shantell_Sans
} from "next/font/google";

export const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-atkinson"
});

export const geologica = Geologica({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geologica"
});

export const shantell = Shantell_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shantell"
});