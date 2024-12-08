import { useEffect } from "react";

export function convertSizeToPx(size: string) {
  let fontSize = 16;
  let rem;
  
  {/* Get browser's base font size */}
  useEffect(() => {
    fontSize = parseInt(window
      .getComputedStyle(document.body)
      .getPropertyValue("font-size"));
  }, []);

  switch (size) {
    case "xs":
      rem = 1.125;
      break;
    case "sm":
      rem = 1.375;
      break;
    case "md":
      rem = 1.75;
      break;
    case "lg":
      rem = 2.125;
      break;
    case "xl":
      rem = 2.75;
      break;
    default:
      rem = 1.75;
  }

  return rem * fontSize * 0.7;
}