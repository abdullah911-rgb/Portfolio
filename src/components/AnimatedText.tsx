import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedWordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<AnimatedWordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(
    progress,
    range,
    ["rgba(165, 169, 179, 0.25)", "rgba(244, 244, 244, 1)"]
  );

  return (
    <span className="relative inline-block mr-[0.3em] my-[0.1em]">
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  );
};

interface AnimatedParagraphProps {
  text: string;
  className?: string;
}

export const AnimatedScrollText: React.FC<AnimatedParagraphProps> = ({
  text,
  className = "",
}) => {
  const elementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = text.split(" ");

  return (
    <p ref={elementRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};
