"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Atom,
  Layout,
  MonitorSmartphone,
  Palette,
  PanelsTopLeft,
  PlugZap,
  ServerCog,
} from "lucide-react";

const services = [
  {
    title: "Frontend Web Development",
    description:
      "Building modern, interactive interfaces with a focus on clarity, performance, and user experience.",
    icon: Layout,
  },
  {
    title: "Responsive Website Development",
    description:
      "Creating websites that look and work beautifully across desktop, tablet, and mobile devices.",
    icon: MonitorSmartphone,
  },
  {
    title: "React.js Development",
    description:
      "Developing component-based user interfaces with React for maintainable and dynamic web experiences.",
    icon: Atom,
  },
  {
    title: "Next.js Development",
    description:
      "Building structured, SEO-friendly applications using the Next.js App Router and modern practices.",
    icon: PanelsTopLeft,
  },
  {
    title: "Full-Stack Web Application Development",
    description:
      "Connecting frontend and backend parts to deliver complete, functional web application experiences.",
    icon: ServerCog,
  },
  {
    title: "REST API Integration",
    description:
      "Integrating APIs to fetch, display, and manage data smoothly within web applications.",
    icon: PlugZap,
  },
  {
    title: "Modern UI Implementation",
    description:
      "Translating clean designs into polished, accessible, and responsive user interfaces.",
    icon: Palette,
  },
];

export function Services() {
  const reduce = useReducedMotion();
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">What I Can Do</span>
          </h2>
          <p className="mt-2 text-slate-400">
            Services focused on modern web development.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group glass gradient-border rounded-2xl p-5 transition hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-3 text-cyan-300 ring-1 ring-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
