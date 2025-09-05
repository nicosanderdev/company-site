import { Button } from "flowbite-react";
import { CheckCircle, Award, Globe } from "lucide-react"; // Ejemplos de iconos, puedes cambiarlos
import { SectionHeader } from "../../components/SectionHeader";
import { SectionSubtitle } from "../../components/SectionSubtitle";

export default function FeatureSection() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-500" />,
      title: "Calidad Garantizada",
      description: "Nuestros productos pasan por rigurosas pruebas para asegurar la excelencia.",
      link: "#", // Enlace de "Leer más"
    },
    {
      icon: <Award className="w-6 h-6 text-primary-600 dark:text-primary-500" />,
      title: "Soporte Premium",
      description: "Acceso a nuestro equipo de expertos 24/7 para cualquier consulta.",
      link: "#",
    },
    {
      icon: <Globe className="w-6 h-6 text-primary-600 dark:text-primary-500" />,
      title: "Soluciones Globales",
      description: "Diseñado para escalar y funcionar en cualquier parte del mundo.",
      link: "#",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/* Columna Izquierda: Imagen */}
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <img
            className="w-full rounded-lg" // rounded-lg para bordes redondeados
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" // Puedes cambiar esta imagen
            alt="office work"
          />
        </div>

        {/* Columna Derecha: Contenido */}
        <div className="mt-8 lg:mt-0">
          {/* Título y Descripción principal */}
          <SectionHeader>
            Transformamos tus ideas en realidad digital
          </SectionHeader>
          
          <SectionSubtitle>
            Enfocados en la innovación y la eficiencia, nuestro equipo te acompaña en cada paso del
            desarrollo para asegurar que tus proyectos no solo cumplan, sino superen tus expectativas.
          </SectionSubtitle>

          {/* Separador */}
          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          {/* Bloques de Características */}
          <div className="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 md:gap-8 xl:gap-8 md:space-y-0">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4"> {/* items-start para alinear arriba */}
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                  <a href={feature.link} className="inline-flex items-center text-primary-600 hover:underline dark:text-primary-500">
                    Saber más
                    <svg className="w-5 h-5 ms-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Segundo Separador */}
          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          {/* Texto Descriptivo Final */}
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Comprometidos con el éxito de cada cliente, proporcionando soluciones que crecen contigo.
          </p>
        </div>
      </div>
    </section>
  );
}