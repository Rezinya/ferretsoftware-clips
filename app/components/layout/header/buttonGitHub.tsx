"use client";

import Link from "next/link";
import Image from "next/image";
import { ActionIcon, Tooltip, useComputedColorScheme } from "@mantine/core";
import { convertSizeToPx } from "utils/fontSize";

export default function GitHubButton({ link, size, radius }: {
  link: string,
  size: string,
  radius: string
}) {
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  const pxSize = convertSizeToPx({size});

  return (
    <ActionIcon
      component={Link}
      variant="outline"
      href={link}
      size={size}
      radius={radius}
      aria-label="Source code"
    >
      <Tooltip
        label="Source code"
        transitionProps={{ transition: "pop", duration: 500 }}
      >
        {computedColorScheme === "light" ? (
          <Image
            src="/github-mark.png"
            width={pxSize}
            height={pxSize}
            alt="GitHub"
          />
        ) : (
          <Image
            src="/github-mark-white.png"
            width={pxSize}
            height={pxSize}
            alt="GitHub"
          />
        )}
        
      </Tooltip>
    </ActionIcon>
  );
}