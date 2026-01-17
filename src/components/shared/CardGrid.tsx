import { motion } from "framer-motion";
import { Bot, Layers, Database, Cloud, Shield, Settings, Users, Zap, LucideIcon } from "lucide-react";
import BackgroundImage from "./BackgroundImage";

const iconMap: Record<string, LucideIcon> = {
  bot: Bot,
  layers: Layers,
  database: Database,
  cloud: Cloud,
  shield: Shield,
  settings: Settings,
  users: Users,
  zap: Zap,
};

interface CardItem {
  title: string;
  description: string;
  icon?: string;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "glass";
}

const CardGrid = ({ items, columns = 4, variant = "default" }: CardGridProps) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  // Background images for each capability card
  const backgroundImages = [
    "/generated_images/ai_agentic_platforms_visual.png",
    "/generated_images/multi-llm_orchestration_visual.png",
    "/generated_images/federal_data_foundations_visual.png",
    "/generated_images/secure_cloud_ai_visual.png",
    "/generated_images/security_governance_visual.png",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}
    >
      {items.map((card, index) => {
        const Icon = card.icon ? iconMap[card.icon] : null;
        
        return (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`group relative rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-500 overflow-hidden ${
              variant === "glass" 
                ? "glass-card hover:shadow-glow" 
                : "bg-card border border-border hover:border-accent/40 hover:shadow-xl"
            }`}
          >
            {/* Background Image */}
            {backgroundImages[index % backgroundImages.length] && (
              <BackgroundImage
                imageUrl={backgroundImages[index % backgroundImages.length]}
                overlay="dark"
                overlayOpacity={50}
              />
            )}

            {/* Animated gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan/20 via-electric/20 to-cyan/20 blur-xl" />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              {Icon && (
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 sm:mb-5 group-hover:shadow-neon transition-all duration-500"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                </motion.div>
              )}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-cyan-glow font-display group-hover:text-cyan transition-colors duration-300">
                {card.title}
              </h3>
              <p className="leading-relaxed text-sm sm:text-base text-white/80">
                {card.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CardGrid;
