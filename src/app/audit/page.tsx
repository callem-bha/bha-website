import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Growth Audit",
  description:
    "Get a custom AI Growth Audit for your business — valued at $2,500. Includes pipeline analysis, AI opportunity scoring, cost analysis, and a 30-minute walkthrough.",
};

const auditSections = [
  { title: "Executive Summary", desc: "Top 3 opportunities, annual savings estimate, traffic-light scores" },
  { title: "Pipeline Map", desc: "Your current growth pipeline with manual touchpoints and cost annotations" },
  { title: "AI Opportunity Matrix", desc: "Every function scored by cost, savings potential, and ROI priority" },
  { title: "Cost Analysis", desc: "Current spend vs. AI Growth Engine cost with break-even timeline" },
  { title: "3 AI Recommendations", desc: "Specific systems, what they replace, monthly savings, implementation timeline" },
  { title: "Case Study", desc: "A relevant before/after from our portfolio matched to your situation" },
  { title: "Implementation Roadmap", desc: "3 phases over 12 weeks with visual timeline" },
  { title: "Investment Overview", desc: "Tier recommendation using your own numbers" },
];

const faqs = [
  {
    q: "How long does the audit take?",
    a: "5-8 business days from intake to delivery. The walkthrough call is 30 minutes.",
  },
  {
    q: "What if I'm not ready to implement?",
    a: "The audit is yours to keep. No obligation, no pressure. Use it whenever the timing is right.",
  },
  {
    q: "Is this really free?",
    a: "Yes. We use the audit to understand your business and show you what's possible. If it makes sense to work together, we'll discuss it on the walkthrough call.",
  },
  {
    q: "What happens after the walkthrough?",
    a: "You decide. If you want to move forward, we'll scope a specific engagement. If not, no hard feelings — you keep the audit.",
  },
];

export default function Audit() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden flex items-center min-h-[60vh] py-32 px-4 md:px-8">
        <div className="relative z-10 mx-auto max-w-[1280px] w-full">
          <div className="max-w-[800px] mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-gold/15 text-gold border border-gold/30 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Free — Valued at $2,500
            </span>
            <h1 className="text-white">Your AI Growth Audit</h1>
            <p className="text-xl text-white/90 mt-4 max-w-2xl mx-auto">
              A complete analysis of where AI can power your content, lead generation, and sales preparation — with dollar figures attached.
            </p>
            <a
              href="#book"
              className="btn-lift btn-gold-shadow inline-flex items-center rounded-lg bg-gold px-7 py-3.5 text-base font-medium text-white hover:bg-gold-hover mt-8"
            >
              Book Your Free Audit
            </a>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      {/* What you get */}
      <section className="py-32 px-4 md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">What You Get</span>
            <h2 className="mt-4">A 12–18 Page Branded Report</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auditSections.map((section, i) => (
              <div
                key={section.title}
                className="card-lift border border-mid-gray rounded-xl p-8 hover:border-gold/30"
              >
                <span className="text-sm font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl mt-2 mb-2">{section.title}</h3>
                <p className="text-base text-dark-gray/70">{section.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-light-gray py-32 px-4 md:px-8">
        <div className="mx-auto max-w-[1280px] text-center">
          <h2 className="mb-16">How It Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {["Book a Call", "Intake Form", "We Research", "Audit Built", "Walkthrough"].map((step, i) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-base font-bold">
                  {i + 1}
                </div>
                <p className="mt-4 text-sm font-semibold text-navy">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-dark-gray/60">5–8 business days from intake to walkthrough</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-4 md:px-8">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-center mb-12">Common Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-mid-gray pb-8">
                <h3 className="text-xl mb-3">{faq.q}</h3>
                <p className="text-base text-dark-gray/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking placeholder */}
      <section id="book" className="bg-navy cta-radial py-32 px-4 md:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-white mb-4">Book Your Free AI Growth Audit</h2>
          <p className="text-xl text-white/80 mb-8">Pick a time that works for you. We&apos;ll send the intake form right after.</p>
          <div className="rounded-xl bg-white/10 p-16 text-white/40 text-sm">
            Cal.com booking widget will be embedded here
          </div>
        </div>
      </section>
    </>
  );
}
