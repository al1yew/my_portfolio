"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

function getThemePreference(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const storedTheme = window.localStorage.getItem("theme");

  if (storedTheme) {
    return storedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function subscribeTheme(callback: () => void): () => void {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = () => callback();

  window.addEventListener("storage", handleChange);
  window.addEventListener("theme-change", handleChange);
  mediaQuery.addEventListener("change", handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener("theme-change", handleChange);
    mediaQuery.removeEventListener("change", handleChange);
  };
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribeTheme, getThemePreference, () => false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-800 transition hover:border-ink-500 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:border-white/15 dark:bg-white/5 dark:text-ink-100 dark:hover:border-white/35 dark:hover:text-white dark:focus:ring-offset-ink-950"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
