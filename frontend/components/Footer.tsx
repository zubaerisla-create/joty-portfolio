"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-canvas border-t border-charcoal/10 py-12 text-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-charcoal/10">
          {/* Wordmark and Statement */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-butter-yellow/60 border border-butter-yellow-border flex items-center justify-center font-serif font-bold text-lg text-charcoal">
              J
            </div>
            <div>
              <span className="text-base font-serif font-bold text-charcoal block">
                Jotirmoya Bhakta Sarker
              </span>
              <p className="text-xs text-muted-gray max-w-md mt-0.5">
                Software Engineering student at Daffodil International University. Dedicated to structured problem solving, continuous technical learning, and future research.
              </p>
            </div>
          </div>

          {/* Quick links & Back to top */}
          <div className="flex items-center gap-6 text-xs text-muted-gray">
            <Link href="#home" className="hover:text-charcoal transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-charcoal transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-charcoal transition-colors">
              Skills
            </Link>
            <Link href="#research" className="hover:text-charcoal transition-colors">
              Research
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-charcoal/10 bg-white hover:bg-charcoal/5 text-charcoal transition-all shadow-subtle flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-gray font-mono">
          <div>
            © {currentYear} Jotirmoya Bhakta Sarker. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Designed with minimal editorial aesthetics</span>
            <span>•</span>
            <span className="text-charcoal/80">DIU Department of SWE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
