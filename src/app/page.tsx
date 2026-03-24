import Link from "next/link";
import { CTA, SITE } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {SITE.tagline}
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            AI-powered content, lead generation, sales preparation, and continuous improvement — all in one integrated system that compounds monthly.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={CTA.href}
              className="rounded-lg bg-gold px-8 py-3.5 text-base font-semibold text-navy hover:bg-gold-light transition-colors"
            >
              {CTA.label}
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-lg border border-white/20 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Results bar */}
      <section className="bg-light-gray py-12 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { metric: "80%", label: "Workload Reduction" },
            { metric: "$4.5K/mo", label: "Cost Savings" },
            { metric: "5min → 10sec", label: "Response Time" },
            { metric: "25%", label: "ROAS Increase" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl md:text-4xl font-bold text-navy">{item.metric}</p>
              <p className="mt-2 text-sm text-dark-gray/70">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Build — placeholder for AntiGravity Phase 2 */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">What We Build</p>
          <h2 className="mt-4 text-3xl font-bold text-navy">The AI Growth Engine</h2>
          <p className="mt-4 text-dark-gray/70">
            Five integrated pillars that replace your content team, distribution, lead qualification, sales prep, and optimisation — all improving automatically every month.
          </p>
        </div>
      </section>
    </>
  );
}
