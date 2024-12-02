"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import { AnimatedText } from "../ui/animated-text";
import { Sparkles } from "../ui/sparkles";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative">
        <div className="text-center">
          <AnimatedText
            text={t.hero.greeting}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4"
            delay={0.2}
          />
          <Sparkles>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-primary">Thitirat Kanokwareerat</span>
            </motion.h1>
          </Sparkles>
          <AnimatedText
            text={t.hero.role}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8"
            delay={0.8}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" className="group relative overflow-hidden w-full sm:w-auto">
              <span className="relative z-10">{t.hero.viewProjects}</span>
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">{t.hero.contactMe}</span>
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </motion.div>
    </section>
  );
}