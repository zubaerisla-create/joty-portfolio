"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, Users, Lightbulb, Compass, Award } from "lucide-react";
import { PortfolioData } from "@/types/portfolio";

interface AboutProps {
  portfolio: PortfolioData;
}

export function About({ portfolio }: AboutProps) {
  const { about } = portfolio;

  const PILLARS = [
    {
      title: "Analytical Problem Solving",
      desc: "Deconstructing computational problems methodically and evaluating algorithmic efficiency.",
      icon: Brain,
      tag: "Foundation",
      accent: "bg-pastel-pink/40 border-pastel-pink-border",
    },
    {
      title: "Academic Research Rigor",
      desc: "Reading foundational computer science papers and preparing for faculty-mentored inquiry.",
      icon: BookOpen,
      tag: "Future Focus",
      accent: "bg-butter-yellow/40 border-butter-yellow-border",
    },
    {
      title: "Collaborative Mindset",
      desc: "Pair problem solving, community learning at CP Club, and clear technical communication.",
      icon: Users,
      tag: "Community",
      accent: "bg-canvas border-charcoal/10",
    },
    {
      title: "Business & Real-World Value",
      desc: "Understanding that engineering choices exist to create genuine utility for real people.",
      icon: Lightbulb,
      tag: "Perspective",
      accent: "bg-white border-charcoal/10",
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-charcoal/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-charcoal/10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-muted-gray block mb-1">
              01 / Background &amp; Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
              About Me
            </h2>
          </div>
          <p className="text-sm text-muted-gray max-w-sm">
            Undergraduate student navigating the intersection of algorithmic discipline and modern engineering.
          </p>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white rounded-card p-8 sm:p-10 border border-charcoal/10 shadow-subtle space-y-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pastel-pink/40 text-charcoal border border-pastel-pink-border">
                Student Perspective
              </span>

              <p className="text-lg sm:text-xl font-serif leading-relaxed text-charcoal">
                “{about.summary}”
              </p>

              <div className="w-12 h-[1px] bg-charcoal/20" />

              <p className="text-base text-muted-gray leading-relaxed font-sans">
                {about.extended}
              </p>

              {/* Current Status Pill */}
              <div className="pt-4 mt-4 border-t border-charcoal/5 flex items-start gap-3 text-xs text-muted-gray">
                <Compass className="w-4 h-4 text-charcoal/70 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-charcoal font-medium">Current Status:</strong>{" "}
                  {about.current_status}
                </span>
              </div>
            </div>

            {/* University & Department Card */}
            <div className="bg-butter-yellow/20 rounded-card p-6 border border-butter-yellow-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-gray block">
                  Institution
                </span>
                <span className="text-base font-serif font-bold text-charcoal">
                  {portfolio.institution}
                </span>
                <span className="block text-xs text-muted-gray mt-0.5">
                  Department of Software Engineering
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white/90 border border-butter-yellow-border text-xs font-medium text-charcoal whitespace-nowrap self-start sm:self-auto">
                BSc in Software Engineering
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars & Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-gray mb-2">
              Core Principles &amp; Mindset
            </h3>

            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`p-5 rounded-card border shadow-subtle transition-all duration-200 hover:shadow-card hover:-translate-y-0.5 ${pillar.accent}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-charcoal/5 flex items-center justify-center text-charcoal">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-charcoal">
                        {pillar.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/80 border border-charcoal/10 text-muted-gray">
                      {pillar.tag}
                    </span>
                  </div>
                  <p className="text-xs text-muted-gray leading-relaxed pl-9 font-sans">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
