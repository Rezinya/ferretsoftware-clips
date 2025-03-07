"use client";

import Link from "next/link";
import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { useMounted } from "@mantine/hooks";

export default function GitHubButton({ link, size, radius }: {
  link: string,
  size: string,
  radius: string
}) {
  const isLight = useMantineColorScheme().colorScheme === "light";
  const isMounted = useMounted();

  return isMounted ? (
    <ActionIcon
      component={Link}
      variant="transparent"
      href={link}
      size={size}
      radius={radius}
      aria-label="Source code"
    >
      <Tooltip
        label="Source code"
        transitionProps={{ transition: "pop", duration: 500 }}
      >
        <img
          src={ isLight ? "/github-mark.png" : "/github-mark-white.png" }
          width={30}
          height={30}
          alt="GitHub"
        />
      </Tooltip>
    </ActionIcon>
  ) : null;
}