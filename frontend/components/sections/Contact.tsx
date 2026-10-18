"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { sendContactMessage } from "@/lib/api";
import { ContactPayload, SocialLink } from "@/types/portfolio";

interface ContactProps {
  socialLinks: SocialLink[];
}

export function Contact({ socialLinks }: ContactProps) {
  const [formData, setFormData] = useState<ContactPayload>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successInfo, setSuccessInfo] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear error on user edit
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side quick checks
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await sendContactMessage(formData);
      setStatus("success");
      setSuccessInfo(res.message || "Your message was sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-charcoal/10 bg-canvas relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-charcoal/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-muted-gray block mb-1">
              06 / Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
              Have an idea? Let&apos;s start a conversation.
            </h2>
          </div>
          <p className="text-sm text-muted-gray max-w-sm">
            Whether for research discussions, academic inquiries, or student collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-card p-8 border border-charcoal/10 shadow-subtle space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-gray block">
                  Communication Channels
                </span>
                <h3 className="text-xl font-serif font-bold text-charcoal">
                  Direct Correspondence
                </h3>
                <p className="text-xs text-muted-gray leading-relaxed font-sans">
                  I read every thoughtful message. Feel free to reach out via the form or through public academic/professional profiles below.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {socialLinks
                  .filter((link) => link.is_active && link.url)
                  .map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 rounded-xl border border-charcoal/5 bg-canvas/60 hover:bg-white hover:border-pastel-pink-border transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-pastel-pink/30 flex items-center justify-center text-charcoal group-hover:scale-105 transition-transform">
                          <ExternalLink className="w-4 h-4 text-charcoal" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-charcoal block">
                            {link.label}
                          </span>
                          <span className="text-[11px] text-muted-gray">
                            {link.platform}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-muted-gray/70 group-hover:text-charcoal group-hover:translate-x-0.5 transition-all">
                        ↗
                      </span>
                    </a>
                  ))}
              </div>
            </div>

            {/* Academic Office Hours / Learning Status */}
            <div className="bg-butter-yellow/20 rounded-card p-6 border border-butter-yellow-border/60 space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-butter-yellow-dark" />
                <span className="text-xs font-semibold text-charcoal">
                  Undergraduate Availability
                </span>
              </div>
              <p className="text-xs text-muted-gray leading-relaxed font-sans">
                Available for software engineering study groups, open-source peer reviews, and academic research reading sessions at Daffodil International University.
              </p>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-card p-8 sm:p-10 border border-charcoal/10 shadow-subtle">
              <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-muted-gray mb-6 font-sans">
                Submissions are stored securely in the database with rate-limiting and validation protection.
              </p>

              {/* Status Alert Banners */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Message Delivered</strong>
                    <span>{successInfo}</span>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-start gap-3 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Validation Error</strong>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-charcoal flex items-center justify-between"
                    >
                      <span>Full Name</span>
                      <span className="text-[10px] text-muted-gray font-mono">* required</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      minLength={2}
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Abdullah Al Mamun"
                      className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 bg-canvas/30 text-charcoal text-sm placeholder:text-muted-gray/50 focus:bg-white focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-charcoal flex items-center justify-between"
                    >
                      <span>Email Address</span>
                      <span className="text-[10px] text-muted-gray font-mono">* required</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.edu"
                      className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 bg-canvas/30 text-charcoal text-sm placeholder:text-muted-gray/50 focus:bg-white focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-medium text-charcoal flex items-center justify-between"
                  >
                    <span>Subject</span>
                    <span className="text-[10px] text-muted-gray font-mono">* required</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    minLength={3}
                    maxLength={200}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Research inquiry, project idea, or discussion"
                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 bg-canvas/30 text-charcoal text-sm placeholder:text-muted-gray/50 focus:bg-white focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-charcoal flex items-center justify-between"
                  >
                    <span>Message</span>
                    <span className="text-[10px] text-muted-gray font-mono">min 10 chars</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    minLength={10}
                    maxLength={5000}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note, question, or inquiry here..."
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-canvas/30 text-charcoal text-sm placeholder:text-muted-gray/50 focus:bg-white focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-muted-gray/80 font-mono">
                    Protected by rate limiter
                  </span>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-charcoal bg-pastel-pink hover:bg-pastel-pink-dark border border-pastel-pink-border shadow-subtle hover:shadow-card disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
