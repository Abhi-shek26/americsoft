import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "./AnimatedBackground";
import BackgroundImage from "./BackgroundImage";
import HeroIllustration from "./HeroIllustration";

interface HeroProps {
  headline: string;
  subhead: string;
  body?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  children?: ReactNode;
  variant?: "default" | "simple";
  showIllustration?: boolean;
  backgroundImageUrl?: string;
}

const Hero = ({
  headline,
  subhead,
  body,
  primaryCta,
  secondaryCta,
  children,
  variant = "default",
  showIllustration = false,
  backgroundImageUrl = "/generated_images/federal_ai_network_visualization.png",
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-hero min-h-screen flex items-center">
      {/* AI background image (bottom layer) */}
      <BackgroundImage
        imageUrl={backgroundImageUrl}
        overlay="dark"
        overlayOpacity={45}
      />

      {/* Animated Background (tech mesh, orbs, etc.) */}
      <AnimatedBackground variant="hero" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className={`${variant === "simple" ? "py-20 lg:py-28" : "py-16 sm:py-20 lg:py-32"}`}>
          <div className={`grid ${showIllustration ? "lg:grid-cols-2 gap-8 lg:gap-12 items-center" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-dark text-cyan-glow text-xs sm:text-sm font-medium mb-4 sm:mb-6 pulse-glow"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                Federal-Ready AI Solutions
              </motion.div>

              {/* Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6 font-display"
              >
                <span className="text-gradient-hero">{headline.split(" ").slice(0, 2).join(" ")}</span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="text-white">{headline.split(" ").slice(2).join(" ")}</span>
              </motion.h1>

              {/* Subhead */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl lg:text-2xl text-cyan-glow font-medium mb-4 sm:mb-6"
              >
                {subhead}
              </motion.p>

              {/* Body */}
              {body && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8 max-w-3xl leading-relaxed"
                >
                  {body}
                </motion.p>
              )}

              {/* CTAs */}
              {(primaryCta || secondaryCta) && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                >
                  {primaryCta && (
                    <Button 
                      asChild 
                      size="lg" 
                      className="w-full sm:w-auto bg-gradient-to-r from-cyan to-cyan-light hover:from-cyan-light hover:to-cyan text-white font-semibold px-6 sm:px-8 shadow-neon transition-all duration-300 hover:shadow-glow-lg"
                    >
                      <Link to={primaryCta.href}>
                        {primaryCta.text}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button 
                      asChild 
                      size="lg" 
                      variant="outline" 
                      className="w-full sm:w-auto border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-cyan/50 font-medium backdrop-blur-sm transition-all duration-300"
                    >
                      <Link to={secondaryCta.href}>{secondaryCta.text}</Link>
                    </Button>
                  )}
                </motion.div>
              )}

              {children}
            </motion.div>

            {/* Hero Illustration */}
            {showIllustration && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block"
              >
                <HeroIllustration />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
    </section>
  );
};

export default Hero;
