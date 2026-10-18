"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Code2, Users2, Sparkles } from "lucide-react";
import { CategorizedSkillsResponse } from "@/types/portfolio";

interface SkillsProps {
  skillsData: CategorizedSkillsResponse;
}

export function Skills({ skillsData }: SkillsProps) {
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "Problem Solving":
        return {
          icon: Cpu,
          badgeBg: "bg-pastel-pink/50 text-charcoal border-pastel-pink-border",
          tagBg: "bg-pastel-pink/20 text-charcoal border-pastel-pink-border/50",
          cardAccent: "hover:border-pastel-pink-border",
        };
      case "Development":
        return {
          icon: Code2,
          badgeBg: "bg-butter-yellow/60 text-charcoal border-butter-yellow-border",
          tagBg: "bg-butter-yellow/20 text-charcoal border-butter-yellow-border/50",
          cardAccent: "hover:border-butter-yellow-border",
        };
      case "Communication & Business":
      default:
        return {
          icon: Users2,
          badgeBg: "bg-canvas text-charcoal border-charcoal/15",
          tagBg: "bg-charcoal/5 text-charcoal border-charcoal/10",
          cardAccent: "hover:border-charcoal/20",
        };
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-charcoal/10 bg-canvas relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-charcoal/10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-muted-gray block mb-1">
              02 / Capabilities &amp; Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
              Skills &amp; Learning Vectors
            </h2>
          </div>
          <div className="text-sm text-muted-gray max-w-md">
            Understated, authentic representation of current learning focus without arbitrary percentage bars.
          </div>
        </div>

        {/* 3 Visually Distinct Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.groups.map((group, groupIdx) => {
            const theme = getCategoryTheme(group.category);
            const Icon = theme.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
                className="bg-white rounded-card p-6 sm:p-7 border border-charcoal/10 shadow-subtle flex flex-col justify-between hover:shadow-card transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-charcoal/5 flex items-center justify-center text-charcoal">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-serif font-bold text-charcoal">
                        {group.category}
                      </h3>
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${theme.badgeBg}`}
                    >
                      {group.items.length} Focuses
                    </span>
                  </div>

                  <p className="text-xs text-muted-gray mb-6 leading-relaxed">
                    {group.tagline}
                  </p>

                  <div className="w-full h-[1px] bg-charcoal/10 mb-6" />

                  {/* Skill Items */}
                  <div className="space-y-4">
                    {group.items.map((skill) => (
                      <div
                        key={skill.title}
                        className={`p-3.5 rounded-xl border border-charcoal/5 bg-canvas/60 hover:bg-white transition-all duration-200 ${theme.cardAccent}`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-xs font-semibold text-charcoal flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-charcoal/40" />
                            {skill.title}
                          </h4>
                          {skill.badge && (
                            <span
                              className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border tracking-wider shrink-0 ${theme.tagBg}`}
                            >
                              {skill.badge}
                            </span>
                          )}
                        </div>
                        {skill.description && (
                          <p className="text-[11px] text-muted-gray leading-normal pl-3">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 pt-4 border-t border-charcoal/5 text-[11px] text-muted-gray/70 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-muted-gray/50 shrink-0" />
                  <span>Curriculum aligned • Continuously evolving</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
