import { motion } from "framer-motion";

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[500px]">
      {/* Central core */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan to-electric opacity-30 blur-xl" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan to-cyan-light shadow-neon" />
        <div className="absolute inset-8 rounded-full bg-navy-light flex items-center justify-center">
          <motion.div
            className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-cyan to-neon"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Orbiting elements */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2"
          animate={{ rotate: 360 }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
          style={{ transformOrigin: "0 0" }}
        >
          <motion.div
            className={`absolute rounded-full ${
              i % 2 === 0 ? "bg-cyan/80" : "bg-electric/80"
            }`}
            style={{
              width: 8 + i * 4,
              height: 8 + i * 4,
              left: 80 + i * 35,
              top: -4 - i * 2,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        </motion.div>
      ))}

      {/* Outer rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20"
          style={{
            width: 150 + i * 80,
            height: 150 + i * 80,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Data flow lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const x1 = 50 + Math.cos((angle * Math.PI) / 180) * 20;
          const y1 = 50 + Math.sin((angle * Math.PI) / 180) * 20;
          const x2 = 50 + Math.cos((angle * Math.PI) / 180) * 45;
          const y2 = 50 + Math.sin((angle * Math.PI) / 180) * 45;
          return (
            <motion.line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="url(#cyan-gradient)"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(175, 85%, 50%)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating nodes */}
      {[
        { x: "20%", y: "30%", size: 12, delay: 0 },
        { x: "80%", y: "25%", size: 10, delay: 0.5 },
        { x: "15%", y: "70%", size: 14, delay: 1 },
        { x: "85%", y: "65%", size: 10, delay: 1.5 },
        { x: "35%", y: "15%", size: 8, delay: 2 },
        { x: "70%", y: "80%", size: 12, delay: 2.5 },
      ].map((node, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute rounded-full bg-gradient-to-br from-cyan to-electric shadow-neon"
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: node.delay,
          }}
        />
      ))}

      {/* Connection lines to nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[
          { x1: "50%", y1: "50%", x2: "20%", y2: "30%" },
          { x1: "50%", y1: "50%", x2: "80%", y2: "25%" },
          { x1: "50%", y1: "50%", x2: "15%", y2: "70%" },
          { x1: "50%", y1: "50%", x2: "85%", y2: "65%" },
        ].map((line, i) => (
          <motion.line
            key={`conn-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="hsl(175, 85%, 42%)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default HeroIllustration;
