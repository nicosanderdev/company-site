import { ChartNoAxesCombined, DatabaseZap, LayoutTemplate } from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { SectionSubtitle } from "../../components/SectionSubtitle";

export default function MyServices() {

  const services = [
    {
      icon: <LayoutTemplate size={36} strokeWidth={2} />,
      title: "Aplicaciones web rápidas con React",
      text: "Uso de sistemas de diseño modernos como Flowbite, para entregar interfaces profesionales y consistentes en menos tiempo."
    },
    {
      icon: <DatabaseZap size={36} strokeWidth={2} />,
      title: "Backends simples con Supabase / Firebase",
      text: "Ideal para startups o proyectos que requieren lanzar MVPs en semanas, con despliegue rápido y costos bajos."
    },
    {
      icon: <ChartNoAxesCombined size={36} strokeWidth={2} />,
      title: "Escalabilidad asegurada con ASP.NET",
      text: "Desde soluciones pequeñas hasta sistemas empresariales con miles de usuarios concurrentes."
    }
  ]

  return (
    <>
      <section id="my-services" className="bg-emerald-300 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
          <div className="place-self-center text-center">
            <SectionHeader>
              Desarrollo a medida
            </SectionHeader>
            <SectionSubtitle>
              Elegí el trayecto que se ajuste a tus necesidades
            </SectionSubtitle>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            
            {services.map((service, index) => (
              <div key={index}>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-500">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {service.text}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}