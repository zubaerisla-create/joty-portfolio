"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Compass, Mail, Sparkles, GraduationCap } from "lucide-react";
import { ConnectedNodes } from "@/components/ui/ConnectedNodes";
import { PortfolioData } from "@/types/portfolio";

interface HeroProps {
  portfolio: PortfolioData;
}

export function Hero({ portfolio }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Editorial top accent rule */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Introduction & Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Academic & University Identity Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-pastel-pink/50 border border-pastel-pink-border text-charcoal shadow-subtle">
                <GraduationCap className="w-3.5 h-3.5 text-charcoal/80" />
                <span>Daffodil International University</span>
                <span className="text-charcoal/40">•</span>
                <span className="font-semibold">Software Engineering</span>
              </div>

              {/* Status indicator */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/80 border border-charcoal/10 text-muted-gray">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to learning &amp; research inquiry</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-charcoal leading-[1.1]">
                {portfolio.name}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-charcoal/90 max-w-xl leading-relaxed">
                <span className="relative inline-block px-1.5 py-0.5 rounded bg-butter-yellow/60 mr-1.5">
                  Software Engineering Student.
                </span>
                <span className="text-charcoal">Problem Solver.</span>{" "}
                <span className="italic font-serif text-charcoal/80">Future Researcher.</span>
              </p>
            </motion.div>

            {/* Supporting authentic text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-gray leading-relaxed max-w-xl font-sans"
            >
              {portfolio.supporting_text}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA: Explore My Journey */}
              <Link
                href="#journey"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-charcoal bg-pastel-pink hover:bg-pastel-pink-dark/80 border border-pastel-pink-border shadow-subtle hover:shadow-card transition-all duration-200"
              >
                <Compass className="w-4 h-4" />
                <span>Explore My Journey</span>
              </Link>

              {/* Secondary CTA: Get in Touch */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-charcoal bg-white/90 hover:bg-white border border-charcoal/15 hover:border-charcoal/30 shadow-subtle hover:shadow-card transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-muted-gray" />
                <span>Get in Touch</span>
              </Link>
            </motion.div>

            {/* Editorial Quick Metrics / Authentic Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-3 border-t border-charcoal/10 max-w-lg"
            >
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-muted-gray">
                  Academic Focus
                </span>
                <span className="text-sm font-semibold text-charcoal">BSc in SWE</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-muted-gray">
                  Community
                </span>
                <span className="text-sm font-semibold text-charcoal">DIU CP Club</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-muted-gray">
                  Aspiration
                </span>
                <span className="text-sm font-semibold text-charcoal">Research Paper</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Abstract Pink-and-Yellow Connected Nodes Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="w-full relative">
              <ConnectedNodes />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-xs font-medium text-muted-gray/70">
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
