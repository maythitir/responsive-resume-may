"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "../ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
          <Image
  src="/CA1E651D-0798-4DB1-8EA9-7B27E3BF369B.jpg"
  alt="Profile"
  fill
  className="object-cover transition-transform duration-500 group-hover:scale-110"
/>
            <motion.div
              className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              {t.about.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-6"
            >
              {t.about.description}
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-bold mb-2 text-primary">2+</h3>
                  <p className="text-sm text-muted-foreground">{t.about.years}</p>
                </Card>
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-bold mb-2 text-primary">20+</h3>
                  <p className="text-sm text-muted-foreground">{t.about.projects}</p>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}