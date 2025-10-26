import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Globe, ArrowRight, Sparkles, Code2, Rocket } from "lucide-react";
import { FloatingBadge } from "@/components/FloatingBadge";
import { CodeMockup } from "@/components/CodeMockup";
import { ProjectCard } from "@/components/ProjectCard";
import { TimelineItem } from "@/components/TimelineItem";
import { DottedBackground } from "@/components/DottedBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Home() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: InsertContact) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <DottedBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl w-full mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-primary text-lg font-medium flex items-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Hello
                  </motion.p>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight"
                    data-testid="text-hero-name"
                  >
                    I'm <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Harshit Patidar</span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-muted-foreground"
                    data-testid="text-hero-subtitle"
                  >
                    Founder of Xenovo AI | Co-Founder of SirCBSE | Innovator in AI, Web3 & Blockchain
                  </motion.p>
                </div>

                {/* Floating badges */}
                <div className="flex flex-wrap gap-3">
                  <FloatingBadge text="Welcome to my universe" delay={0.5} />
                  <FloatingBadge text="Innovation" delay={0.6} />
                  <FloatingBadge text="AI Magic" delay={0.7} />
                  <FloatingBadge text="Clean Code" delay={0.8} />
                  <FloatingBadge text="Building the Future" delay={0.9} />
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="text-lg text-foreground/80 leading-relaxed max-w-2xl"
                >
                  Tech entrepreneur passionate about shaping the future through AI, blockchain, and decentralized innovation. Building intelligent systems that empower the next digital revolution.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("projects")}
                    className="bg-primary hover:bg-primary border border-primary-border shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all"
                    data-testid="button-view-projects"
                  >
                    View My Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="border-primary/40 hover:border-primary"
                    data-testid="button-contact"
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right side - Code mockup */}
              <div className="flex justify-center lg:justify-end">
                <CodeMockup />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-7xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
                  <Code2 className="w-10 h-10 text-primary" />
                  About Me
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-foreground/80 leading-relaxed max-w-4xl mx-auto text-center"
                data-testid="text-about-description"
              >
                I'm Harshit Patidar — an innovator, founder, and AI enthusiast working to create intelligent systems that transform the way humans interact with technology. My ventures aim to push India into the forefront of the AI & Web3 revolution.
              </motion.p>

              {/* Role badges */}
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  { role: "Founder & CEO", company: "Xenovo AI", icon: "🚀" },
                  { role: "Co-Founder", company: "SirCBSE", icon: "📚" },
                  { role: "Founding Member", company: "Zythorix Technologies", icon: "⚡" },
                ].map((item, i) => (
                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                  >
                    <Card className="p-6 bg-card/50 backdrop-blur-xl border-primary/20 hover-elevate text-center">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <Badge variant="outline" className="mb-3 border-primary/40">
                        {item.role}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground">{item.company}</h3>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-muted/20">
          <div className="max-w-7xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
                  <Rocket className="w-10 h-10 text-primary" />
                  Projects
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <ProjectCard
                  title="Xenovo AI"
                  description="Advanced AI company creating decentralized, intelligent systems for blockchain & real-time analysis."
                  url="https://xenovoai.com"
                  icon="🤖"
                  delay={0.1}
                />
                <ProjectCard
                  title="SirCBSE"
                  description="AI-powered EdTech platform simplifying CBSE learning with smart study tools."
                  url="https://sircbse.com"
                  icon="📚"
                  delay={0.2}
                />
                <ProjectCard
                  title="Zythorix Technologies"
                  description="Tech startup focused on AI, ML, and Web3 product development."
                  url="https://zythorix.com"
                  icon="⚡"
                  delay={0.3}
                />
                <ProjectCard
                  title="XenShield AI"
                  description="Blockchain scam detection bot built using AI. Protecting Web3 users from rug pulls, phishing, and malicious smart contracts."
                  icon="🛡️"
                  delay={0.4}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-24 px-6">
          <div className="max-w-4xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">Achievements</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
              </div>

              <div className="space-y-2 mt-12">
                <TimelineItem year="2024" achievement="Founded Xenovo AI" delay={0.1} />
                <TimelineItem year="2024" achievement="Co-Founded SirCBSE" delay={0.2} />
                <TimelineItem year="2025" achievement="Joined Zythorix Technologies" delay={0.3} />
                <TimelineItem year="2025" achievement="Built XenShield AI" delay={0.4} />
                <TimelineItem year="2026" achievement="Preparing for DeChat & Global Expansion" delay={0.5} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-24 px-6 bg-muted/20">
          <div className="max-w-5xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Card className="p-12 bg-card/50 backdrop-blur-xl border-primary/20 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -inset-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl opacity-30" />
                
                <div className="relative space-y-6">
                  <div className="inline-block p-4 rounded-full bg-primary/10 border border-primary/30 mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">My Vision</h2>
                  
                  <p className="text-2xl md:text-3xl font-medium text-foreground/90 leading-relaxed" data-testid="text-vision">
                    My mission is to make India a hub of global AI and blockchain innovation — to lead the charge towards decentralized intelligence and technological freedom.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-4xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
                  <Mail className="w-10 h-10 text-primary" />
                  Get In Touch
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
              </div>

              <Card className="p-8 bg-card/50 backdrop-blur-xl border-primary/20">
                {/* Contact info */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <a
                    href="mailto:harshitpatidarofficial@gmail.com"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-background/30 hover-elevate"
                    data-testid="link-email"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground/80">harshitpatidarofficial@gmail.com</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-background/30 hover-elevate"
                    data-testid="link-linkedin"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground/80">LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-background/30 hover-elevate"
                    data-testid="link-github"
                  >
                    <Github className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground/80">GitHub</span>
                  </a>
                  
                  <a
                    href="https://harshitpatidar.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-background/30 hover-elevate"
                    data-testid="link-website"
                  >
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground/80">harshitpatidar.in</span>
                  </a>
                </div>

                {/* Contact form */}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              data-testid="input-name"
                              className="bg-background/50 border-border/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                              data-testid="input-email"
                              className="bg-background/50 border-border/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message..."
                              rows={5}
                              {...field}
                              data-testid="input-message"
                              className="bg-background/50 border-border/50 resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary border border-primary-border shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border/50">
          <div className="max-w-7xl w-full mx-auto text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Harshit Patidar. Building the future of AI & Web3.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
