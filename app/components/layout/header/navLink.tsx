"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header.module.scss";

interface Props {
  path: string;
  label: string;
}

export default function NavLink({ path, label }: Props) {
  const pathname = usePathname();
  const isActive = pathname === path;
  const className = isActive ? `${styles["nav-link-active"]}` : `${styles["nav-link"]}`

  return (
    <Link
      href={path}
      key={label}
      className={className}
    >
      {label}
    </Link>
  );
}