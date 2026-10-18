"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, Compass, Target, Sparkles, FileText } from "lucide-react";
import { ResearchResponse } from "@/types/portfolio";

interface ResearchProps {
  researchData: ResearchResponse;
}

export function Research({ researchData }: ResearchProps) {
  const getIconForSection = (section: string) => {
    switch (section.toLowerCase()) {
      case "research interests":
        return Search;
      case "current focus":
        return BookOpen;
      case "future goal":
        return Target;
      default:
        return FileText;
    }
  };

  return (
    <section id="research" className="py-24 border-t border-charcoal/10 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-charcoal/10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-muted-gray block mb-1">
              03 / Academic Horizon
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
              {researchData.section_title}
            </h2>
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-muted-gray bg-canvas px-3 py-1.5 rounded-full border border-charcoal/10">
            Undergraduate Research Path
          </div>
        </div>

        {/* Editorial Research Statement */}
        <div className="bg-canvas rounded-card p-8 sm:p-10 border border-charcoal/10 shadow-subtle mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-butter-yellow/30 rounded-full blur-2xl pointer-events-none" />
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-muted-gray flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-butter-yellow-dark" />
              Academic Philosophy
            </span>
            <p className="text-base sm:text-lg font-serif italic text-charcoal/90 leading-relaxed">
              &ldquo;{researchData.philosophy}&rdquo;
            </p>
            <div className="pt-2 text-xs text-muted-gray">
              Honest academic inquiry • Preparing for faculty mentorship at Daffodil International University
            </div>
          </div>
        </div>

        {/* 3 Research Cards: Interests, Current Focus, Future Goal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchData.items.map((item, idx) => {
            const Icon = getIconForSection(item.section);
            const isYellow = idx === 1;
            const isPink = idx === 2;

            return (
              <motion.div
                key={item.section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`rounded-card p-7 border shadow-subtle flex flex-col justify-between transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
                  isPink
                    ? "bg-pastel-pink/15 border-pastel-pink-border"
                    : isYellow
                    ? "bg-butter-yellow/20 border-butter-yellow-border"
                    : "bg-white border-charcoal/10"
                }`}
              >
                <div>
                  {/* Category & Status Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-gray">
                      Stage 0{idx + 1}
                    </span>
                    {item.status_label && (
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          isPink
                            ? "bg-pastel-pink/60 border-pastel-pink-border text-charcoal"
                            : isYellow
                            ? "bg-butter-yellow/80 border-butter-yellow-border text-charcoal"
                            : "bg-canvas border-charcoal/10 text-muted-gray"
                        }`}
                      >
                        {item.status_label}
                      </span>
                    )}
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-charcoal/5 flex items-center justify-center text-charcoal mb-4">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-xs font-mono uppercase tracking-widest text-charcoal/70 mb-1">
                    {item.section}
                  </h3>
                  <h4 className="text-lg font-serif font-bold text-charcoal mb-4 leading-snug">
                    {item.title}
                  </h4>

                  <div className="w-8 h-[1px] bg-charcoal/15 mb-4" />

                  <p className="text-xs sm:text-sm text-muted-gray leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-charcoal/10 flex items-center justify-between text-[11px] text-muted-gray font-mono">
                  <span>Transparency: Genuine</span>
                  <span>No Fake DOIs</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
