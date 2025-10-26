import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  url?: string;
  icon: string;
  delay?: number;
}

export function ProjectCard({ title, description, url, icon, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      data-testid={`project-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <Card className="relative p-6 bg-card/50 backdrop-blur-xl border-primary/20 hover-elevate group overflow-visible">
        {/* Glow on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 rounded-lg blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10" />
        
        <div className="relative">
          {/* Icon */}
          <div className="text-4xl mb-4">{icon}</div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          
          {/* Link */}
          {url && (
            <Button
              variant="outline"
              size="sm"
              className="border-primary/40 hover:border-primary group/btn"
              asChild
              data-testid={`button-visit-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <span>Visit Project</span>
                <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
