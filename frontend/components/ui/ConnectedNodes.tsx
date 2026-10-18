"use client";

import React from "react";
import { motion } from "framer-motion";

interface NodeItem {
  id: string;
  x: number;
  y: number;
  r: number;
  label: string;
  category: "logic" | "research" | "engineering" | "collaboration";
  color: string;
  sublabel: string;
}

const NODES: NodeItem[] = [
  { id: "core", x: 200, y: 170, r: 26, label: "Core Logic", category: "logic", color: "#F6C7D8", sublabel: "Problem Solving" },
  { id: "inquiry", x: 100, y: 80, r: 20, label: "Literature", category: "research", color: "#FFF2B8", sublabel: "Academic Inquiry" },
  { id: "dev", x: 310, y: 95, r: 22, label: "Development", category: "engineering", color: "#FFFCF7", sublabel: "Applied SE" },
  { id: "peers", x: 90, y: 260, r: 19, label: "Peer Learning", category: "collaboration", color: "#FFF2B8", sublabel: "CP Club" },
  { id: "future", x: 290, y: 250, r: 24, label: "Research", category: "research", color: "#F6C7D8", sublabel: "Future Papers" },
  { id: "business", x: 200, y: 315, r: 18, label: "Context", category: "collaboration", color: "#FFFCF7", sublabel: "Real-world Value" },
];

const CONNECTIONS = [
  { from: "core", to: "inquiry" },
  { from: "core", to: "dev" },
  { from: "core", to: "peers" },
  { from: "core", to: "future" },
  { from: "core", to: "business" },
  { from: "inquiry", to: "future" },
  { from: "peers", to: "dev" },
  { from: "future", to: "business" },
];

export function ConnectedNodes() {
  const getNode = (id: string) => NODES.find((n) => n.id === id)!;

  return (
    <div className="relative w-full max-w-[440px] aspect-square mx-auto flex items-center justify-center p-4">
      {/* Subtle backdrop halo */}
      <div
        className="absolute inset-8 rounded-full pointer-events-none blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(246, 199, 216, 0.4) 0%, rgba(255, 242, 184, 0.3) 50%, transparent 75%)",
        }}
      />

      <svg
        viewBox="0 0 400 370"
        className="w-full h-full relative z-10 overflow-visible select-none"
        aria-label="Conceptual diagram representing connected nodes of problem solving, software engineering, and research inquiry"
      >
        {/* Decorative background grid and axes */}
        <circle
          cx="200"
          cy="185"
          r="165"
          fill="none"
          stroke="#77717A"
          strokeWidth="1"
          strokeDasharray="3 6"
          opacity="0.25"
        />
        <circle
          cx="200"
          cy="185"
          r="95"
          fill="none"
          stroke="#77717A"
          strokeWidth="1"
          strokeDasharray="2 4"
          opacity="0.2"
        />

        {/* Lines connecting nodes */}
        {CONNECTIONS.map((c, i) => {
          const n1 = getNode(c.from);
          const n2 = getNode(c.to);
          return (
            <motion.line
              key={`${c.from}-${c.to}-${i}`}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="#242126"
              strokeWidth="1.2"
              strokeDasharray={i % 2 === 0 ? "none" : "4 4"}
              opacity="0.35"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: i * 0.1 }}
            />
          );
        })}

        {/* Connecting pulse dots traversing paths */}
        <motion.circle
          r="3"
          fill="#B85D80"
          animate={{
            cx: [200, 100, 290, 200],
            cy: [170, 80, 250, 170],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.circle
          r="2.5"
          fill="#9E841B"
          animate={{
            cx: [200, 310, 90, 200],
            cy: [170, 95, 260, 170],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Nodes */}
        {NODES.map((node, idx) => (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.15 * idx,
            }}
            whileHover={{ scale: 1.08 }}
            className="cursor-default"
          >
            {/* Outer ring */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 5}
              fill="none"
              stroke={node.color === "#FFFCF7" ? "#77717A" : node.color}
              strokeWidth="1"
              opacity="0.6"
            />
            {/* Node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.color}
              stroke="#242126"
              strokeWidth="1.5"
            />
            {/* Node center pip */}
            <circle cx={node.x} cy={node.y} r="2.5" fill="#242126" />

            {/* Labels */}
            <text
              x={node.x}
              y={node.y + node.r + 14}
              textAnchor="middle"
              className="text-[11px] font-sans font-semibold fill-charcoal tracking-wide"
            >
              {node.label}
            </text>
            <text
              x={node.x}
              y={node.y + node.r + 26}
              textAnchor="middle"
              className="text-[9px] font-sans fill-muted-gray uppercase tracking-wider"
            >
              {node.sublabel}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Floating editorial footnote indicator */}
      <div className="absolute -bottom-2 right-4 bg-white/90 backdrop-blur-sm border border-charcoal/10 rounded-full px-3 py-1 shadow-subtle text-[11px] text-muted-gray flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-pastel-pink border border-pastel-pink-dark inline-block" />
        <span>Connected Learning Model</span>
      </div>
    </div>
  );
}
