import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  variant?: "light" | "dark" | "accent";
}

const GlassCard = ({ 
  children, 
  className = "", 
  hover = true,
  glow = false,
  variant = "light" 
}: GlassCardProps) => {
  const baseStyles = "rounded-2xl transition-all duration-500";
  
  const variantStyles = {
    light: "glass-card",
    dark: "glass-dark",
    accent: "bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-lg border border-accent/20",
  };
  
  const hoverStyles = hover ? "hover-lift hover:shadow-lg" : "";
  const glowStyles = glow ? "hover-glow" : "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(baseStyles, variantStyles[variant], hoverStyles, glowStyles, className)}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
