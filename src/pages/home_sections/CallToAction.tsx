import { SectionSubtitle } from "../../components/SectionSubtitle";
import { SectionHeader } from "../../components/SectionHeader";

export default function CallToAction() {
  return (
    <>
      <section className=" bg-transparent ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <SectionHeader>
              ¿Tenés una idea?
            </SectionHeader>
            <SectionSubtitle>
              Escribime y la revisamos sin compromiso. Trabajo con contratos claros y entregas verificables, para que tengas seguridad en cada etapa.
            </SectionSubtitle>
          </div>
        </div>
      </section>
    </>
  )
}