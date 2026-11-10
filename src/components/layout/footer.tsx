import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060713]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="text-xl font-bold">
              <span className="gradient-text">GM.</span>
            </a>
            <p className="mt-3 text-sm text-slate-400">Gazi Mohammadullah</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
              Aspiring Full-Stack Web Developer building modern, responsive, and
              user-friendly web applications.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">
              Quick Navigation
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-400">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Connect</h3>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://github.com/mohhammadullah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 p-2 text-slate-300 hover:border-violet-400/50 hover:text-white transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gazi-mohammadullah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 p-2 text-slate-300 hover:border-cyan-400/50 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:gmhgazi92@gmail.com"
                aria-label="Email"
                className="rounded-full border border-white/10 p-2 text-slate-300 hover:border-violet-400/50 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 Gazi Mohammadullah. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-300 hover:text-white hover:border-violet-400/40 transition-colors"
          >
            <ArrowUp className="h-4 w-4" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
