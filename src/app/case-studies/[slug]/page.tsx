import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy, getAllSlugs } from "@/lib/case-studies";
import { CTA } from "@/lib/constants";

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
      <section className="bg-navy text-white py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              {cs.industry}
            </span>
            {cs.isProofOfConcept && (
              <span className="text-xs font-medium text-white/50 border border-white/20 rounded-full px-2 py-0.5">
                Proof of Concept
              </span>
            )}
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">{cs.title}</h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">{cs.description}</p>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-light-gray py-12 px-6">
        <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {cs.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-3xl md:text-4xl font-bold text-navy">{m.value}</p>
              <p className="mt-2 text-sm text-dark-gray/70">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem / Solution / Results */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl space-y-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">The Problem</p>
            <p className="mt-4 text-lg text-dark-gray leading-relaxed">{cs.problem}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">The Solution</p>
            <p className="mt-4 text-lg text-dark-gray leading-relaxed">{cs.solution}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">The Results</p>
            <p className="mt-4 text-lg text-dark-gray leading-relaxed">{cs.results}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">See What AI Can Do For Your Business</h2>
          <p className="mt-4 text-white/70">Get a free AI Growth Audit — tailored to your business, with real numbers.</p>
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
