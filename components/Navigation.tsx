"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold">Thitirat.Kan</h1>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">
              {t.nav.about}
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              {t.nav.experience}
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              {t.nav.skills}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t.nav.contact}
            </a>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
              <Button>
  <a href="/resume_thitirat.pdf" download>
    {t.nav.download}
  </a>
</Button>

            </div>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}