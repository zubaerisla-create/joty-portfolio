"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Users2, ShieldCheck, Zap, GitCommit, Binary } from "lucide-react";
import { CommunityInfo } from "@/types/portfolio";

interface CommunityProps {
  community: CommunityInfo;
}

export function Community({ community }: CommunityProps) {
  return (
    <section id="community" className="py-24 border-t border-charcoal/10 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-charcoal/10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-muted-gray block mb-1">
              05 / Collaborative Practice
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
              Community &amp; Problem Solving
            </h2>
          </div>
          <div className="text-sm text-muted-gray max-w-sm">
            Active participation in student coding circles and peer algorithmic sessions.
          </div>
        </div>

        {/* Highlight Card */}
        <div className="bg-canvas rounded-card border border-charcoal/10 p-8 sm:p-12 shadow-subtle relative overflow-hidden">
          {/* Subtle accent halo */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-pastel-pink/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-butter-yellow/80 text-charcoal border border-butter-yellow-border">
                <Terminal className="w-3.5 h-3.5" />
                <span>{community.club_name}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal leading-snug">
                “{community.tagline}”
              </h3>

              <p className="text-sm sm:text-base text-muted-gray leading-relaxed font-sans">
                {community.description}
              </p>

              {/* Core CP Values */}
              <div className="pt-3">
                <span className="text-xs font-mono uppercase tracking-wider text-charcoal/70 block mb-3">
                  Key Disciplines Practiced
                </span>
                <div className="flex flex-wrap gap-2">
                  {community.core_values.map((val) => (
                    <span
                      key={val}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-charcoal/10 text-charcoal shadow-subtle"
                    >
                      <Binary className="w-3.5 h-3.5 text-muted-gray" />
                      <span>{val}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Editorial Callout Box */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-7 border border-charcoal/10 shadow-card space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-gray">
                <Users2 className="w-4 h-4 text-charcoal" />
                <span>The Value of Peer Learning</span>
              </div>

              <p className="text-xs sm:text-sm text-muted-gray leading-relaxed">
                Solving problems in an academic club setting is about learning to communicate logic under constraint. Explaining a solution to a peer reveals edge cases that solitary practice often conceals.
              </p>

              <div className="space-y-3 pt-2 border-t border-charcoal/10 text-xs">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pastel-pink border border-pastel-pink-dark mt-1.5 shrink-0" />
                  <span className="text-charcoal/90">
                    <strong>Algorithmic thinking:</strong> breaking down complexity into optimal subproblems.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-butter-yellow border border-butter-yellow-dark mt-1.5 shrink-0" />
                  <span className="text-charcoal/90">
                    <strong>Peer code review:</strong> appreciating diverse approaches and readability.
                  </span>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-muted-gray/80 italic">
                * Note: Authentic student involvement. No inflated ranking claims.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
