import { Award, BadgeCheck, BriefcaseBusiness, GraduationCap, Rocket, UsersRound, Workflow } from "lucide-react";
import { about } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const iconMap = [BriefcaseBusiness, Rocket, GraduationCap, BadgeCheck];
const workingStyleIcons = [Workflow, UsersRound];

export default function About() {
  return (
    <section id="about" className="border-b border-ink-200/80 bg-white py-20 dark:border-white/10 dark:bg-ink-950 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="About"
          title="Engineer, product builder, and practical platform thinker."
          description={about.intro}
        />

        <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="grid gap-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-ink-700 dark:text-ink-200">
                {paragraph}
              </p>
            ))}

            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              {about.workingStyle.map((item, index) => {
                const Icon = workingStyleIcons[index] || Workflow;

                return (
                  <div
                    key={item.title}
                    className="rounded-lg border border-ink-200 bg-ink-50 p-5 dark:border-white/10 dark:bg-white/5"
                  >
                    <Icon className="mb-3 text-signal-teal" size={22} aria-hidden="true" />
                    <p className="text-sm font-semibold text-ink-950 dark:text-white">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-ink-600 dark:text-ink-300">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            {about.profileCards.map((card, index) => {
              const Icon = iconMap[index] || Award;

              return (
                <article
                  key={card.title}
                  className="rounded-lg border border-ink-200 bg-ink-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-ink-950 shadow-sm dark:bg-white/10 dark:text-white">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink-950 dark:text-white">{card.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-ink-700 dark:text-ink-200">{card.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
