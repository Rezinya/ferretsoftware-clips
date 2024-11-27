import {
  Hind,
  Geologica,
  Margarine
} from "next/font/google";

export const bodyFont = Hind({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap"
});

export const titleFont = Geologica({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap"
});

export const handwrittenFont = Margarine({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-handwritten",
  display: "swap"
});