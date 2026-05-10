import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink-50 py-20 dark:bg-ink-900 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Available for senior engineering and product-focused platform work."
          description="Best fits are product teams, platform initiatives, full-stack engineering roles, mobile/web builds, technical leadership, and production systems that need clean delivery."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-ink-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-ink-950 md:p-7">
            <h3 className="text-2xl font-semibold text-ink-950 dark:text-white">Reach Vasif</h3>
            <p className="mt-3 text-base leading-8 text-ink-700 dark:text-ink-200">
              For senior full-stack, product engineering, platform, or technical leadership conversations, email or LinkedIn is usually the fastest way to reach me.
            </p>

            <div className="mt-7 grid gap-3">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-md border border-ink-200 bg-ink-50 p-4 text-sm font-medium text-ink-800 transition hover:border-ink-400 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-ink-100 dark:hover:border-white/25"
              >
                <Mail size={19} className="text-signal-teal" aria-hidden="true" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replaceAll(" ", "")}`}
                className="flex items-center gap-3 rounded-md border border-ink-200 bg-ink-50 p-4 text-sm font-medium text-ink-800 transition hover:border-ink-400 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-ink-100 dark:hover:border-white/25"
              >
                <Phone size={19} className="text-signal-blue" aria-hidden="true" />
                {site.phone}
              </a>
              <p className="flex items-center gap-3 rounded-md border border-ink-200 bg-ink-50 p-4 text-sm font-medium text-ink-800 dark:border-white/10 dark:bg-white/5 dark:text-ink-100">
                <MapPin size={19} className="text-signal-amber" aria-hidden="true" />
                Kraków, Poland · remote, hybrid, and international senior engineering roles
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-ink-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#0a66c2] transition hover:border-[#0a66c2] hover:bg-[#0a66c2]/5 dark:border-white/20 dark:bg-white/5 dark:text-[#7bb7f0] dark:hover:border-[#7bb7f0]/70 dark:hover:bg-[#0a66c2]/15"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-ink-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#24292f] transition hover:border-[#24292f] hover:bg-ink-50 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/45 dark:hover:bg-white/10"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-ink-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#ea4335] transition hover:border-[#ea4335] hover:bg-[#ea4335]/5 dark:border-white/20 dark:bg-white/5 dark:text-[#ff9a90] dark:hover:border-[#ff9a90]/70 dark:hover:bg-[#ea4335]/15"
              >
                <Mail size={16} aria-hidden="true" />
                Gmail
              </a>
              <a
                href={site.cvUrl}
                className="inline-flex items-center gap-2 rounded-md bg-ink-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100"
              >
                <Download size={16} aria-hidden="true" />
                CV
              </a>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mdoryeeo"
            method="POST"
            className="rounded-lg border border-ink-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-ink-950 md:p-7"
          >
            <h3 className="text-2xl font-semibold text-ink-950 dark:text-white">Send a message</h3>
            <div className="mt-6 grid gap-5">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-ink-800 dark:text-ink-100">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-2 w-full rounded-md border border-ink-300 bg-ink-50 px-4 py-3 text-base text-ink-950 outline-none transition placeholder:text-ink-500 focus:border-signal-teal focus:ring-2 focus:ring-signal-teal/20 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-ink-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-ink-800 dark:text-ink-100">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded-md border border-ink-300 bg-ink-50 px-4 py-3 text-base text-ink-950 outline-none transition placeholder:text-ink-500 focus:border-signal-teal focus:ring-2 focus:ring-signal-teal/20 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-ink-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold text-ink-800 dark:text-ink-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full resize-y rounded-md border border-ink-300 bg-ink-50 px-4 py-3 text-base text-ink-950 outline-none transition placeholder:text-ink-500 focus:border-signal-teal focus:ring-2 focus:ring-signal-teal/20 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-ink-400"
                  placeholder="What would you like to build, discuss, or collaborate on?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100 dark:focus:ring-offset-ink-950"
              >
                <Mail size={17} aria-hidden="true" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
