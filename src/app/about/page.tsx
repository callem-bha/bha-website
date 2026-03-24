import type { Metadata } from "next";
import { CtaBlock } from "@/components/ui/cta-block";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Blu Horizon Agency builds AI systems that replace knowledge workers. Founded by Callem — AI practitioner, not commentator.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden flex items-center min-h-[50vh] py-32 px-4 md:px-8">
        <div className="relative z-10 mx-auto max-w-[1280px] w-full">
          <div className="max-w-[800px]">
            <span className="inline-block px-3 py-1 bg-gold/15 text-gold border border-gold/30 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              About
            </span>
            <h1 className="text-white">Built by a practitioner, not a commentator.</h1>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      {/* Story */}
      <section className="py-32 px-4 md:px-8">
        <div className="mx-auto max-w-[800px]">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Photo placeholder */}
            <div className="w-40 h-40 rounded-xl bg-light-gray flex-shrink-0 flex items-center justify-center text-dark-gray/30 text-sm">
              Photo
            </div>

            <div className="space-y-6 text-lg text-dark-gray/80 leading-relaxed">
              <p>
                I&apos;m Callem. I started {SITE.name} because I kept seeing the same pattern: businesses knew AI mattered but had no idea where to start. They&apos;d hire consultants who delivered slide decks, or buy tools that nobody used.
              </p>
              <p>
                I build the systems myself. Not theory — actual AI infrastructure that runs in production, handles real workloads, and saves real money. Every system I build is grounded in specific problems with measurable outcomes.
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-6 text-lg text-dark-gray/80 leading-relaxed">
            <p>
              Before starting BHA, I worked in healthcare marketing where I saw firsthand how much time and money was wasted on manual processes that AI could handle in seconds. I quit my job, took a pay cut from R45K to R15K/month with R18K rent, and built my way back through delivering value.
            </p>
            <p>
              The AI Growth Engine is the result of everything I&apos;ve learned building systems for real businesses. It&apos;s not five separate tools duct-taped together — it&apos;s one integrated system where each pillar feeds the next, and the whole thing gets smarter every month.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-32 px-4 md:px-8 bg-light-gray">
        <div className="mx-auto max-w-[1280px]">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">What We Believe</span>
          <h2 className="mt-4 mb-12">How We Think About AI</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "AI is not expensive or complex for SMEs", description: "The barrier is knowing where to start, not the technology itself." },
              { title: "Waiting is the real risk", description: "Your competitors aren't waiting for AI to 'mature'. Neither should you." },
              { title: "AI augments teams, not replaces them", description: "The goal is making existing people faster, more accurate, and able to handle more." },
              { title: "Implementation beats theory", description: "Build something. Learn from doing. Slide decks don't generate revenue." },
              { title: "You don't need to be technical", description: "You need to understand your business problems clearly. We handle the tech." },
              { title: "AI solves specific problems", description: "Start with a pain point, not the technology. If there's no clear problem, there's no project." },
            ].map((belief) => (
              <div key={belief.title} className="card-lift border border-mid-gray rounded-xl p-8 bg-white hover:border-gold/30">
                <h3 className="text-xl mb-2">{belief.title}</h3>
                <p className="text-base text-dark-gray/70">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBlock
        title="Let's see what AI can do for you"
        description="Start with a free AI Growth Audit. No pitch, no obligation — just a clear picture of where AI fits in your business."
      />
    </>
  );
}
