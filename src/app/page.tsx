import Link from "next/link";
import { CTA, SITE } from "@/lib/constants";
import { caseStudies } from "@/lib/case-studies";
import { CtaBlock } from "@/components/ui/cta-block";

const metrics = [
  { value: "80%", label: "Workload Reduction" },
  { value: "$4.5K/mo", label: "Cost Savings" },
  { value: "99.9%", label: "Accuracy Rate" },
  { value: "<3", label: "Months to Payback" },
];

const pillars = [
  {
    title: "Content Intelligence",
    description: "Custom knowledge base powering your entire content engine — cold email, social, blog, carousels, video scripts.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Automated Distribution",
    description: "Multi-platform scheduling, publishing, and repurposing. Your content reaches everywhere without manual effort.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "AI Lead Engine",
    description: "Conversational AI qualifying every lead in under 60 seconds. Books calls, handles objections, nurtures prospects.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Home() {
  const featuredStudies = caseStudies.filter((cs) => !cs.isProofOfConcept).slice(0, 3);

  return (
    <>
      {/* Hero — Navy variant with glow */}
      <section className="relative bg-navy overflow-hidden flex items-center min-h-[80vh] py-32 px-4 md:px-8">
        <div className="relative z-10 mx-auto max-w-[1280px] w-full">
          <div className="max-w-[800px]">
            <span className="inline-block px-3 py-1 bg-gold/15 text-gold border border-gold/30 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              AI Integration Agency
            </span>
            <h1 className="text-white">{SITE.tagline}</h1>
            <p className="text-xl text-white/90 mt-4 max-w-2xl">
              We help $1–20M companies replace manual workflows with AI systems that create content, generate leads, prepare sales teams, and improve every month.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href={CTA.href}
                className="btn-lift btn-gold-shadow inline-flex items-center rounded-lg bg-gold px-7 py-3.5 text-base font-medium text-white hover:bg-gold-hover"
              >
                {CTA.label}
              </Link>
              <Link
                href="/case-studies"
                className="btn-lift inline-flex items-center rounded-lg border-2 border-white px-7 py-3.5 text-base font-medium text-white hover:bg-white hover:text-navy"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      {/* Metrics bar */}
      <section className="bg-navy py-16 px-4 md:px-8">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row md:justify-between md:items-center gap-8 text-center md:text-left">
          {metrics.map((item, i) => (
            <div key={item.label} className="flex-1 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <p className="metric-number font-bold text-gold leading-none mb-2">{item.value}</p>
                <p className="text-lg text-white/90 font-medium">{item.label}</p>
              </div>
              {i < metrics.length - 1 && (
                <div className="hidden md:block w-px h-20 bg-white/10" />
              )}
              {i < metrics.length - 1 && (
                <div className="md:hidden w-full h-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* What We Build — pillar cards */}
      <section className="py-32 px-4 md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">What We Build</span>
          <h2 className="mt-4 mb-4">The AI Growth Engine</h2>
          <p className="text-lg text-dark-gray/80 max-w-2xl mb-12">
            Five integrated pillars that replace your content team, distribution, lead qualification, sales prep, and optimisation — all improving automatically every month.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="card-lift border border-mid-gray rounded-xl overflow-hidden"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-lg mx-8 mt-8">
                  {pillar.icon}
                </div>
                <div className="p-8 pt-4">
                  <h3 className="text-2xl mb-2">{pillar.title}</h3>
                  <p className="text-base text-dark-gray/80">{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 px-4 md:px-8 bg-light-gray">
        <div className="mx-auto max-w-[1280px]">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Proof</span>
          <h2 className="mt-4 mb-12">Case Studies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="card-lift group block bg-white border border-mid-gray rounded-xl overflow-hidden hover:border-gold/30"
              >
                {/* Image placeholder */}
                <div className="w-full h-60 bg-light-gray overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-navy-light to-navy opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-300" />
                </div>
                <div className="p-8">
                  <span className="text-sm font-semibold uppercase tracking-wider text-gold">
                    {cs.industry}
                  </span>
                  <h3 className="text-2xl mt-2 mb-2">{cs.title}</h3>
                  <p className="text-base text-dark-gray/80 mb-8">{cs.description}</p>
                  <span className="text-gold font-semibold">
                    Read Case Study &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-32 px-4 md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Who This Is For</span>
          <h2 className="mt-4 mb-12">Built for Growth-Stage Businesses</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "High-Touch SaaS",
                description: "Your SDR team costs $12K/month and reply rates are dropping. AI handles outreach, qualification, and booking at a fraction of the cost.",
              },
              {
                title: "Professional Services",
                description: "Partner time is your most expensive resource. AI takes over content creation, lead nurturing, and sales prep so your team focuses on delivery.",
              },
              {
                title: "E-Commerce",
                description: "Your support and sales teams are handling volume that AI can manage in seconds. Free your people for the interactions that actually need a human.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-lift border border-mid-gray rounded-xl p-8 hover:border-gold/30"
              >
                <h3 className="text-2xl mb-3">{item.title}</h3>
                <p className="text-base text-dark-gray/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee strip */}
      <section className="bg-light-gray py-16 px-4 md:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Our Promise</span>
          <h3 className="mt-4 mb-4">90-Day Performance Guarantee</h3>
          <p className="text-lg text-dark-gray/80">
            If results don&apos;t materialise in 90 days, your next month&apos;s retainer is free — and we keep working until targets are hit. Tier-specific minimums apply.
          </p>
        </div>
      </section>

      {/* CTA Block */}
      <CtaBlock
        title="Ready to see what AI can do for your business?"
        description="Stop wasting capital on manual processes. Start with a free AI Growth Audit — no obligation, no pitch."
        buttonLabel="Get Your Free Audit"
      />
    </>
  );
}
