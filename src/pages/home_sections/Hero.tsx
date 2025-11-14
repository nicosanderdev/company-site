"use client";

import { Button } from "flowbite-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero" className="bg-emerald-50 dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        {/* Left side: Text */}
        <motion.div
          className="mr-auto place-self-center lg:col-span-7"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-tight md:text-5xl xl:text-6xl dark:text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soluciones web{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
            modernas
            </span>{" "}
          </motion.h1>

          <motion.p
            className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Construyo aplicaciones web escalables y rápidas para empresas y
            emprendedores que necesitan resultados confiables.
          </motion.p>

          <motion.div
            className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white transition-transform transform hover:scale-105"
            >
              Hablá conmigo
            </Button>
            <Button
              size="lg"
              color="dark"
              outline
              className="hover:scale-105 transition-transform"
            >
              Ver productos
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side: Image */}
        <motion.div
          className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
            className="drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
