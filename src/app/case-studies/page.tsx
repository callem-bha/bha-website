import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { CtaBlock } from "@/components/ui/cta-block";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real AI systems. See how we've reduced costs, cut response times, and increased performance for our clients.",
};

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden flex items-center min-h-[50vh] py-32 px-4 md:px-8">
        <div className="relative z-10 mx-auto max-w-[1280px] w-full">
          <div className="max-w-[800px]">
            <span className="inline-block px-3 py-1 bg-gold/15 text-gold border border-gold/30 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Proof
            </span>
            <h1 className="text-white">Case Studies</h1>
            <p className="text-xl text-white/90 mt-4">
              Real systems. Real metrics. No fluff.
            </p>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      {/* Cards */}
      <section className="py-32 px-4 md:px-8">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="card-lift group block bg-white border border-mid-gray rounded-xl overflow-hidden hover:border-gold/30"
            >
              <div className="w-full h-60 bg-light-gray overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-navy-light to-navy opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-300" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-semibold uppercase tracking-wider text-gold">
                    {cs.industry}
                  </span>
                  {cs.isProofOfConcept && (
                    <span className="text-xs font-medium text-dark-gray/50 border border-dark-gray/20 rounded-full px-2 py-0.5">
                      Proof of Concept
                    </span>
                  )}
                </div>
                <h3 className="text-2xl mb-2">{cs.title}</h3>
                <p className="text-base text-dark-gray/80 mb-4">{cs.description}</p>
                <p className="text-lg font-semibold text-navy mb-4">{cs.headline}</p>
                <span className="text-gold font-semibold">Read Case Study &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaBlock
        title="Want results like these?"
        description="Get a free AI Growth Audit to see what's possible for your business."
      />
    </>
  );
}
