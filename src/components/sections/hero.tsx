"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const phrases = [
  "Building Modern Digital Experiences",
  "Turning Ideas Into Web Applications",
  "Creating Beautiful User Experiences",
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % phrases.length),
      2800,
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-cyan-300/90">
            HELLO, I&apos;M
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Gazi Mohammadullah</span>
          </h1>
          <p className="mt-3 text-xl font-medium text-slate-200 sm:text-2xl">
            Full-Stack Web Developer
          </p>

          <div
            className="mt-5 h-8 text-base text-violet-200/90 sm:text-lg"
            aria-live="polite"
          >
            {reduce ? (
              <span>{phrases[0]}</span>
            ) : (
              <AnimatePresence mode="wait">
                <motion.span
                  key={phrases[index]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block"
                >
                  {phrases[index]}
                </motion.span>
              </AnimatePresence>
            )}
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I&apos;m an aspiring Full-Stack Web Developer passionate about
            building modern, responsive, and user-friendly web applications. I
            enjoy turning creative ideas into functional digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:brightness-110"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <a
              href="https://github.com/mohhammadullah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-violet-400/50 hover:text-white"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gazi-mohammadullah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-cyan-400/50 hover:text-white"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:gmhgazi92@gmail.com"
              aria-label="Email"
              className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-violet-400/50 hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-violet-600/30 via-cyan-500/20 to-transparent blur-2xl" />
          <motion.div
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={
              reduce
                ? undefined
                : { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }
            className="gradient-border rounded-[2rem] p-[2px]"
          >
            <div className="overflow-hidden rounded-[calc(2rem-2px)] bg-[#0b0e1d]">
              <Image
                src="https://drive.google.com/uc?export=view&id=1n0G-Lre6DhiCmA_CmmFskyuctKNDlxh0"
                alt="Portrait of Gazi Mohammadullah"
                width={640}
                height={640}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex justify-center pb-8">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-2 text-slate-400 transition hover:text-white"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.span
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={
              reduce ? undefined : { duration: 1.6, repeat: Infinity }
            }
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </a>
      </div>
    </section>
  );
}
