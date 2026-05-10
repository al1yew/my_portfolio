import Image from "next/image";
import { BadgeCheck, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { hero, projects, site } from "../data/portfolio";

export default function Hero() {
  const previewProjects = projects.slice(0, 3);

  return (
    <section id="top" className="relative overflow-hidden border-b border-ink-200/80 dark:border-white/10">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-ink-200 bg-white px-3 py-2 text-sm font-semibold text-ink-700 shadow-sm dark:border-white/15 dark:bg-white/5 dark:text-ink-100">
            <MapPin size={16} className="text-signal-teal" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold text-ink-950 dark:text-white md:text-6xl">
            {hero.name}
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-8 text-ink-800 dark:text-ink-100 md:text-2xl md:leading-10">
            {hero.position}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-ink-700 dark:text-ink-200 md:text-lg">
            {hero.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {site.recruiterSignals.map((signal) => (
              <span
                key={signal}
                className="inline-flex items-center gap-2 rounded-md border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-ink-100"
              >
                <BadgeCheck size={15} className="text-signal-teal" aria-hidden="true" />
                {signal}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100 dark:focus:ring-offset-ink-950"
            >
              Contact me
              <Mail size={17} aria-hidden="true" />
            </a>
            <a
              href={site.cvUrl}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink-300 bg-white px-5 py-3 text-sm font-semibold text-ink-900 transition hover:border-ink-700 hover:bg-ink-50 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/45 dark:hover:bg-white/10 dark:focus:ring-offset-ink-950"
            >
              <Download size={17} aria-hidden="true" />
              View CV
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink-300 bg-white px-5 py-3 text-sm font-semibold text-[#0a66c2] transition hover:border-[#0a66c2] hover:bg-[#0a66c2]/5 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:border-white/20 dark:bg-white/5 dark:text-[#7bb7f0] dark:hover:border-[#7bb7f0]/70 dark:hover:bg-[#0a66c2]/15 dark:focus:ring-offset-ink-950"
            >
              <Linkedin size={17} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink-300 bg-white px-5 py-3 text-sm font-semibold text-[#24292f] transition hover:border-[#24292f] hover:bg-ink-50 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/45 dark:hover:bg-white/10 dark:focus:ring-offset-ink-950"
            >
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-ink-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-2xl font-semibold text-ink-950 dark:text-white">{stat.value}</p>
                <p className="mt-2 whitespace-pre-line text-sm leading-6 text-ink-600 dark:text-ink-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:pl-4">
          <div className="rounded-lg border border-ink-200 bg-white p-4 shadow-soft dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between border-b border-ink-200 pb-4 dark:border-white/10">
              <div>
                <p className="text-sm font-semibold text-ink-950 dark:text-white">
                  Platform portfolio
                </p>
                <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">
                  Insurance, automotive, marketplace, e-commerce
                </p>
              </div>
              <span className="rounded-md bg-ink-950 px-3 py-1.5 text-xs font-semibold text-white dark:bg-white dark:text-ink-950">
                2026
              </span>
            </div>

            <div className="mt-4 grid gap-4">
              {previewProjects.map((project, index) => (
                <a
                  key={project.name}
                  href={project.href || "#work"}
                  target={project.href ? "_blank" : undefined}
                  rel={project.href ? "noreferrer" : undefined}
                  className="group grid gap-4 rounded-lg border border-ink-200 bg-ink-50 p-3 transition hover:border-ink-400 hover:bg-white dark:border-white/10 dark:bg-ink-900 dark:hover:border-white/25 dark:hover:bg-white/5 sm:grid-cols-[168px_1fr]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-white dark:bg-ink-800">
                    <Image
                      src={project.image}
                      alt={`${project.name} project preview`}
                      fill
                      sizes="(min-width: 1024px) 168px, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      priority={index === 0}
                    />
                  </div>
                  <div className="min-w-0 self-center">
                    <p className="text-xs font-semibold uppercase text-signal-blue dark:text-blue-300">
                      {project.type}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-ink-950 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink-600 dark:text-ink-300">
                      {project.summary}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {hero.strengths.map((strength) => (
                <div
                  key={strength}
                  className="rounded-md border border-ink-200 bg-white px-3 py-3 text-sm font-medium text-ink-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-200"
                >
                  {strength}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
