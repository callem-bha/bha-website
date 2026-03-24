import Link from "next/link";
import { CTA } from "@/lib/constants";

interface CtaBlockProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CtaBlock({
  title,
  description,
  buttonLabel = CTA.label,
  buttonHref = CTA.href,
}: CtaBlockProps) {
  return (
    <section className="bg-navy cta-radial py-32 px-4 md:px-8">
      <div className="mx-auto max-w-[800px] text-center">
        <h2 className="text-white mb-4">{title}</h2>
        <p className="text-xl text-white/80 mb-8">{description}</p>
        <Link
          href={buttonHref}
          className="btn-lift btn-gold-shadow inline-flex items-center rounded-lg bg-gold px-7 py-3.5 text-base font-medium text-white hover:bg-gold-hover"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
