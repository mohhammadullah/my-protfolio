import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export function GithubActivity() {
  return (
    <section id="github" className="section-padding bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">My GitHub Activity</span>
          </h2>
          <p className="mt-2 text-slate-400">
            Explore my repositories and development work.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="glass gradient-border rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <FaGithub className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  mohhammadullah
                </p>
                <p className="text-sm text-slate-400">GitHub Profile</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Visit my GitHub to explore public repositories, project source
              code, and my ongoing learning as a full-stack web developer.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/mohhammadullah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:brightness-110 transition"
              >
                <FaGithub className="h-4 w-4" /> View Profile
              </a>
              <a
                href="https://github.com/mohhammadullah?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <ExternalLink className="h-4 w-4" /> View Repositories
              </a>
            </div>
            <p className="mt-5 text-xs text-slate-500">
              Live contribution counts and repository statistics are not
              fabricated here.
            </p>
          </div>
          <div className="glass overflow-hidden rounded-2xl p-4 sm:p-6">
            <p className="mb-3 text-sm font-medium text-slate-300">
              Contribution Graph
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0b0e1d] p-3">
              <Image
                src="https://ghchart.rshah.org/8b5cf6/mohhammadullah"
                alt="GitHub contribution graph for mohhammadullah"
                width={900}
                height={140}
                className="h-auto min-w-[640px] w-full"
                unoptimized
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Graph provided by a third-party service and shown for visual
              reference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
