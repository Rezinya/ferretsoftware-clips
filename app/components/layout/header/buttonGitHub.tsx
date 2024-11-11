"use client";

import Link from "next/link";
import Image from "next/image";

import { ActionIcon, Tooltip } from "@mantine/core";

import { convertSizeToPx } from "@/app/utils/fontSize";

export default function GitHubButton({ link, size, radius }: {
  link: string,
  size: string,
  radius: string
}) {
  const pxSize = convertSizeToPx({size});

  return (
    <ActionIcon
      component={Link}
      variant="light"
      href={link}
      size={size}
      radius={radius}
      aria-label="Source code"
    >
      <Tooltip
        label="Source code"
        transitionProps={{ transition: "pop", duration: 300 }}
      >
        <Image
          src="/github-mark-white.png"
          width={pxSize}
          height={pxSize}
          alt="GitHub"
        />
      </Tooltip>
    </ActionIcon>
  );
}