import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, getAllSlugs } from "@/lib/case-studies";
import { CtaBlock } from "@/components/ui/cta-block";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden flex items-center min-h-[50vh] py-32 px-4 md:px-8">
        <div className="relative z-10 mx-auto max-w-[1280px] w-full">
          <div className="max-w-[800px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-gold/15 text-gold border border-gold/30 rounded-full text-sm font-semibold uppercase tracking-wider">
                {cs.industry}
              </span>
              {cs.isProofOfConcept && (
                <span className="text-xs font-medium text-white/50 border border-white/20 rounded-full px-2 py-0.5">
                  Proof of Concept
                </span>
              )}
            </div>
            <h1 className="text-white">{cs.title}</h1>
            <p className="text-xl text-white/90 mt-4 max-w-2xl">{cs.description}</p>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      {/* Metrics bar */}
      <section className="bg-navy py-16 px-4 md:px-8">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row md:justify-between md:items-center gap-8 text-center md:text-left">
          {cs.metrics.map((m, i) => (
            <div key={m.label} className="flex-1 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <p className="metric-number font-bold text-gold leading-none mb-2">{m.value}</p>
                <p className="text-lg text-white/90 font-medium">{m.label}</p>
              </div>
              {i < cs.metrics.length - 1 && (
                <div className="hidden md:block w-px h-20 bg-white/10" />
              )}
              {i < cs.metrics.length - 1 && (
                <div className="md:hidden w-full h-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Problem / Solution / Results */}
      <section className="py-32 px-4 md:px-8">
        <div className="mx-auto max-w-[800px] space-y-20">
          {[
            { label: "The Problem", content: cs.problem },
            { label: "The Solution", content: cs.solution },
            { label: "The Results", content: cs.results },
          ].map((section) => (
            <div key={section.label}>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">{section.label}</span>
              <p className="mt-4 text-lg text-dark-gray/80 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaBlock
        title="See what AI can do for your business"
        description="Get a free AI Growth Audit — tailored to your business, with real numbers."
      />
    </>
  );
}
