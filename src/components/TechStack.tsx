import { stack } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function TechStack() {
  return (
    <section id="stack" className="border-b border-ink-200/80 bg-white py-20 dark:border-white/10 dark:bg-ink-950 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Modern full-stack tools with architecture and product judgment."
          description="A practical stack shaped by production work: fast interfaces, secure APIs, localized platforms, data workflows, delivery pipelines, and maintainable product decisions."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {stack.map((group) => (
            <article
              key={group.group}
              className="rounded-lg border border-ink-200 bg-ink-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-xl font-semibold text-ink-950 dark:text-white">{group.group}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-700 dark:border-white/10 dark:bg-ink-950 dark:text-ink-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
