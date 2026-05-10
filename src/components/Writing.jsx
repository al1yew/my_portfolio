import { BookOpenText, Layers3, SearchCheck } from "lucide-react";
import { writing } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Writing() {
  return (
    <section id="writing" className="border-b border-ink-200/80 bg-white py-20 dark:border-white/10 dark:bg-ink-950 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Academic Profile"
          title="Research interests that strengthen product engineering."
          description={writing.intro}
        />

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {writing.profile.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-ink-200 bg-ink-50 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <Layers3 className="text-signal-blue dark:text-blue-300" size={22} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-ink-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink-700 dark:text-ink-200">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-lg border border-ink-200 bg-ink-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-5 flex items-center gap-3">
              <SearchCheck className="text-signal-teal" size={24} aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-ink-950 dark:text-white">Interests</h3>
            </div>
            <div className="grid gap-3">
              {writing.interests.map((interest) => (
                <p
                  key={interest}
                  className="rounded-md border border-ink-200 bg-white p-4 text-sm leading-6 text-ink-700 dark:border-white/10 dark:bg-ink-950 dark:text-ink-200"
                >
                  {interest}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-ink-200 bg-ink-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-5 flex items-center gap-3">
              <BookOpenText className="text-signal-amber" size={24} aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-ink-950 dark:text-white">Selected ResearchGate Writing</h3>
            </div>
            <ol className="grid gap-3">
              {writing.manuscripts.map((paper, index) => (
                <li
                  key={paper}
                  className="grid grid-cols-[36px_1fr] gap-3 rounded-md border border-ink-200 bg-white p-3 text-sm leading-6 text-ink-700 dark:border-white/10 dark:bg-ink-950 dark:text-ink-200"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink-50 text-xs font-semibold text-ink-950 dark:bg-white/10 dark:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="self-center">{paper}</span>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
}
