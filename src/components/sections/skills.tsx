"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const reduce = useReducedMotion();
  return (
    <section id="skills" className="section-padding bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">My Tech Stack</span>
          </h2>
          <p className="mt-2 text-slate-400">
            Technologies I use to build modern web applications.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                {cat.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="group flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5 transition hover:border-violet-400/30 hover:bg-white/[0.06]"
                    >
                      <Icon
                        className="h-5 w-5 shrink-0"
                        style={{ color: item.color }}
                      />
                      <span className="text-sm text-slate-200">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
