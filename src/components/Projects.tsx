import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Layers3, Rocket } from "lucide-react";
import { privateProducts, projectArchive, projects } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="work" className="border-b border-ink-200/80 bg-white py-20 dark:border-white/10 dark:bg-ink-950 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Platform work with product, engineering, and business context."
          description="Every project from the original portfolio data is preserved here, with the strongest platform and client work featured first and the full archive kept visible below."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex min-h-full flex-col overflow-hidden rounded-lg border border-ink-200 bg-ink-50 shadow-sm transition hover:border-ink-400 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/25"
            >
              <div className="border-b border-ink-200 bg-white p-2 dark:border-white/10 dark:bg-ink-900">
                <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-ink-50 dark:bg-ink-950">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-signal-blue ring-1 ring-ink-200 dark:bg-white/10 dark:text-blue-200 dark:ring-white/10">
                    {project.type}
                  </span>
                  <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-signal-amber ring-1 ring-ink-200 dark:bg-white/10 dark:text-amber-200 dark:ring-white/10">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-ink-950 dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-3 text-base leading-8 text-ink-700 dark:text-ink-200">
                  {project.summary}
                </p>

                <ul className="mt-5 grid gap-2">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-7 text-ink-700 dark:text-ink-200">
                      <Layers3
                        size={16}
                        className="mt-1.5 shrink-0 text-signal-teal dark:text-teal-300"
                        aria-hidden="true"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-ink-200 bg-white px-2.5 py-1 text-xs font-medium text-ink-700 dark:border-white/10 dark:bg-ink-950 dark:text-ink-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-ink-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100 dark:focus:ring-offset-ink-950"
                  >
                    Open Project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase text-signal-teal dark:text-teal-300">
              Private Product Lab
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-ink-950 dark:text-white">
              Private product work with product, mobile, and architecture ownership.
            </h3>
          </div>

          <div className="grid gap-5">
            {privateProducts.map((product) => (
              <article
                key={product.name}
                className="grid gap-7 rounded-lg border border-ink-200 bg-ink-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/5 md:p-7 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-signal-blue ring-1 ring-ink-200 dark:bg-white/10 dark:text-blue-200 dark:ring-white/10">
                      {product.status}
                    </span>
                    <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-signal-amber ring-1 ring-ink-200 dark:bg-white/10 dark:text-amber-200 dark:ring-white/10">
                      {product.role}
                    </span>
                  </div>
                  <h3 className="mt-5 text-3xl font-semibold text-ink-950 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase text-signal-teal dark:text-teal-300">
                    {product.positioning}
                  </p>
                  <p className="mt-4 text-base leading-8 text-ink-700 dark:text-ink-200">
                    {product.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-ink-200 bg-white px-2.5 py-1 text-xs font-medium text-ink-700 dark:border-white/10 dark:bg-ink-950 dark:text-ink-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-ink-200 bg-white p-5 dark:border-white/10 dark:bg-ink-950">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink-950 text-white dark:bg-white dark:text-ink-950">
                      <Rocket size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-950 dark:text-white">
                        {product.stage}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-ink-600 dark:text-ink-300">
                        {product.note}
                      </p>
                    </div>
                  </div>

                  {product.features?.length ? (
                    <ul className="mt-5 grid gap-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-7 text-ink-700 dark:text-ink-200">
                        <BadgeCheck
                          size={16}
                          className="mt-1.5 shrink-0 text-signal-teal dark:text-teal-300"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase text-signal-teal dark:text-teal-300">
                Additional Original Projects
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-ink-950 dark:text-white">
                Earlier work kept visible for completeness and technical range.
              </h3>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projectArchive.map((project) => (
              <article
                key={project.name}
                className="grid gap-4 rounded-lg border border-ink-200 bg-ink-50 p-4 dark:border-white/10 dark:bg-white/5 sm:grid-cols-[180px_1fr]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-white dark:bg-ink-900">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    sizes="(min-width: 768px) 180px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="self-center">
                  <h4 className="text-lg font-semibold text-ink-950 dark:text-white">{project.name}</h4>
                  <p className="mt-2 text-sm leading-7 text-ink-700 dark:text-ink-200">{project.summary}</p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-signal-blue hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-signal-teal dark:text-blue-300 dark:hover:text-white"
                  >
                    View
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
