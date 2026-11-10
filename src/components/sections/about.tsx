"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export function About() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="mt-2 text-slate-400">Get to know me better</p>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="glass gradient-border overflow-hidden rounded-3xl">
              <Image
                src="https://drive.google.com/uc?export=view&id=1n0G-Lre6DhiCmA_CmmFskyuctKNDlxh0"
                alt="Gazi Mohammadullah"
                width={700}
                height={800}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <p className="text-lg leading-relaxed text-slate-200">
              I&apos;m Gazi Mohammadullah, an aspiring Full-Stack Web Developer
              from Khulna, Bangladesh. I enjoy building modern, responsive, and
              user-friendly web applications using React, Next.js, TypeScript,
              Node.js, Express.js, and MongoDB. I love learning new
              technologies, solving problems, and turning creative ideas into
              functional digital experiences. My goal is to build impactful web
              solutions and grow as a professional software developer.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Passionate about web development and creating meaningful digital
                experiences.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" />
                Interested in modern frontend technologies and polished user
                interfaces.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Continuing my backend development learning journey with Node.js
                and MongoDB.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" />
                Focused on clean, maintainable code and thoughtful problem
                solving.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Motivated to grow as a professional software developer and build
                impactful web solutions.
              </li>
            </ul>
            <div className="mt-8 glass gradient-border inline-flex items-start gap-3 rounded-2xl p-4">
              <div className="rounded-lg bg-violet-500/20 p-2 text-violet-300">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">
                  Passionate About Building for the Web
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Turning ideas into reliable, modern, and user-friendly
                  applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
