import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The AI Growth Engine — a 5-pillar system that replaces your content team, lead generation, sales preparation, and more. See how each pillar works.",
};

export default function HowItWorks() {
  return (
    <>
      <section className="bg-navy text-white py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">The System</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">The AI Growth Engine</h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Five integrated pillars. One system. Replaces $12K–$35K/month in human cost. Improves automatically every month.
          </p>
        </div>
      </section>

      {/* Pillar sections — to be designed with AntiGravity Phase 3 */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-dark-gray/50">Pillar deep-dives, tier comparison, and guarantee details will be designed in AntiGravity and built here.</p>
        </div>
      </section>

      <section className="bg-navy text-white py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">See What AI Can Do For Your Business</h2>
          <p className="mt-4 text-white/70">Get a custom AI Growth Audit — free, no obligation.</p>
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
