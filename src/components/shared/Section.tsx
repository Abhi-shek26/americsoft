import { ReactNode } from "react";
import { motion } from "framer-motion";
import BackgroundImage from "./BackgroundImage";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  variant?: "default" | "muted" | "dark" | "gradient";
}

const Section = ({
  children,
  className = "",
  title,
  subtitle,
  centered = false,
  variant = "default",
}: SectionProps) => {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted/30 relative",
    dark: "bg-primary text-primary-foreground relative overflow-hidden",
    gradient: "bg-gradient-to-b from-background via-muted/20 to-background",
  };

  return (
    <section className={`py-20 lg:py-28 ${bgClasses[variant]} ${className}`}>
      {/* Optional AI background for dark/gradient variants */}
      {(variant === "dark" || variant === "gradient") && (
        <BackgroundImage
          imageUrl={
            variant === "dark"
              ? "/generated_images/mission_statement_background_pattern.png"
              : "/generated_images/light_network_pattern_background.png"
          }
          overlay={variant === "dark" ? "dark" : "light"}
          overlayOpacity={variant === "dark" ? 50 : 35}
        />
      )}
      {/* Subtle grid pattern for muted sections */}
      {variant === "muted" && (
        <div className="absolute inset-0 grid-pattern opacity-50" />
      )}
      
      {/* Gradient orb for dark sections */}
      {variant === "dark" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl" />
        </div>
      )}
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`mb-14 lg:mb-20 ${centered ? "text-center" : ""}`}
          >
            {title && (
              <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 font-display ${variant === "dark" ? "text-white" : "text-gradient"}`}>
                {variant === "dark" ? <span className="text-gradient">{title}</span> : <span className="text-gradient">{title}</span>}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg lg:text-xl ${variant === "dark" ? "text-white/80" : "text-muted-foreground"} max-w-3xl ${centered ? "mx-auto" : ""}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
