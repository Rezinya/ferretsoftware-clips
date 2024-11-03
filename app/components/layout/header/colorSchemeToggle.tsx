"use client";

import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Tooltip } from "@mantine/core";
import { RiMoonClearLine, RiSunLine } from "@remixicon/react";

export default function ColorSchemeToggle({ size, radius }: {
  size: string,
  radius: string
}) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={ () => setColorScheme(computedColorScheme === "light" ? "dark" : "light") }
      variant="subtle"
      size={size}
      radius={radius}
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "light" ? (
        <Tooltip
          label="Dark mode"
          transitionProps={{ transition: "pop", duration: 300 }}
        >
          <RiMoonClearLine />
        </Tooltip>
      ) : (
        <Tooltip
          label="Light mode"
          transitionProps={{ transition: "pop", duration: 300 }}
        >
          <RiSunLine />
        </Tooltip>
      )}
    </ActionIcon>
  );
}