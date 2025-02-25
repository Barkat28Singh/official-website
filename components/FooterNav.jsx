"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "work & projects",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const FooterNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col md:flex-row justify-center items-center gap-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize text-sm transition-all hover:text-accent ${
            link.path === pathname && "text-accent font-semibold"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default FooterNav;
