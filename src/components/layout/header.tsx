"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, CTA } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-[12px] border-b border-mid-gray">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 md:px-8 lg:py-5">
        <Link href="/">
          <Image
            src="/BHA - Color logo - no background.png"
            alt="Blu Horizon Agency"
            width={160}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.95rem] font-medium text-dark-gray hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={CTA.href}
            className="btn-lift btn-gold-shadow inline-flex items-center rounded-lg bg-gold px-7 py-3 text-sm font-medium text-white hover:bg-gold-hover"
          >
            {CTA.label}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <>
              <span className="block w-6 h-[2px] bg-navy transition-all duration-300" />
              <span className="block w-6 h-[2px] bg-navy transition-all duration-300" />
              <span className="block w-6 h-[2px] bg-navy transition-all duration-300" />
            </>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-mid-gray bg-white px-4 py-6 space-y-4 md:px-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-[0.95rem] font-medium text-dark-gray hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={CTA.href}
            className="block rounded-lg bg-gold px-7 py-3 text-sm font-medium text-white text-center hover:bg-gold-hover"
            onClick={() => setMobileOpen(false)}
          >
            {CTA.label}
          </Link>
        </div>
      )}
    </header>
  );
}
