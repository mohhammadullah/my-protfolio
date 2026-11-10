"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const reduce = useReducedMotion();
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="mt-2 text-slate-400">
            Some of my recent development projects.
          </p>
        </div>

        <motion.article
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="glass gradient-border mb-8 overflow-hidden rounded-3xl"
        >
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={featured.screenshot}
                alt={`${featured.name} screenshot`}
                fill
                className="object-cover transition duration-500 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070816]/70 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-medium text-cyan-300/90">
                {featured.category}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {featured.name}
              </h3>
              <p className="mt-4 leading-relaxed text-slate-300">
                {featured.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {featured.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={featured.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:brightness-110 transition"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
                {featured.frontendGitHub && (
                  <a
                    href={featured.frontendGitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    <FaGithub className="h-4 w-4" /> Frontend Code
                  </a>
                )}
                {featured.backendGitHub && (
                  <a
                    href={featured.backendGitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    <FaGithub className="h-4 w-4" /> Backend Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <motion.article
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="glass group overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.screenshot}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-cyan-300/80">
                  {project.category}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15 transition",
                    )}
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 hover:text-white hover:border-violet-400/40 transition"
                    >
                      <FaGithub className="h-4 w-4" /> View Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
