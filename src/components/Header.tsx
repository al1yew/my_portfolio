"use client";

import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { navItems, site } from "../data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    closeMenu();

    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        isScrolled
          ? "border-ink-200/80 bg-ink-50/95 shadow-sm backdrop-blur dark:border-white/10 dark:bg-ink-950/90"
          : "border-transparent bg-ink-50/80 backdrop-blur dark:bg-ink-950/80"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="flex items-center gap-3 rounded-md focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:focus:ring-offset-ink-950"
          onClick={(event) => scrollToSection(event, "#top")}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-ink-950 text-sm font-semibold text-white dark:bg-white dark:text-ink-950">
            VA
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-semibold text-ink-950 dark:text-white">
              Vasif Aliyev
            </span>
            <span className="block text-xs text-ink-600 dark:text-ink-300">
              Senior Full-Stack Engineer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => scrollToSection(event, item.href)}
              className="text-sm font-medium text-ink-700 transition hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:text-ink-200 dark:hover:text-white dark:focus:ring-offset-ink-950"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-800 transition hover:border-ink-500 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:border-white/15 dark:bg-white/5 dark:text-ink-100 dark:hover:border-white/35 dark:hover:text-white dark:focus:ring-offset-ink-950"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-800 transition hover:border-ink-500 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:border-white/15 dark:bg-white/5 dark:text-ink-100 dark:hover:border-white/35 dark:hover:text-white dark:focus:ring-offset-ink-950"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <ThemeToggle />
          <a
            href={site.cvUrl}
            className="inline-flex items-center gap-2 rounded-md bg-ink-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100 dark:focus:ring-offset-ink-950"
          >
            <Download size={16} aria-hidden="true" />
            CV
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-800 transition hover:border-ink-500 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:border-white/15 dark:bg-white/5 dark:text-ink-100 dark:hover:border-white/35 dark:hover:text-white dark:focus:ring-offset-ink-950"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-ink-200 bg-ink-50 px-5 py-5 shadow-soft dark:border-white/10 dark:bg-ink-950 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                className="rounded-md px-3 py-3 text-base font-medium text-ink-800 transition hover:bg-white hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-signal-teal dark:text-ink-100 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-ink-200 bg-white px-4 py-3 text-sm font-semibold text-ink-900 dark:border-white/15 dark:bg-white/5 dark:text-white"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-ink-200 bg-white px-4 py-3 text-sm font-semibold text-ink-900 dark:border-white/15 dark:bg-white/5 dark:text-white"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
              <a
                href={site.cvUrl}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-ink-950 px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-ink-950"
              >
                <Download size={16} aria-hidden="true" />
                CV
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
