"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Big C Supercenter",
    period: "Jan 2023 - Present",
    description: "Specialized in developing scalable backend systems using Golang and Microservices for e-commerce and fulfillment applications. Proficient in building RESTful APIs and gRPC services, optimizing MySQL database performance, integrating secure third-party services, and ensuring reliability through comprehensive testing",
    skills: ["Golang", "Microservices", "MySql", "AWS"]
  },
  {
    title: "Full Stack Developer",
    company: "Ai and Robotics Ventures",
    period: "July 2022 - Dec 2023",
    description: "Contributed to the development of a smart city platform by building components with React, HTML, CSS, JavaScript, and TypeScript. Prototyped a company landing page using Next.js and a low-code application with Flutterflow. Conducted platform performance testing using Apache JMeter, authored test cases to ensure compliance with functionality, usability, and security standards, and implemented test automation using Playwright.",
    skills: ["JavaScript", "React", "CSS", "HTML", "Next.Js", "Flutterflow", "Playwright"]
  },
  {
    title: "Electrical Engineer-Internship",
    company: "Public Company Limited PTT",
    period: "January 2022 to April 2022",
    description: "Engaged in IoT-based projects focused on breaker control in industrial plants. Utilized Power BI to process and analyze large datasets, present data in user-friendly table formats, and uncover actionable business insights.",
    skills: ["Iot", "C/C++", "Arduino", "PowerBI"]
  },
  {
    title: "System Engineer-Internship",
    company: "Sony Technology Thailand",
    period: "May 2021 to August 2021",
    description: "Developed applications and programs in C# to support company operations and production lines, collaborating closely with production line operators to ensure seamless integration.",
    skills: ["C#", "Image Processing"]
  }
  
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}