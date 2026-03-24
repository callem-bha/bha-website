import type { Metadata } from "next";
import { CtaBlock } from "@/components/ui/cta-block";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The AI Growth Engine — a 5-pillar system that replaces your content team, lead generation, sales preparation, and more. See how each pillar works.",
};

const pillars = [
  {
    number: "01",
    title: "AI Content Intelligence",
    replaces: "1 content marketer ($3K–$8K/mo)",
    description:
      "We build a custom knowledge base from your expertise, case studies, and IP — then use it to power a universal content engine. Cold email copy, social posts, blog articles, carousels, video scripts, landing page copy. All in your voice, all grounded in your real experience.",
  },
  {
    number: "02",
    title: "Automated Content Orchestra",
    replaces: "1 social media manager ($2K–$5K/mo)",
    description:
      "Multi-platform scheduling and publishing across LinkedIn, Twitter, Instagram, email, and blog. Cold email campaign execution, ad deployment, automatic format repurposing, and engagement monitoring — all running on autopilot.",
  },
  {
    number: "03",
    title: "AI Lead Engine",
    replaces: "1–2 appointment setters + 1–3 SDRs ($7K–$20K/mo)",
    description:
      "Conversational AI engages every inbound lead in under 60 seconds. Qualifies via trained question flows, handles objections, scores and prioritises leads, nurtures non-ready prospects, books calls, and hands off to humans with full context.",
  },
  {
    number: "04",
    title: "AI Sales Intelligence",
    replaces: "Increased close rate across your team",
    description:
      "Pre-sales brief generation for every booked call. Prospect research, pain mapping, case study matching, competitive intel, custom talking points, draft pitch decks, deal value estimation, and structured intake forms — ready before your team picks up the phone.",
  },
  {
    number: "05",
    title: "Continuous Improvement",
    replaces: "Embedded in every pillar",
    description:
      "Weekly performance analysis across all pillars. A/B testing, content optimisation, sequence refinement, qualification tuning, close-rate improvement. Monthly strategy review. The system learns — month 6 dramatically outperforms month 1.",
  },
];

const tiers = [
  {
    name: "Foundation",
    pillars: "Pillars 1 + 5",
    replaces: "$4K–$12K/mo in human cost",
    ideal: "No content engine or stuck in agency dependency",
    features: ["Custom Knowledge Base", "AI Content Engine", "Continuous Improvement", "Monthly Strategy Review"],
  },
  {
    name: "Growth",
    pillars: "Pillars 1 + 2 + 3 + 5",
    replaces: "$7K–$20K/mo in human cost",
    ideal: "Want qualified appointments, not just content",
    features: ["Everything in Foundation", "Multi-Platform Publishing", "AI Lead Qualification", "Automated Nurturing", "CRM Integration"],
    highlighted: true,
  },
  {
    name: "Scale",
    pillars: "All 5 Pillars",
    replaces: "$12K–$35K/mo in human cost",
    ideal: "Replace your entire top-of-funnel team",
    features: ["Everything in Growth", "Sales Intelligence Briefs", "Pre-Call Research Packs", "Full Pipeline Automation", "Priority Support"],
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden flex items-center min-h-[60vh] py-32 px-4 md:px-8">
        <div className="relative z-10 mx-auto max-w-[1280px] w-full">
          <div className="max-w-[800px]">
            <span className="inline-block px-3 py-1 bg-gold/15 text-gold border border-gold/30 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              The System
            </span>
            <h1 className="text-white">The AI Growth Engine</h1>
            <p className="text-xl text-white/90 mt-4 max-w-2xl">
              Five integrated pillars. One system. Replaces $12K–$35K/month in human cost. Improves automatically every month.
            </p>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      {/* Pillars */}
      <section className="py-32 px-4 md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">How It Works</span>
          <h2 className="mt-4 mb-16">Five Pillars, One Engine</h2>

          <div className="space-y-12">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="card-lift border border-mid-gray rounded-xl p-8 md:p-12 hover:border-gold/30"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <span className="text-5xl font-bold text-gold/20">{pillar.number}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">{pillar.title}</h3>
                    <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                      Replaces: {pillar.replaces}
                    </p>
                    <p className="text-base text-dark-gray/80 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-32 px-4 md:px-8 bg-light-gray">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">Choose Your Tier</span>
            <h2 className="mt-4 mb-4">Three Tiers. Always Saves You Money.</h2>
            <p className="text-lg text-dark-gray/80">
              Every tier costs less than the human roles it replaces. Get custom pricing based on your business in the free audit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`card-lift rounded-xl p-8 ${
                  tier.highlighted
                    ? "bg-navy text-white border-2 border-gold"
                    : "bg-white border border-mid-gray hover:border-gold/30"
                }`}
              >
                <h3 className={`text-2xl mb-1 ${tier.highlighted ? "text-white" : ""}`}>
                  {tier.name}
                </h3>
                <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">
                  {tier.pillars}
                </p>
                <p className={`text-lg font-semibold mb-2 ${tier.highlighted ? "text-gold" : "text-navy"}`}>
                  Replaces {tier.replaces}
                </p>
                <p className={`text-sm mb-6 ${tier.highlighted ? "text-white/70" : "text-dark-gray/60"}`}>
                  Ideal for: {tier.ideal}
                </p>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${
                        tier.highlighted ? "text-white/80" : "text-dark-gray/70"
                      }`}
                    >
                      <svg className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-32 px-4 md:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Our Promise</span>
          <h2 className="mt-4 mb-6">90-Day Performance Guarantee</h2>
          <p className="text-lg text-dark-gray/80 mb-8">
            If results don&apos;t materialise in 90 days, your next month&apos;s retainer is free — and we keep working until targets are hit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { tier: "Foundation", guarantee: "Functional KB + content engine producing agreed monthly volume" },
              { tier: "Growth", guarantee: "Foundation metrics + minimum 10 qualified appointments/month" },
              { tier: "Scale", guarantee: "Growth metrics + pre-sales briefs for every call + full optimisation active" },
            ].map((item) => (
              <div key={item.tier} className="border border-mid-gray rounded-xl p-6">
                <h4 className="text-lg font-semibold text-navy mb-2">{item.tier}</h4>
                <p className="text-sm text-dark-gray/70">{item.guarantee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBlock
        title="See what AI can do for your business"
        description="Get a custom AI Growth Audit — free, no obligation. We'll show you exactly where AI fits and how much you'll save."
      />
    </>
  );
}
