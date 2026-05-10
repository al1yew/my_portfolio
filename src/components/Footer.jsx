import { site } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white py-8 dark:border-white/10 dark:bg-ink-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-ink-600 dark:text-ink-300 md:flex-row md:items-center md:justify-between md:px-8">
        <p>Copyright 2026 {site.name}. Senior full-stack software engineer and digital platform builder.</p>
        <p>Kraków, Poland | Remote-friendly international work.</p>
      </div>
    </footer>
  );
}
