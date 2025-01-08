import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="flex container mx-auto justify-between items-center">
        {/* LOGO COMES HERE */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            B<span className="text-accent">S</span>
          </h1>
        </Link>
        {/* Navigation Menu & Button */}
        {/* When Nav menu becomes XL then hide it*/}
        <div className="hidden xl:flex items-center gap-8 ">
          <Nav></Nav>
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </div>

        {/* Mobile Navigation Header*/}
        <div className="xl:hidden flex gap-8">
          <MobileNav></MobileNav>
        </div>
      </div>
    </header>
  );
};

export default Header;
