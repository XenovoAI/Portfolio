import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  achievement: string;
  delay?: number;
}

export function TimelineItem({ year, achievement, delay = 0 }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex gap-6 group"
      data-testid={`timeline-${year}`}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/40 bg-background group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300">
          <div className="w-4 h-4 rounded-full bg-primary group-hover:animate-pulse" />
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-primary/40 to-transparent group-last:hidden mt-2" />
      </div>
      
      {/* Content */}
      <div className="pb-12 flex-1">
        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 mb-3">
          <span className="text-sm font-semibold text-primary">{year}</span>
        </div>
        <p className="text-foreground/90 text-lg leading-relaxed">{achievement}</p>
      </div>
    </motion.div>
  );
}
