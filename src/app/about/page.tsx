import type { Metadata } from "next";
import Link from "next/link";
import { CTA, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Blu Horizon Agency builds AI systems that replace knowledge workers. Founded by Callem — AI practitioner, not commentator.",
};

export default function About() {
  return (
    <>
      <section className="bg-navy text-white py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">About</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Built by a practitioner, not a commentator.</h1>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Photo placeholder */}
          <div className="w-32 h-32 rounded-full bg-light-gray flex items-center justify-center text-dark-gray/30 text-sm">
            Photo
          </div>

          <div className="space-y-6 text-lg text-dark-gray leading-relaxed">
            <p>
              I&apos;m Callem. I started {SITE.name} because I kept seeing the same pattern: businesses knew AI mattered but had no idea where to start. They&apos;d hire consultants who delivered slide decks, or buy tools that nobody used.
            </p>
            <p>
              I build the systems myself. Not theory — actual AI infrastructure that runs in production, handles real workloads, and saves real money. Every system I build is grounded in specific problems with measurable outcomes.
            </p>
            <p>
              Before starting BHA, I worked in healthcare marketing where I saw firsthand how much time and money was wasted on manual processes that AI could handle in seconds. I quit my job, took a pay cut from R45K to R15K/month with R18K rent, and built my way back through delivering value.
            </p>
            <p>
              The AI Growth Engine is the result of everything I&apos;ve learned building systems for real businesses. It&apos;s not five separate tools duct-taped together — it&apos;s one integrated system where each pillar feeds the next, and the whole thing gets smarter every month.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Let&apos;s See What AI Can Do For You</h2>
          <p className="mt-4 text-white/70">Start with a free AI Growth Audit. No pitch, no obligation — just a clear picture of where AI fits in your business.</p>
          <Link
            href={CTA.href}
            className="mt-8 inline-block rounded-lg bg-gold px-8 py-3.5 text-base font-semibold text-navy hover:bg-gold-light transition-colors"
          >
            {CTA.label}
          </Link>
        </div>
      </section>
    </>
  );
}
