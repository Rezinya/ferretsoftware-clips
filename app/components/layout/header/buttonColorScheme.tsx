"use client";

import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Tooltip } from "@mantine/core";
import { RiMoonClearFill, RiSunFill } from "@remixicon/react";

export default function ColorSchemeButton({ size, radius }: {
  size: string,
  radius: string
}) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={ () => setColorScheme(computedColorScheme === "light" ? "dark" : "light") }
      variant="outline"
      size={size}
      radius={radius}
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "light" ? (
        <Tooltip
          label="Dark mode"
          transitionProps={{ transition: "pop", duration: 500 }}
        >
          <RiMoonClearFill color="var(--mantine-color-text)" />
        </Tooltip>
      ) : (
        <Tooltip
          label="Light mode"
          transitionProps={{ transition: "pop", duration: 500 }}
        >
          <RiSunFill color="var(--mantine-color-custom-3)" />
        </Tooltip>
      )}
    </ActionIcon>
  );
}