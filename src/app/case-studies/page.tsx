import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real AI systems. See how we've reduced costs, cut response times, and increased performance for our clients.",
};

export default function CaseStudies() {
  return (
    <>
      <section className="bg-navy text-white py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Proof</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Case Studies</h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Real systems. Real metrics. No fluff.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group block rounded-xl border border-light-gray p-8 hover:border-gold/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {cs.industry}
                </span>
                {cs.isProofOfConcept && (
                  <span className="text-xs font-medium text-dark-gray/50 border border-dark-gray/20 rounded-full px-2 py-0.5">
                    Proof of Concept
                  </span>
                )}
              </div>
              <h2 className="mt-4 text-xl font-bold text-navy group-hover:text-navy-light transition-colors">
                {cs.title}
              </h2>
              <p className="mt-2 text-sm text-dark-gray/70">{cs.description}</p>
              <p className="mt-4 text-lg font-semibold text-navy">{cs.headline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Want Results Like These?</h2>
          <p className="mt-4 text-white/70">Get a free AI Growth Audit to see what&apos;s possible for your business.</p>
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
