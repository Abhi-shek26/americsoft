import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackgroundImage from "./BackgroundImage";

interface CTABandProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  buttonExternal?: boolean;
  variant?: "accent" | "dark";
}

const CTABand = ({
  title,
  description,
  buttonText,
  buttonHref,
  buttonExternal = false,
  variant = "accent",
}: CTABandProps) => {
  const isAccent = variant === "accent";

  return (
    <section className={`relative overflow-hidden ${isAccent ? "bg-hero" : "bg-muted/50"}`}>
      {/* AI Background Image */}
      {isAccent && (
        <BackgroundImage
          imageUrl="/generated_images/services_page_tech_background.png"
          overlay="dark"
          overlayOpacity={40}
        />
      )}
      
      {/* Animated background */}
      {isAccent && (
        <>
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <motion.div
            className="absolute right-0 top-0 w-1/2 h-full"
            style={{
              background: "radial-gradient(circle at 70% 50%, hsl(175 85% 45% / 0.3) 0%, transparent 60%)",
            }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8"
        >
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-3 sm:mb-4">
              <Sparkles className={`w-5 h-5 ${isAccent ? "text-cyan-glow" : "text-accent"}`} />
            </div>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 font-display ${isAccent ? "text-white" : "text-foreground"}`}>
              {title}
            </h2>
            {description && (
              <p className={`text-base sm:text-lg ${isAccent ? "text-white/80" : "text-muted-foreground"}`}>
                {description}
              </p>
            )}
          </div>
          <Button
            asChild
            size="lg"
            className={`w-full sm:w-auto ${
              isAccent
                ? "bg-gradient-to-r from-cyan to-cyan-light hover:from-cyan-light hover:to-cyan text-white shadow-neon hover:shadow-glow-lg"
                : "bg-gradient-to-r from-primary to-navy-light text-white"
            } font-semibold px-6 sm:px-8 shrink-0 transition-all duration-300`}
          >
            {buttonExternal ? (
              <a href={buttonHref} target="_blank" rel="noreferrer">
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            ) : (
              <Link to={buttonHref}>
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            )}
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
    </section>
  );
};

export default CTABand;
