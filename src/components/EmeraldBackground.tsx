"use client";
import { motion } from "framer-motion";

export default function EmeraldBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-emerald-50 dark:bg-gray-900">

      {/* === Clouds === */}
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

        const randomX = (Math.random() - 0.5) * 600;
        const randomY = (Math.random() - 0.5) * 600;
        const randomDuration = 20 + Math.random() * 30;

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

      {/* === Particles === */}
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