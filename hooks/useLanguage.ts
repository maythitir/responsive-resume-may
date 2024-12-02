"use client";

import { create } from "zustand";

type LanguageStore = {
  language: "en" | "th";
  toggleLanguage: () => void;
};

export const useLanguage = create<LanguageStore>((set) => ({
  language: "en",
  toggleLanguage: () => set((state) => ({ 
    language: state.language === "en" ? "th" : "en" 
  })),
}));