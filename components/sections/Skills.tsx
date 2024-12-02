"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Progress } from "../ui/progress";

const skills = [
  { name: "Golang", level: 95 },
  { name: "Python", level: 90 },
  { name: "UI/UX Design", level: 80 },
  { name: "Automate", level: 80 },
  { name: "Sql", level: 80 },
  { name: "Automate", level: 80 },
  { name: "TypeScript", level: 70 },
  { name: "React", level: 70 },
  { name: "Next.js", level: 70 },
  { name: "C#", level: 70 },
  { name: "AWS", level: 70 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}