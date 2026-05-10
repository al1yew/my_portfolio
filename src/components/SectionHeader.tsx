type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase text-signal-teal dark:text-teal-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-ink-950 dark:text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-ink-700 dark:text-ink-200">
          {description}
        </p>
      ) : null}
    </div>
  );
}
