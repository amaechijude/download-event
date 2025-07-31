import { Menu, MoveRightIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface NAvigationProps {
  label: string;
  active: boolean;
  href: string;
}

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems: NAvigationProps[] = [
    { label: "Home", active: true, href: "/" },
    { label: "About", active: false, href: "#about" },
    { label: "Sponsor", active: false, href: "/sponsor"},
    { label: "Volunteer", active: false, href: "/volunteer" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full h-[114px] left-0 bg-[#031632] flex items-center justify-between px-4 md:px-14">
      <img 
        className="w-[150px] md:w-[212px] h-auto md:h-[74px]" 
        alt="Logo" 
        src="/logo.png" 
      />

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed inset-0 top-[114px] bg-[#031632] transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 p-8">
          {navItems.map((item, index) => (
            <div
              key={`mobile-nav-${index}`}
              className={`p-2.5 ${
                item.active ? "border-b [border-bottom-style:solid] border-[#f48636]" : ""
              }`}
            >
              <div
                className={`[font-family:'Bricolage_Grotesque',Helvetica] ${
                  item.active
                    ? "font-bold text-app-secondary"
                    : "font-medium text-white"
                } text-xl tracking-[0] leading-[normal] whitespace-nowrap`}
              >
                <a href={item.href}>{item.label}</a>
              </div>
            </div>
          ))}
          <Button className="w-full max-w-[199px] h-[60px] flex items-center justify-center gap-2.5 px-[46px] py-6 bg-app-secondary rounded-2xl overflow-hidden border border-solid border-[#ffffffb2]">
            <span className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-[#f6f6f6] text-2xl tracking-[0] leading-[normal]">
              Buy Ticket
            </span>
            <MoveRightIcon className="w-[26px] h-[26px]" />
          </Button>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:inline-flex items-center gap-5 absolute left-1/2 -translate-x-1/2">
        {navItems.map((item, index) => (
          <div
            key={`nav-${index}`}
            className={`inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[10px] ${
              item.active ? "border-b [border-bottom-style:solid] border-[#f48636]" : ""
            }`}
          >
            <div
              className={`relative w-fit [font-family:'Bricolage_Grotesque',Helvetica] ${
                item.active
                  ? "font-bold text-app-secondary"
                  : "font-medium text-white"
              } text-xl tracking-[0] leading-[normal] whitespace-nowrap`}
            >
              <a href={item.href}>{item.label}</a>
            </div>
          </div>
        ))}
      </nav>

      {/* Desktop Buy Ticket Button */}
      <a href="https://lu.ma/xuilf4vq" target="_blank" rel="noopener noreferrer">
      <Button className="hidden md:flex w-[199px] h-[60px] items-center justify-center gap-2.5 px-[46px] py-6 bg-app-secondary rounded-2xl overflow-hidden border border-solid border-[#ffffffb2]">
        <span className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-[#f6f6f6] text-2xl tracking-[0] leading-[normal]">
          Register
        </span>
        <MoveRightIcon className="w-[26px] h-[26px]" />
      </Button>
      </a>
    </header>
  );
};
