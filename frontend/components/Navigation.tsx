"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Home,
  User,
  Cpu,
  BookOpen,
  Compass,
  Users2,
  Mail,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home", index: "01", desc: "Introduction & Hero", icon: Home },
  { name: "About", href: "#about", index: "02", desc: "Background & Philosophy", icon: User },
  { name: "Skills", href: "#skills", index: "03", desc: "Capabilities & Strengths", icon: Cpu },
  { name: "Research", href: "#research", index: "04", desc: "Curiosity Today. Tomorrow.", icon: BookOpen },
  { name: "Journey", href: "#journey", index: "05", desc: "Timeline & Progression", icon: Compass },
  { name: "Community", href: "#community", index: "06", desc: "DIU CP Club Participation", icon: Users2 },
  { name: "Contact", href: "#contact", index: "07", desc: "Start a Conversation", icon: Mail },
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
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-canvas/95 backdrop-blur-md border-b border-charcoal/10 shadow-subtle py-3.5"
            : "bg-transparent py-4 sm:py-5"
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
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-[14px] font-medium text-charcoal/80">
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
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold text-charcoal bg-butter-yellow/80 hover:bg-butter-yellow border border-butter-yellow-border hover:shadow-subtle transition-all duration-200"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            className="md:hidden flex items-center gap-2 px-3 py-1.5 rounded-full border border-charcoal/15 bg-white shadow-subtle text-charcoal active:scale-95 transition-transform"
          >
            <span className="text-xs font-semibold tracking-wide uppercase">Menu</span>
            <Menu className="w-4 h-4 text-charcoal" />
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Modal (Crystal Clear & Highly Readable) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-50 bg-[#FFFCF7] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Top Bar inside Drawer */}
            <div className="px-5 py-4 border-b border-charcoal/10 bg-[#FFFCF7] flex items-center justify-between shrink-0">
              <Link
                href="#home"
                onClick={handleLinkClick}
                className="flex items-center gap-2 text-xl font-serif font-bold text-charcoal"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-pastel-pink border border-pastel-pink-dark" />
                <span>Jotirmoya</span>
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-charcoal/15 bg-white shadow-subtle text-charcoal hover:bg-charcoal/5 active:scale-95 transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-wider">Close</span>
                <X className="w-4 h-4 text-charcoal" />
              </button>
            </div>

            {/* Scrollable Navigation List */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
              <div className="flex items-center justify-between px-2 pb-1">
                <span className="text-[11px] font-mono tracking-widest text-muted-gray uppercase font-semibold">
                  Directory
                </span>
                <span className="text-[11px] font-mono text-muted-gray">
                  7 Sections
                </span>
              </div>

              {NAV_LINKS.map((link, idx) => {
                const Icon = link.icon;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="group flex items-center justify-between p-3.5 rounded-2xl bg-white border border-charcoal/10 shadow-subtle hover:border-pastel-pink-border active:bg-pastel-pink/10 transition-all duration-150"
                    >
                      <div className="flex items-center gap-3.5">
                        {/* Icon Container with subtle accent */}
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                            isEven
                              ? "bg-pastel-pink/30 border-pastel-pink-border/60 text-charcoal"
                              : "bg-butter-yellow/40 border-butter-yellow-border/60 text-charcoal"
                          }`}
                        >
                          <Icon className="w-5 h-5 text-charcoal" />
                        </div>

                        {/* Title and Subtitle */}
                        <div className="flex flex-col">
                          <span className="text-base font-bold font-sans text-charcoal group-hover:text-charcoal transition-colors">
                            {link.name}
                          </span>
                          <span className="text-[11px] text-muted-gray font-sans line-clamp-1">
                            {link.desc}
                          </span>
                        </div>
                      </div>

                      {/* Right Indicator Pill */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono font-medium text-muted-gray/70 bg-canvas px-2 py-0.5 rounded-md border border-charcoal/5">
                          {link.index}
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-gray/50 group-hover:text-charcoal group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions & Identity */}
            <div className="p-4 border-t border-charcoal/10 bg-white/80 backdrop-blur-sm shrink-0 space-y-3">
              <Link
                href="#contact"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold text-charcoal bg-butter-yellow hover:bg-butter-yellow-dark/90 border border-butter-yellow-border shadow-subtle active:scale-[0.98] transition-all"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-gray font-mono text-center">
                <GraduationCap className="w-3.5 h-3.5 text-charcoal/70" />
                <span>Daffodil International University • SWE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
