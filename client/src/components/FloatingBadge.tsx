import { motion } from "framer-motion";

interface FloatingBadgeProps {
  text: string;
  delay?: number;
  className?: string;
}

export function FloatingBadge({ text, delay = 0, className = "" }: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`inline-block ${className}`}
      data-testid={`badge-${text.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-75 group-hover:opacity-100" />
        <div className="relative px-4 py-2 rounded-full border border-primary/30 bg-background/40 backdrop-blur-md hover-elevate active-elevate-2">
          <span className="text-sm font-medium text-foreground/90 whitespace-nowrap">
            {text}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
