import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SectionHeading } from "./SectionHeading";
import { personalInfo } from "../data/personal";
import { MagneticButton } from "./MagneticButton";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please include a brief message or project description.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending, trigger confetti and open mailto as fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#B89B6F", "#66726B", "#E2D2B8", "#BDBBB2"],
        });
      } catch {
        // Fallback gracefully
      }

      // Open mailto fallback
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden bg-[#141413]/40">
      {/* 3D background glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#B89B6F]/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#E2D2B8]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 07. GET IN TOUCH"
          title="Let's Build Something"
          highlight="Remarkable Together"
          description="Whether you have an upcoming project, open role, consulting inquiry, or partnership opportunity, I'd love to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick Contact Card with 3D Depth */}
            <div className="p-7 sm:p-9 rounded-3xl glass-card border border-[#B89B6F]/20 shadow-3d-card flex flex-col gap-6">
              <div className="flex items-center gap-4 pb-6 border-b border-[#B89B6F]/15">
                <div className="relative w-14 h-14 rounded-2xl p-[2px] bg-gradient-to-tr from-[#B89B6F] to-[#E2D2B8] shrink-0 overflow-hidden shadow-[0_0_20px_rgba(184,155,111,0.35)]">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full rounded-2xl object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#E2D2B8]">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-[#B89B6F]">
                    Full-Stack & AI Systems Architect
                  </p>
                </div>
              </div>

              {/* Direct email with copy button */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#141413] border border-[#B89B6F]/20">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#B89B6F]/10 border border-[#B89B6F]/25 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#B89B6F]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-[#AFACA1] block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-mono text-[#E2D2B8] hover:text-[#B89B6F] transition-colors truncate block font-medium"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#060701] border border-[#B89B6F]/20 hover:border-[#B89B6F]/50 text-[#BDBBB2] hover:text-[#E2D2B8] transition-all ml-2 shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <CheckCircle2 className="w-4 h-4 text-[#B89B6F]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp direct CTA */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#141413] border border-[#B89B6F]/20 hover:border-[#B89B6F]/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#B89B6F]/10 border border-[#B89B6F]/25 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-[#B89B6F]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#AFACA1] block">
                      WhatsApp Instant Chat
                    </span>
                    <span className="text-sm font-mono text-[#E2D2B8] group-hover:text-[#B89B6F] transition-colors font-medium">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#AFACA1] group-hover:text-[#B89B6F] transition-colors shrink-0" />
              </a>

              {/* Location indicator */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#141413] border border-[#B89B6F]/20">
                <div className="w-10 h-10 rounded-xl bg-[#B89B6F]/10 border border-[#B89B6F]/25 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#66726B]" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#AFACA1] block">
                    Base of Operations
                  </span>
                  <span className="text-sm font-mono text-[#E2D2B8] font-medium">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="p-5 rounded-2xl bg-[#060701]/90 border border-[#B89B6F]/15 flex items-center gap-3 text-xs font-mono text-[#BDBBB2] shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B89B6F] animate-pulse shrink-0" />
              <span>
                Average response time:{" "}
                <strong className="text-[#E2D2B8]">Under 12 hours</strong> across all business days.
              </span>
            </div>
          </div>

          {/* Right Column: 3D Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl glass-card border border-[#B89B6F]/20 shadow-3d-card relative">
              <h3 className="text-2xl font-display font-bold text-[#E2D2B8] mb-2">
                Send a Direct Inquiry
              </h3>
              <p className="text-sm text-[#BDBBB2] mb-8">
                Fill out the project details below and I'll review and respond promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#BDBBB2] mb-2"
                    >
                      Your Name <span className="text-[#B89B6F]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#141413] border text-sm text-[#E2D2B8] placeholder-[#AFACA1] font-mono focus:outline-none transition-colors ${
                        errors.name
                          ? "border-rose-500/70 focus:border-rose-400"
                          : "border-[#B89B6F]/20 focus:border-[#B89B6F]"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#BDBBB2] mb-2"
                    >
                      Your Email <span className="text-[#B89B6F]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#141413] border text-sm text-[#E2D2B8] placeholder-[#AFACA1] font-mono focus:outline-none transition-colors ${
                        errors.email
                          ? "border-rose-500/70 focus:border-rose-400"
                          : "border-[#B89B6F]/20 focus:border-[#B89B6F]"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider text-[#BDBBB2] mb-2"
                  >
                    Subject / Topic <span className="text-[#B89B6F]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Full-Stack Application Development / AI Integration"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#141413] border text-sm text-[#E2D2B8] placeholder-[#AFACA1] font-mono focus:outline-none transition-colors ${
                      errors.subject
                        ? "border-rose-500/70 focus:border-rose-400"
                        : "border-[#B89B6F]/20 focus:border-[#B89B6F]"
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#BDBBB2] mb-2"
                  >
                    Project Details & Scope <span className="text-[#B89B6F]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your system requirements, timeline, and goals..."
                    className={`w-full px-4 py-3 rounded-2xl bg-[#141413] border text-sm text-[#E2D2B8] placeholder-[#AFACA1] font-mono focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? "border-rose-500/70 focus:border-rose-400"
                        : "border-[#B89B6F]/20 focus:border-[#B89B6F]"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <MagneticButton>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-3d-blue w-full py-4 rounded-2xl font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#0B0D06] border-t-transparent rounded-full animate-spin" />
                        <span>Sending Transmission...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#0B0D06]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </MagneticButton>

                {/* Feedback message */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-2xl bg-[#B89B6F]/15 border border-[#B89B6F]/30 text-[#E2D2B8] text-xs font-mono flex items-center gap-3"
                    >
                      <Sparkles className="w-5 h-5 text-[#B89B6F] shrink-0" />
                      <span>
                        Thank you! Your message has been prepared in your email client, and I will be in touch shortly.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
