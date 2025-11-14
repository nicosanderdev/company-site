"use client";
import { motion } from "framer-motion";

/**
 * A wrapper component that provides an animated emerald/gray background
 * to any children placed inside it.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className=""] 
 */
export default function EmeraldBackground({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative overflow-hidden bg-emerald-50 dark:bg-gray-900 ${className}`}>
      {/* BACKGROUND ELEMENTS CONTAINER */}
      <div className="absolute inset-0 z-0">

        {/* === Clouds === */}
        {[...Array(10)].map((_, i) => {
          const positions = [
            { top: "10%", left: "15%" }, { top: "20%", right: "15%" },
            { top: "50%", left: "30%" }, { top: "60%", right: "25%" },
            { bottom: "15%", left: "20%" }, { bottom: "10%", right: "10%" },
          ];
          const pos = positions[i % positions.length];
          const size = 150 + i * 20;

          const randomX = (Math.random() - 0.5) * 1200;
          const randomY = (Math.random() - 0.5) * 1200;
          
          const randomRotation = (Math.random() - 0.5) * 50;
          const randomScale = 1 + Math.random() * 0.3;
          const randomDuration = 25 + Math.random() * 10;

          return (
            <motion.div
              key={i}
              animate={{
                x: [0, randomX, 0],
                y: [0, randomY, 0],
                rotate: [0, randomRotation, 0],
                scale: [1, randomScale, 1],
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
              className={`absolute rounded-full blur-2xl ${
                i % 2 === 0
                  ? "bg-emerald-200/50 dark:bg-gray-800/50"
                  : "bg-teal-300/25 dark:bg-gray-700/25"
              }`}
            />
          );
        })}

        {/* === Particles (Bubbles) === */}
        {[...Array(80)].map((_, i) => {
          const size = 2 + Math.random() * 3;
          const randomYTravel = 50 + Math.random() * 100;
          const randomXDrift = (Math.random() - 0.5) * 50;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                y: [0, -randomYTravel, 0],
                x: [0, randomXDrift, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute rounded-full bg-emerald-600/75 dark:bg-emerald-300/75"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          );
        })}
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}