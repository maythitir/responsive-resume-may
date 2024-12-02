"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="rounded-full text-sm font-medium"
    >
      {language === "en" ? "TH" : "EN"}
    </Button>
  );
}