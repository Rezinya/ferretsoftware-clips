"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "components/Layout/NavMenu/NavMenu.module.scss";

interface Props {
  path: string;
  label: string;
}

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