"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/Navigation";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <MobileMenu />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}