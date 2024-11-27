"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "components/Layout/Header/Header.module.scss";

interface Props {
  path: string;
  label: string;
}

// Custom Link component to show which page user is currently on
export default function NavLink({ path, label }: Props) {
  const pathname = usePathname();
  const isActive = pathname === path;
  const className = isActive ? `${classes["nav-link-active"]}` : `${classes["nav-link"]}`

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