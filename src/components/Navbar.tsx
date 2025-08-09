"use client";

import { Menu, TrendingUp, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface NAvigationProps {
  label: string;
  active: boolean;
  href: string;
}

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items based on the reference image
  const navItems: NAvigationProps[] = [
    { label: "Home", active: true, href: "/" },
    { label: "Sponsor", active: false, href: "/sponsor" },
    { label: "Volunteer", active: false, href: "/volunteer" },
    { label: "Contact us", active: false, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 h-24 w-full bg-[#031632] flex items-center justify-between px-8">
      <a href="/">
        <img alt="Logo" src="/logo.png" className="h-12 w-auto" />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-end justify-end gap-8 absolute left-1/2 -translate-x-1/2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`text-lg font-medium transition-colors pb-1 ${
              item.active
                ? "text-[#f48636] border-b-2 border-[#f48636]"
                : "text-white hover:text-[#f48636]"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <Menu className="w-7 h-7" />
        )}
      </button>

      {/* Desktop Register Button */}
      <a
        href="https://lu.ma/xuilf4vq"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex"
      >
        <Button className="flex items-center justify-center gap-2.5 px-6 bg-[#f48636] hover:bg-[#f48636]/90 text-white rounded-lg text-lg font-bold">
          <span>Register</span>
          <TrendingUp className="w-5 h-5" />
        </Button>
      </a>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed inset-0 bg-[#031632] transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-10">
          {navItems.map((item) => (
            <a
              key={`mobile-${item.href}`}
              href={item.href}
              className={`text-2xl font-medium ${
                item.active ? "text-[#f48636]" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://lu.ma/xuilf4vq"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8"
          >
            <Button className="flex items-center justify-center gap-2.5 px-8 py-4 bg-[#f48636] hover:bg-[#f48636]/90 text-white rounded-lg text-2xl font-bold">
              <span>Register</span>
              <TrendingUp className="w-6 h-6" />
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};
