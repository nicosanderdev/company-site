import { Accordion, AccordionContent, AccordionPanel, accordionTheme, AccordionTitle } from "flowbite-react";
import { SectionHeader } from "../../components/SectionHeader";
import type { CustomFlowbiteTheme } from "flowbite-react/types";

export default function FaQ() {

  const accordionTheme : CustomFlowbiteTheme["accordion"] = {
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
            <Accordion flush={false} theme={accordionTheme.root}  collapseAll>
              <AccordionPanel theme={accordionTheme.root}>
                <AccordionTitle theme={accordionTheme.title}>¿Cuánto demora un proyecto promedio?</AccordionTitle>
                <AccordionContent theme={accordionTheme.content}>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                    dropdowns, modals, navbars, and more.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to&nbsp;
                    <a
                      href="https://flowbite.com/docs/getting-started/introduction/"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      get started&nbsp;
                    </a>
                    and start developing websites even faster with components on top of Tailwind CSS.
                  </p>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel theme={accordionTheme.root}>
                <AccordionTitle theme={accordionTheme.title}>¿Cuál es tu modelo de trabajo: precio fijo o por hora?</AccordionTitle>
                <AccordionContent theme={accordionTheme.content}>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                    has a design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out the
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Figma design system
                    </a>
                    based on the utility classes from Tailwind CSS and components from Flowbite.
                  </p>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel theme={accordionTheme.root}>
                <AccordionTitle theme={accordionTheme.title}>¿Qué pasa si necesito soporte luego de la entrega?</AccordionTitle>
                <AccordionContent theme={accordionTheme.content}>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                    components, whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                    technical reason stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                  <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                    <li>
                      <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel theme={accordionTheme.root}>
                <AccordionTitle theme={accordionTheme.title}>¿Ofrecés hosting o despliegue incluido?</AccordionTitle>
                <AccordionContent theme={accordionTheme.content}>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                    has a design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out the
                    <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Figma design system
                    </a>
                    based on the utility classes from Tailwind CSS and components from Flowbite.
                  </p>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
        </div>
      </section>
    </>
  )
}