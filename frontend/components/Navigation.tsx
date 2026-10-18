"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Research", href: "#research" },
  { name: "Journey", href: "#journey" },
  { name: "Community", href: "#community" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-canvas/90 backdrop-blur-md border-b border-charcoal/10 shadow-subtle py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Personal Wordmark */}
        <Link
          href="#home"
          className="group flex items-center gap-2 text-xl sm:text-2xl font-serif font-semibold tracking-tight text-charcoal hover:opacity-90 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-pastel-pink border border-pastel-pink-dark group-hover:scale-125 transition-transform" />
          <span>Jotirmoya</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-charcoal/80">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-1 hover:text-charcoal transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-butter-yellow hover:after:w-full after:transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold text-charcoal bg-butter-yellow/70 hover:bg-butter-yellow border border-butter-yellow-border hover:shadow-subtle transition-all duration-200"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-lg text-charcoal hover:bg-charcoal/5 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-canvas/98 backdrop-blur-xl z-40 px-6 py-8 flex flex-col justify-between border-t border-charcoal/10 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-muted-gray uppercase">
              Navigation
            </span>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-charcoal py-1 hover:text-muted-gray transition-colors flex items-center justify-between border-b border-charcoal/5"
              >
                <span>{link.name}</span>
                <span className="text-xs font-sans text-muted-gray/60">→</span>
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-charcoal/10 flex flex-col gap-3">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-full text-sm font-semibold text-charcoal bg-butter-yellow border border-butter-yellow-border shadow-subtle"
            >
              Let&apos;s Talk
            </Link>
            <div className="text-center text-xs text-muted-gray">
              Daffodil International University • SWE Student
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
