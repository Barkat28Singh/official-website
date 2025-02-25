"use client";

import Link from "next/link";
import FooterNav from "./FooterNav";
import MobileNav from "./MobileNav";

const Footer = () => {
  return (
    <footer className="bg-pink-50/10 py-6 text-white mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-semibold flex justify-center items-center">
            B<span className="text-accent">S</span>
          </h1>
        </Link>

        {/* Desktop Footer Navigation */}
        <FooterNav />

        {/* Mobile Navigation (shown only on small screens) */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
      <p className="mt-4 text-center text-xs ">
        © {new Date().getFullYear()} Barkat Singh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
