import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  description,
  align = "left",
}) => {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 transform-gpu ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}
    >
      {/* 3D Floating Badge */}
      <motion.div
        whileHover={{ scale: 1.05, translateY: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase border border-[#5E9BD9]/30 bg-[#5E9BD9]/10 text-[#5E9BD9] shadow-[0_0_20px_rgba(94,155,217,0.15)] backdrop-blur-md mb-4 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-[#5E9BD9] animate-pulse" />
        <span>{badge}</span>
      </motion.div>

      {/* 3D Heading Typography */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-[#E8EEF6] leading-[1.1]">
        {title}{" "}
        {highlight && (
          <span className="text-gradient-blue inline-block">{highlight}</span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base md:text-lg text-[#B8C4D4] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </motion.div>
  );
};
