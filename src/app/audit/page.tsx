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
      <section className="bg-navy text-white py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Free — Valued at $2,500</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Your AI Growth Audit</h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            A complete analysis of where AI can power your content, lead generation, and sales preparation — with dollar figures attached.
          </p>
          <a
            href="#book"
            className="mt-10 inline-block rounded-lg bg-gold px-8 py-3.5 text-base font-semibold text-navy hover:bg-gold-light transition-colors"
          >
            Book Your Free Audit
          </a>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold text-center">What You Get</p>
          <h2 className="mt-4 text-3xl font-bold text-navy text-center">A 12-18 Page Branded Report</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {auditSections.map((section, i) => (
              <div key={section.title} className="rounded-xl border border-light-gray p-6">
                <p className="text-sm font-bold text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy">{section.title}</h3>
                <p className="mt-2 text-sm text-dark-gray/70">{section.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-light-gray py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-navy">How It Works</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
            {["Book a Call", "Intake Form", "We Research", "Audit Built", "Walkthrough"].map((step, i) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <p className="mt-3 text-sm font-medium text-navy">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-dark-gray/70">5-8 business days from intake to walkthrough</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-navy text-center">Common Questions</h2>
          <div className="mt-12 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-semibold text-navy">{faq.q}</h3>
                <p className="mt-2 text-dark-gray/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking — Cal.com embed placeholder */}
      <section id="book" className="bg-navy text-white py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Book Your Free AI Growth Audit</h2>
          <p className="mt-4 text-white/70">Pick a time that works for you. We&apos;ll send the intake form right after.</p>
          <div className="mt-8 rounded-xl bg-white/10 p-12 text-white/40 text-sm">
            Cal.com booking widget will be embedded here
          </div>
        </div>
      </section>
    </>
  );
}
