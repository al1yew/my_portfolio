import { CheckCircle2 } from "lucide-react";
import { experience } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-ink-200/80 bg-ink-50 py-20 dark:border-white/10 dark:bg-ink-900 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Senior delivery across enterprise, automotive, insurance, and mobile platforms."
          description="A concise view of the work history behind the portfolio, with emphasis on ownership, architecture, performance, localization, QA, and production delivery."
        />

        <div className="grid gap-5">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="grid gap-6 rounded-lg border border-ink-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-ink-950 md:grid-cols-[0.34fr_0.66fr] md:p-7"
            >
              <div>
                <p className="text-sm font-semibold text-signal-teal dark:text-teal-300">{job.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink-950 dark:text-white">{job.role}</h3>
                <p className="mt-2 text-base font-medium text-ink-800 dark:text-ink-100">{job.company}</p>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{job.location}</p>
              </div>

              <div>
                <p className="text-base leading-8 text-ink-700 dark:text-ink-200">{job.summary}</p>
                <ul className="mt-5 grid gap-3">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-7 text-ink-700 dark:text-ink-200">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-signal-blue dark:text-blue-300"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
