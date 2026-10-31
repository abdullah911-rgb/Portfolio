import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  FileText,
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
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending with realistic feedback & trigger confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00F0FF", "#3B82F6", "#8B5CF6", "#10B981"],
        });
      } catch {
        // Safe fallback
      }
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Mailto fallback generator
  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || "Project Inquiry"
  )}&body=${encodeURIComponent(
    `Hi Muhammad,\n\nMy name is ${formData.name || "[Name]"}.\n\n${
      formData.message || "[Message]"
    }\n\nReach me at: ${formData.email || "[Email]"}`
  )}`;

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden bg-[#0C0C0C]">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 07. GET IN TOUCH"
          title="LET'S BUILD"
          highlight="SOMETHING GREAT."
          description="Have an opportunity, a project concept, or a development challenge in mind? Let's connect and turn it into a reality."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Quick Links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl glass-card border border-white/10">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-8">
                I am currently open to full-time roles, freelance projects, and remote engineering opportunities. Reach out directly through any preferred channel.
              </p>

              <div className="space-y-5">
                {/* Email with copy button */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-text-muted block">Direct Email</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-mono text-white hover:text-cyan-400 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-text-secondary hover:text-white transition-all shrink-0 ml-2"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {copied ? (
                      <span className="text-xs font-mono text-emerald-400">Copied!</span>
                    ) : (
                      <Copy className="w-4 h-4 text-cyan-400" />
                    )}
                  </button>
                </div>

                {/* WhatsApp & Phone */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-400/10 text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-text-muted block">Phone / WhatsApp</span>
                      <a
                        href={personalInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-white hover:text-emerald-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all"
                    title="Chat on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-400/10 text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-text-muted block">Based In</span>
                    <span className="text-sm font-mono text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Resume download box */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                  Curriculum Vitae
                </span>
                <MagneticButton>
                  <a
                    href="/assets/resume.pdf"
                    download="Muhammad_Abdullah_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/[0.05] border border-white/15 hover:border-cyan-400/50 hover:bg-white/[0.08] text-white font-mono text-xs uppercase tracking-wider transition-all"
                  >
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span>Download Official Resume (PDF)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Send a Message
                </h3>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Typical response &lt; 12 hours
                </span>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-2xl font-display font-bold text-white">
                      Message Received!
                    </h4>
                    <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>. I have logged your message and will reply to <span className="text-cyan-400">{formData.email}</span> shortly.
                    </p>
                    <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono uppercase text-white hover:bg-white/[0.1] transition-all"
                      >
                        <Mail className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Send copy via Email Client</span>
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", email: "", subject: "", message: "" });
                        }}
                        className="px-5 py-2.5 rounded-full bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all"
                      >
                        Send Another Note
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div>
                        <label className="block text-xs font-mono uppercase text-text-secondary mb-2">
                          Your Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white font-mono text-sm placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all ${
                            errors.name ? "border-rose-500/80 bg-rose-500/[0.03]" : "border-white/10 hover:border-white/20"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs font-mono text-rose-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email field */}
                      <div>
                        <label className="block text-xs font-mono uppercase text-text-secondary mb-2">
                          Your Email <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white font-mono text-sm placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all ${
                            errors.email ? "border-rose-500/80 bg-rose-500/[0.03]" : "border-white/10 hover:border-white/20"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs font-mono text-rose-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject field */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-text-secondary mb-2">
                        Subject / Opportunity Type <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Full-Stack Developer Role / MVP Project"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white font-mono text-sm placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all ${
                          errors.subject ? "border-rose-500/80 bg-rose-500/[0.03]" : "border-white/10 hover:border-white/20"
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-xs font-mono text-rose-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message field */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-text-secondary mb-2">
                        Message & Project Details <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your application, timeline, technology preferences, or team requirements..."
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white font-mono text-sm placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none ${
                          errors.message ? "border-rose-500/80 bg-rose-500/[0.03]" : "border-white/10 hover:border-white/20"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs font-mono text-rose-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Action button & Mailto fallback */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-black font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/35 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            <span>Dispatching...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <a
                        href={mailtoUrl}
                        className="text-xs font-mono text-text-muted hover:text-cyan-400 transition-colors flex items-center gap-1 self-center sm:self-auto"
                      >
                        <span>Or click to open standard mail client</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
