"use client";
import Link from "next/link";
import { ModeToggle } from "./ui/toggle-mode";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="w-full shadow-sm ">
      <div className="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
        <nav className="flex flex-wrap items-center justify-center space-x-6 lg:space-x-8 md:pl-0 pl-24 text-base md:ml-auto md:mr-auto">
          <Link
            href="/"
            className={`text-md font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/currency-list"
            className={`text-md font-medium transition-colors hover:text-primary ${
              pathname === "/currency-list"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            Currency list
          </Link>
          {/* <Link
            href="/about-us"
            className={`text-md font-medium transition-colors hover:text-primary ${
              pathname === "/about-us"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className={`text-md font-medium transition-colors hover:text-primary ${
              pathname === "/contact-us"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            Contact Us
          </Link> */}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
