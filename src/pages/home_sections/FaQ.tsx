import { Accordion, AccordionContent, AccordionPanel, accordionTheme, AccordionTitle } from "flowbite-react";
import { SectionHeader } from "../../components/SectionHeader";
import type { CustomFlowbiteTheme } from "flowbite-react/types";

export default function FaQ() {

    const accordionTheme: CustomFlowbiteTheme["accordion"] = {
        root: {
            base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
            flush: {
                off: "rounded-lg border bg-white dark:bg-gray-900",
                on: "border-b bg-white dark:bg-gray-900",
            },
        },
        content: {
            base: "p-5 first:rounded-t-lg last:rounded-b-lg bg-white text-gray-600 dark:bg-gray-900 dark:text-gray-400",
        },
        title: {
            arrow: {
                base: "h-6 w-6 shrink-0 text-emerald-500 transition-transform duration-200",
                open: {
                    off: "",
                    on: "rotate-180",
                },
            },
            base: "flex w-full items-center justify-between p-5 text-left font-medium transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg",
            flush: {
                off: "hover:bg-emerald-50 focus:ring-4 focus:ring-emerald-200 text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-emerald-800",
                on: "bg-transparent hover:text-emerald-600 focus:ring-0 text-gray-700 dark:text-gray-200",
            },
            heading: "",
            open: {
                off: "text-gray-700 dark:text-gray-200",
                on: "bg-emerald-50 text-emerald-700 dark:bg-gray-800 dark:text-emerald-400",
            },
        },
    };

    return (
        <>
            <section className="bg-emerald-300 dark:bg-gray-800">
                <div className="max-w-screen-lg px-4 py-8 mx-auto lg:py-16">
                    <div className="text-center">
                        <SectionHeader>
                            Preguntas Frecuentes
                        </SectionHeader>
                    </div>
                    <Accordion flush={false} theme={accordionTheme.root} collapseAll>
                        <AccordionPanel theme={accordionTheme.root}>
                            <AccordionTitle theme={accordionTheme.title}>¿Cuánto demora un proyecto en promedio?</AccordionTitle>
                            <AccordionContent theme={accordionTheme.content}>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    El tiempo depende del alcance del proyecto. En promedio, un proyecto pequeño toma de 1 a 3 semanas, mientras que uno más completo puede requerir entre 4 y 8 semanas. Antes de iniciar, te entrego un cronograma claro con todas las etapas.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel theme={accordionTheme.root}>
                            <AccordionTitle theme={accordionTheme.title}>¿Cuál es tu modelo de trabajo, precio fijo o por hora?</AccordionTitle>
                            <AccordionContent theme={accordionTheme.content}>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Trabajo con ambos modelos. Para proyectos bien definidos uso precio fijo. Para tareas continuas, soporte o mejoras puntuales utilizo tarifa por hora. Elegimos el modelo más conveniente según tu necesidad.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel theme={accordionTheme.root}>
                            <AccordionTitle theme={accordionTheme.title}>¿Qué pasa si necesito soporte?</AccordionTitle>
                            <AccordionContent theme={accordionTheme.content}>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Ofrezco planes de soporte continuo que incluyen resolución de incidencias, actualizaciones menores y asistencia personalizada. También puedo brindar soporte puntual cuando lo necesites.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel theme={accordionTheme.root}>
                            <AccordionTitle theme={accordionTheme.title}>¿Ofrecés hosting y despliegue incluido?</AccordionTitle>
                            <AccordionContent theme={accordionTheme.content}>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Sí. Puedo encargarme del hosting, configuración del servidor y despliegue del proyecto. Trabajo con proveedores como Azure, AWS o servicios económicos según tu presupuesto.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel theme={accordionTheme.root}>
                            <AccordionTitle theme={accordionTheme.title}>¿Cómo es el proceso de inicio del proyecto?</AccordionTitle>
                            <AccordionContent theme={accordionTheme.content}>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Primero realizo una reunión de entendimiento, luego preparo una propuesta con alcance, tiempos y costos. Una vez aprobada, comenzamos con el desarrollo siguiendo un flujo claro de trabajo.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel theme={accordionTheme.root}>
                            <AccordionTitle theme={accordionTheme.title}>¿Puedo solicitar cambios durante el desarrollo?</AccordionTitle>
                            <AccordionContent theme={accordionTheme.content}>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Sí, siempre que los cambios no modifiquen significativamente el alcance acordado. Para modificaciones mayores, ajustamos tiempos y presupuesto de forma transparente.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel theme={accordionTheme.root}>
                            <AccordionTitle theme={accordionTheme.title}>¿Entregas el código fuente y acceso completo?</AccordionTitle>
                            <AccordionContent theme={accordionTheme.content}>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Sí. Al finalizar el proyecto entrego el código fuente, documentación y acceso a los repositorios, así como las instrucciones necesarias para futuras actualizaciones.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel theme={accordionTheme.root}>
                            <AccordionTitle theme={accordionTheme.title}>¿Podés trabajar con mi equipo actual?</AccordionTitle>
                            <AccordionContent theme={accordionTheme.content}>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Claro. Me adapto fácilmente a equipos existentes, metodologías de trabajo y herramientas que ya utilicen.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel theme={accordionTheme.root}>
                            <AccordionTitle theme={accordionTheme.title}>¿Ofrecés contratos de mantenimiento mensual?</AccordionTitle>
                            <AccordionContent theme={accordionTheme.content}>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Sí. Los contratos incluyen monitoreo, actualizaciones, soporte y pequeñas mejoras para asegurar que tu sistema siempre funcione al 100%.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </div>
            </section>
        </>
    )
}