"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, Milestone, ArrowUpRight } from "lucide-react";
import { TimelineMilestone } from "@/types/portfolio";

interface JourneyProps {
  timeline: TimelineMilestone[];
}

export function Journey({ timeline }: JourneyProps) {
  return (
    <section id="journey" className="py-24 border-t border-charcoal/10 bg-canvas relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-charcoal/10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-muted-gray block mb-1">
              04 / Progression
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
              Learning Journey &amp; Milestones
            </h2>
          </div>
          <div className="text-sm text-muted-gray">
            A chronological reflection of academic discipline and development.
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-pastel-pink before:via-butter-yellow before:to-charcoal/20">
          {timeline.map((item, index) => {
            const isPink = item.accent_color === "pink";

            return (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative group"
              >
                {/* Visual Marker Dot */}
                <div
                  className={`absolute -left-[30px] sm:-left-[43px] top-1.5 w-5 h-5 rounded-full border-2 border-charcoal flex items-center justify-center transition-transform group-hover:scale-125 shadow-subtle ${
                    isPink ? "bg-pastel-pink" : "bg-butter-yellow"
                  }`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal" />
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-card p-6 sm:p-7 border border-charcoal/10 shadow-subtle hover:shadow-card transition-all duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                        isPink
                          ? "bg-pastel-pink/50 text-charcoal border-pastel-pink-border"
                          : "bg-butter-yellow/70 text-charcoal border-butter-yellow-border"
                      }`}
                    >
                      {item.period}
                    </span>

                    {item.subtitle && (
                      <span className="text-xs text-muted-gray font-medium">
                        {item.subtitle}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-serif font-bold text-charcoal mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-gray leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
