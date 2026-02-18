import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Como Funciona", href: "#how-it-works" },
  { name: "Para Quem É", href: "#target-audience" },
  { name: "Preço", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-black/70 backdrop-blur-md border-white/10 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <img src="/logo.png" alt="D3LTA AI" className="w-8 h-8 rounded-lg transition-all" />
            <span className="font-bold text-xl tracking-tight text-white">D3LTA AI</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            className="rounded-full bg-white text-black hover:bg-gray-200 font-semibold px-6 shadow-lg hover:shadow-xl transition-all"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Delta-AI-Setup-1.0.0.exe';
              link.download = 'Delta-AI-Setup-1.0.0.exe';
              link.click();
            }}
          >
            Baixar Agora
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 absolute w-full px-4 py-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-medium text-zinc-300 hover:text-white py-2"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="w-full rounded-full bg-white text-black mt-2"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Delta-AI-Setup-1.0.0.exe';
              link.download = 'Delta-AI-Setup-1.0.0.exe';
              link.click();
              setIsMobileMenuOpen(false);
            }}
          >
            Baixar Agora
          </Button>
        </div>
      )}
    </nav>
  );
}
