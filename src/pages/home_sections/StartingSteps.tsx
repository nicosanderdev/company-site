import { motion } from "motion/react"
import { Lightbulb, DollarSign, Repeat, LifeBuoy } from "lucide-react";
import { Button } from "flowbite-react";
import { SectionHeader } from "../../components/SectionHeader";

export default function StartingSteps() {
  const steps = [
    {
      icon: <Lightbulb size={32} strokeWidth={2} />,
      title: "Reunión inicial",
      description: "Escucho las necesidades y defino objetivos.",
    },
    {
      icon: <DollarSign size={32} strokeWidth={2} />,
      title: "Propuesta técnica + presupuesto",
      description: "Solución clara y transparente.",
    },
    {
      icon: <Repeat size={32} strokeWidth={2} />,
      title: "Desarrollo iterativo",
      description: "Entregas continuas para validar el producto.",
    },
    {
      icon: <LifeBuoy size={32} strokeWidth={2} />,
      title: "Soporte y mejoras",
      description: "Acompañamiento post-lanzamiento.",
    },
  ];

  return (
    <section>
      <div className="max-w-xl px-4 py-16 mx-auto">
        <SectionHeader>Cómo trabajo</SectionHeader>

        <div className="grid gap-8 grid-cols-1">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-400 text-white shadow-md mb-4 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
              <div className="absolute -left-3 top-4/9 hidden w-8 h-8 rounded-full pt-1 font-bold text-white bg-emerald-700 md:block">
                  {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg">
            Reservá tu primera reunión
          </Button>
        </div>
      </div>
    </section>
  );
}