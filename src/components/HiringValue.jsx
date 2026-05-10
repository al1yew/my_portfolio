import { BriefcaseBusiness, Building2, CheckCircle2, Gauge, GraduationCap, Rocket, UsersRound } from "lucide-react";
import { senioritySignals, valueProposition } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const icons = [BriefcaseBusiness, Building2, Gauge, GraduationCap, UsersRound, Rocket];

export default function HiringValue() {
  return (
    <section id="value" className="border-b border-ink-200/80 bg-ink-50 py-16 dark:border-white/10 dark:bg-ink-900 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="What I Bring"
          title="Senior full-stack value in practice."
          description="A clear view of how I own systems, shape product decisions, improve architecture, and help teams deliver reliable software."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {valueProposition.map((item, index) => {
            const Icon = icons[index] || BriefcaseBusiness;

            return (
              <article
                key={item.title}
                className="rounded-lg border border-ink-200 bg-white p-5 shadow-sm transition hover:border-ink-400 dark:border-white/10 dark:bg-ink-950 dark:hover:border-white/25"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-ink-950 text-white dark:bg-white dark:text-ink-950">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-700 dark:text-ink-200">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <article className="mt-8 rounded-lg border border-ink-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-ink-950 md:p-7">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-semibold text-ink-950 dark:text-white">
              {senioritySignals.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink-700 dark:text-ink-200">
              {senioritySignals.description}
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {senioritySignals.items.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-ink-200 bg-ink-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-signal-teal dark:text-teal-300"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink-950 dark:text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-ink-700 dark:text-ink-200">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
