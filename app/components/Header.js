"use client";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-5xl rounded-full h-12 flex items-center px-4 md:px-8 transition-all duration-300
        ${
          scrolled
            ? "bg-white/70 dark:bg-white/10 shadow-lg backdrop-blur-lg border border-white/40 dark:border-white/20"
            : "bg-transparent shadow-none backdrop-blur-0 border border-transparent"
        }`}
    >
      {/* Logo */}
      <Link
        href="#home"
        className={`text-lg font-heading font-bold flex items-center gap-2 min-w-[80px] transition-colors duration-300 ${scrolled ? "text-black dark:text-white" : "text-white dark:text-white"}`}
      >
        Tito
      </Link>
      {/* Centered Nav Links */}
      <div className="flex-1 flex justify-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`relative font-bold text-sm transition-colors duration-300
              ${scrolled ? "text-black dark:text-white after:bg-black dark:after:bg-white" : "text-white dark:text-white after:bg-white"}
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:scale-x-0 after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100`}
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Actions */}
      <div className="flex items-center gap-2 min-w-[80px] justify-end">
        <a
          href="#contact"
          className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full font-semibold text-sm transition-colors duration-300
            ${scrolled ? "bg-black/80 dark:bg-white/20 text-white dark:text-white hover:bg-blue-800 dark:hover:bg-white/30" : "bg-white/20 text-white hover:bg-white/40"}`}
        >
          Contact
        </a>
        {/* Mobile Hamburger */}
        <button className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <HamburgerMenuIcon
            className={`w-5 h-5 transition-colors duration-300 ${scrolled ? "text-black dark:text-white" : "text-white"}`}
          />
        </button>
      </div>
    </header>
  );
}
