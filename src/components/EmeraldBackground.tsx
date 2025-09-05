"use client";
import { motion } from "framer-motion";

export default function EmeraldBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-emerald-50 dark:bg-gray-900">

      {/* === Glowing Blobs (Clouds) === */}
      {[...Array(10)].map((_, i) => {
        const positions = [
          { top: "25%", left: "20%" },
          { bottom: "33%", right: "25%" },
          { top: "66%", left: "33%" },
          { top: "50%", right: "20%" },
          { bottom: "20%", left: "25%" },
        ];
        const pos = positions[i % positions.length];
        const size = 100 + i * 16;

        // Generate random travel distances for each blob
        const randomX = (Math.random() - 0.5) * 600; // Random value between -300 and 300
        const randomY = (Math.random() - 0.5) * 600; // Random value between -300 and 300
        const randomDuration = 20 + Math.random() * 30; // Random duration between 20s and 50s

        return (
          <motion.div
            key={i}
            animate={{
              x: [0, randomX, 0],
              y: [0, randomY, 0],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              width: size,
              height: size,
              ...pos,
            }}
            className={`absolute rounded-full blur-xl ${i % 2 === 0 ? "bg-emerald-200/50 dark:bg-gray-800/50" : "bg-teal-300/25 dark:bg-gray-700/25"
              }`}
          />
        );
      })}

      {/* === Rotating Subtle Shapes === 
      <motion.div
        animate={{ rotate: 360, scale: 1.5 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 -translate-y-1/2
                   rounded-full border-4 border-emerald-500/10 dark:border-gray-300/10"
      />*/}

      {/* === Floating Particles === */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0], y: [0, -20, 0] }}
          transition={{ duration: 6 + Math.random() * 8, repeat: Infinity, delay: i * 0.3 }}
          className="absolute w-1 h-1 rounded-full bg-emerald-600/75 dark:bg-emerald-300/75"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};