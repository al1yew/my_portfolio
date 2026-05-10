import { Award, ExternalLink, GraduationCap, Medal } from "lucide-react";
import { certifications, credentials, education, recognitions } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="border-b border-ink-200/80 bg-ink-50 py-20 dark:border-white/10 dark:bg-ink-900 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Education"
          title="Business education that supports better product engineering."
          description="A concise background in management, finance, business administration, software development, languages, and scholarships."
        />

        <div className="grid items-start gap-8 md:grid-cols-[0.92fr_1.08fr]">
          <div className="grid content-start gap-5">
            <div className="min-w-0">
              <div className="mb-5 flex items-center gap-3">
                <GraduationCap className="text-signal-blue" size={24} aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-ink-950 dark:text-white">Education</h3>
              </div>
              <div className="grid gap-4">
                {education.map((item) => (
                  <article
                    key={item.degree}
                    className="rounded-lg border border-ink-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-ink-950"
                  >
                    <p className="text-sm font-semibold text-signal-teal dark:text-teal-300">{item.period}</p>
                    <h4 className="mt-3 text-lg font-semibold text-ink-950 dark:text-white">{item.degree}</h4>
                    <p className="mt-2 text-sm font-medium text-ink-800 dark:text-ink-100">{item.school}</p>
                    <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{item.location}</p>
                    <ul className="mt-4 list-disc space-y-1 pl-5">
                      {item.details.map((detail) => (
                        <li key={detail} className="text-sm leading-6 text-ink-700 dark:text-ink-200">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <article className="rounded-lg border border-ink-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-ink-950">
              <div className="mb-5 flex items-center gap-3">
                <Medal className="text-signal-teal" size={24} aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-ink-950 dark:text-white">
                  Scholarships & Recognition
                </h3>
              </div>
              <div className="grid gap-3">
                {recognitions.map((recognition) => (
                  <div
                    key={recognition.title}
                    className="rounded-md border border-ink-200 bg-ink-50 p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-sm font-semibold text-ink-950 dark:text-white">
                        {recognition.title}
                      </h4>
                      <span className="text-xs font-semibold uppercase text-signal-teal dark:text-teal-300">
                        {recognition.meta}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-ink-700 dark:text-ink-200">
                      {recognition.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-ink-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-ink-950">
              <div className="mb-5 flex items-center gap-3">
                <Award className="text-signal-amber" size={24} aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-ink-950 dark:text-white">Credentials</h3>
              </div>
              <div className="grid gap-3">
                {credentials.map((credential) => (
                  <p
                    key={credential}
                    className="rounded-md border border-ink-200 bg-ink-50 p-4 text-sm leading-6 text-ink-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-200"
                  >
                    {credential}
                  </p>
                ))}
              </div>
            </article>
          </div>

          <div className="min-w-0">
            <article className="rounded-lg border border-ink-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-ink-950">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-ink-950 dark:text-white">Certifications</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">
                    Technical and language credentials preserved from the original portfolio, with direct certificate links available on every device.
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 lg:grid-cols-2">
                {certifications.map((certification) => (
                  <article
                    key={certification.title}
                    className="rounded-md border border-ink-200 bg-ink-50 p-4 outline-none focus-within:border-signal-teal focus-within:ring-2 focus-within:ring-signal-teal/20 dark:border-white/10 dark:bg-white/5"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase text-signal-teal dark:text-teal-300">
                        {certification.provider}
                      </p>
                      <h4 className="mt-1 text-base font-semibold text-ink-950 dark:text-white">
                        {certification.title}
                      </h4>
                      <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                        {certification.date}
                        {certification.meta ? ` · ${certification.meta}` : ""}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-ink-700 dark:text-ink-200">
                      {certification.description}
                    </p>
                    <a
                      href={certification.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex w-fit items-center gap-2 rounded-md border border-ink-200 bg-white px-3 py-2 text-xs font-semibold text-ink-800 transition hover:border-ink-500 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-signal-teal dark:border-white/10 dark:bg-ink-950 dark:text-ink-100 dark:hover:border-white/35 dark:hover:text-white"
                    >
                      Open certificate
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
