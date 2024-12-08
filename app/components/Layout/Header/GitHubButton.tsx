"use client";

import Link from "next/link";
import Image from "next/image";
import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { useMounted } from "@mantine/hooks";
import { convertSizeToPx } from "lib/utils/fontSize";

export default function GitHubButton({ link, size, radius }: {
  link: string,
  size: string,
  radius: string
}) {
  const isLight = useMantineColorScheme().colorScheme === "light";
  const isMounted = useMounted();
  const pxSize = convertSizeToPx(size);

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
        <Image
          src={ isLight ? "/github-mark.png" : "/github-mark-white.png" }
          width={pxSize}
          height={pxSize}
          alt="GitHub"
        />
      </Tooltip>
    </ActionIcon>
  ) : null;
}