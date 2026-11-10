"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Code2, Layers, Rocket, Server } from "lucide-react";

const steps = [
  {
    title: "Web Development Learning",
    description:
      "Started building a strong foundation in web development, exploring how the web works and practicing core concepts through hands-on learning.",
    icon: BookOpen,
  },
  {
    title: "Frontend Development",
    description:
      "Focused on creating responsive layouts and interactive interfaces while developing a deeper interest in modern frontend experiences.",
    icon: Code2,
  },
  {
    title: "React and Next.js",
    description:
      "Learned to build component-based applications and explored Next.js for structured, modern web development.",
    icon: Layers,
  },
  {
    title: "TypeScript",
    description:
      "Adopted TypeScript to write clearer, more maintainable code and improve confidence while building applications.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description:
      "Expanded into backend fundamentals with Node.js, Express.js, and MongoDB to understand how full-stack applications work.",
    icon: Server,
  },
  {
    title: "Full-Stack Project Development",
    description:
      "Applied learning by building complete projects, connecting frontend and backend pieces, and turning ideas into functional web applications.",
    icon: Rocket,
  },
];

export function Journey() {
  const reduce = useReducedMotion();
  return (
    <section id="journey" className="section-padding bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">My Journey</span>
          </h2>
          <p className="mt-2 text-slate-400">
            A learning journey as an aspiring full-stack web developer.
          </p>
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/40 to-transparent sm:left-1/2 sm:-translate-x-px" />
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={step.title}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45 }}
                  className={`relative flex gap-4 sm:gap-8 ${right ? "sm:flex-row-reverse" : ""}`}
                >
                  <div className="absolute left-4 top-5 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-violet-400/40 bg-[#0b0e1d] text-violet-300 sm:left-1/2">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="ml-10 w-full sm:ml-0 sm:w-1/2">
                    <div className="glass rounded-2xl p-5">
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          Education details are not listed here to keep this section accurate
          and verified.
        </p>
      </div>
    </section>
  );
}
