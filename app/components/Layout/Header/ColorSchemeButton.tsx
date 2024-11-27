"use client";

import { ActionIcon, useMantineColorScheme, Tooltip } from "@mantine/core";
import { useMounted } from "@mantine/hooks";
import { RiMoonClearFill, RiSunFill } from "@remixicon/react";

export default function ColorSchemeButton({ size, radius }: {
  size: string,
  radius: string
}) {
  const { setColorScheme } = useMantineColorScheme();
  const isLight = useMantineColorScheme().colorScheme === "light";
  const isMounted = useMounted();

  return isMounted ? (
    <ActionIcon
      onClick={ () => setColorScheme(isLight ? "dark" : "light") }
      variant="transparent"
      size={size}
      radius={radius}
      aria-label="Toggle color scheme"
    >
      {isLight ? (
        <Tooltip
          label="Dark mode"
          transitionProps={{ transition: "pop", duration: 500 }}
        >
          <RiMoonClearFill color="var(--mantine-color-snails-8)" />
        </Tooltip>
      ) : (
        <Tooltip
          label="Light mode"
          transitionProps={{ transition: "pop", duration: 500 }}
        >
          <RiSunFill color="var(--mantine-color-snails-2)" />
        </Tooltip>
      )}
    </ActionIcon>
  ): null;
}