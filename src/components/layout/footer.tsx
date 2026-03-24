import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, CTA, SITE, SOCIAL_LINKS } from "@/lib/constants";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Growth Audit", href: "/audit" },
      { label: "Content Intelligence", href: "/how-it-works" },
      { label: "Lead Engine", href: "/how-it-works" },
    ],
  },
];

const socialIcons = [
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: SOCIAL_LINKS.twitter,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: SOCIAL_LINKS.youtube,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white mt-32">
      <div className="mx-auto max-w-[1280px] px-4 pt-32 pb-8 md:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-16 mb-16 md:grid-cols-[2fr_3fr_1fr]">
          {/* Brand */}
          <div>
            <Image
              src="/BHA - White logo - no background.png"
              alt={SITE.name}
              width={160}
              height={40}
              className="h-8 w-auto mb-2"
            />
            <p className="text-gold font-medium">Innovate. Automate. Elevate.</p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-white text-lg font-semibold mb-4">{col.title}</h4>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-white/60 hover:text-gold transition-colors duration-300 mb-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            {/* CTA column */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Get Started</h4>
              <Link
                href={CTA.href}
                className="text-gold hover:text-gold-light transition-colors duration-300"
              >
                Free AI Growth Audit
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="block text-white/60 hover:text-gold transition-colors duration-300 mt-2"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 md:flex-col md:items-end">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="social-circle flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
