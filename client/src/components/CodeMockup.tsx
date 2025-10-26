import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CodeMockup() {
  const [displayedCode, setDisplayedCode] = useState("");
  
  const code = `const profile = {
  name: "Harshit Patidar",
  title: "Founder & Innovator",
  skills: [
    "AI", "Web3", "Blockchain",
    "Next.js", "Python", "Tailwind"
  ],
  projects: [
    "Xenovo AI",
    "SirCBSE",
    "Zythorix Technologies"
  ],
  mission: "Build intelligent and 
    decentralized systems that 
    shape the future."
};`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= code.length) {
        setDisplayedCode(code.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-2xl"
      data-testid="code-mockup"
    >
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur-2xl opacity-50 animate-glow-pulse" />
      
      {/* Code editor */}
      <div className="relative rounded-xl border border-primary/30 bg-card/50 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Editor header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80" />
            <div className="w-3 h-3 rounded-full bg-[#10b981]/80" />
          </div>
          <span className="ml-4 text-xs text-muted-foreground font-mono">profile.ts</span>
        </div>
        
        {/* Code content */}
        <div className="p-6 font-mono text-sm leading-relaxed">
          <pre className="text-foreground/90">
            <code>
              {displayedCode.split('\n').map((line, i) => (
                <div key={i} className="flex">
                  <span className="text-muted-foreground/50 select-none mr-6 text-right w-6">{i + 1}</span>
                  <span 
                    dangerouslySetInnerHTML={{
                      __html: line
                        .replace(/const|export|return/g, '<span class="text-accent">$&</span>')
                        .replace(/"([^"]*)"/g, '<span class="text-secondary">$&</span>')
                        .replace(/\b(profile|name|title|skills|projects|mission)\b/g, '<span class="text-primary">$&</span>')
                    }}
                  />
                </div>
              ))}
              <span className="inline-block w-2 h-4 bg-primary/80 animate-pulse ml-1" />
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
