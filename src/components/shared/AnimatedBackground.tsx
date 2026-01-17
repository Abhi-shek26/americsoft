import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: "hero" | "section";
}

const AnimatedBackground = ({ variant = "hero" }: AnimatedBackgroundProps) => {
  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-mesh opacity-50" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(175 85% 42% / 0.15) 0%, transparent 70%)",
            left: "10%",
            top: "20%",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(200 100% 55% / 0.1) 0%, transparent 70%)",
            right: "-10%",
            top: "-20%",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(220 70% 50% / 0.12) 0%, transparent 70%)",
            left: "50%",
            bottom: "0%",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Glowing line */}
        <motion.div
          className="absolute h-px w-full left-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, hsl(175 85% 50% / 0.5) 50%, transparent 100%)",
            bottom: "0",
          }}
          initial={{ opacity: 0.3, scaleX: 0.5 }}
          animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Particle dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-glow"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Tech lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <motion.line
            x1="0%"
            y1="80%"
            x2="100%"
            y2="60%"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.line
            x1="0%"
            y1="40%"
            x2="60%"
            y2="100%"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
          />
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="hsl(175, 85%, 50%)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <div className="absolute inset-0 grid-pattern" />
    </div>
  );
};

export default AnimatedBackground;
