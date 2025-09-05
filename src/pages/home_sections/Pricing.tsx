import { SectionHeader } from "../../components/SectionHeader";
import { SectionSubtitle } from "../../components/SectionSubtitle";
import { PricingCard } from "../../components/PricingCard";

export default function Pricing() {
  
  const pricingPlans = [
    {
      title: "Inicial",
      description: "Best option for personal use & for your next project.",
      price: 29,
      priceSuffix: "/month",
      backendFeatures: [
        "Arquitectura modular estándar.",
        "Autenticación con Email/Contraseña.",
        "Controladores RESTful estándar.",
        "Configuración de ORM (Prisma o similar).",
        "Sistema de Migraciones y Seeding.",
        "Envío de emails transaccionales básicos (un proveedor, plantillas simples).",
        "Configuración con variables de entorno (.env)."
      ],
      frontendFeatures: [
        "Estructura de proyecto con Vite y TypeScript.",
        "Librería de UI (Tailwind CSS).",
        "Componentes de UI básicos (Button, Input, Modal).",
        "Páginas: Login, Registro, Perfil simple.",
        "Manejo de estado global simple (Zustand).",
        "Sistema de rutas protegidas.",
        "Instancia de Axios configurada."
      ],
      buttonText: "Saber más",
    },
    {
      title: "Empresa",
      description: "Relevant for multiple users, extended & premium support.",
      price: 99,
      priceSuffix: "/month",
      backendFeatures: [
        "Arquitectura Limpia (Clean Architecture).",
        "Autenticación social (Google y Microsoft).",
        "Flujos de 'Olvidé mi contraseña' y 'Verificación de email'.",
        "API con Paginación, Ordenamiento y Filtrado.",
        "Respuestas de API estandarizadas.",
        "Dockerización completa del entorno (Docker Compose).",
        "Sistema de colas (Queue) para tareas en segundo plano (ej. envío de emails).",
        "Configuración de Testing (Jest).",
        "Generación de documentación de API (Swagger/OpenAPI)."
      ],
      frontendFeatures: [
        "Manejo de estado de servidor (React Query).",
        "Componentes avanzados (DataTable con paginación, FileUpload).",
        "Sistema de notificaciones (Toasts/Snackbars).",
        "Formularios avanzados con validación (React Hook Form).",
        "Soporte para Modo Claro / Modo Oscuro.",
        "Configuración de Linting y Formatting (ESLint + Prettier).",
        "Configuración base para CI/CD (GitHub Actions)."
      ],
      buttonText: "Saber más",
    },
    {
      title: "Sistema",
      description: "Best for large scale uses and extended redistribution rights.",
      price: 499,
      priceSuffix: "/month",
      backendFeatures: [
        "Sistema de Autorización por Roles y Permisos (RBAC).",
        "Autenticación de Dos Factores (2FA/MFA).",
        "Soporte completo para White Label (marca blanca configurable por API).",
        "Abstracción de servicios (ej. cambiar de proveedor de email fácilmente).",
        "Logging estructurado y avanzado.",
        "(Opcional, como add-on) Arquitectura Multi-tenant."
      ],
      frontendFeatures: [
        "Sistema de Theming avanzado para White Label.",
        "Storybook para desarrollo y documentación de componentes.",
        "Tests de componentes más completos (React Testing Library).",
        "Layouts avanzados (ej. Dashboard de Admin pre-construido).",
        "Editor de texto enriquecido (Rich Text Editor)."
      ],
      buttonText: "Saber más",
    }
  ];

  return (
    <>
      <section className="bg-transparent">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <SectionHeader>Diseñado para equipos como el tuyo</SectionHeader>
            <SectionSubtitle>Acá ofrecemos una variedad de soluciones que se ajustan a las necesidades de tu negocio.</SectionSubtitle>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {pricingPlans.map((plan, index) => {
              const card = (
                <PricingCard
                  key={plan.title}
                  title={plan.title}
                  description={plan.description}
                  price={plan.price}
                  priceSuffix={plan.priceSuffix}
                  backendFeatures={plan.backendFeatures}
                  frontendFeatures={plan.frontendFeatures}
                  buttonText={plan.buttonText}
                />
              );

              // Apply emerald bubble background to the second card (index 1)
              if (index === 1) {
                
                return (
                  <div key={plan.title} className="relative overflow-hidden">
                    {/* Background bubbles */}
                    <div className="absolute inset-0 -z-10">
                      {/* Large bubble */}
                      <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
                      
                      {/* Medium bubble */}
                      <div className="absolute top-1/2 -left-16 w-60 h-60 bg-emerald-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
                      
                      {/* Small bubble */}
                      <div className="absolute -bottom-10 right-1/3 w-40 h-40 bg-emerald-600/25 rounded-full blur-xl animate-pulse delay-500"></div>
                      
                      {/* Additional accent bubbles */}
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-300/10 rounded-full blur-lg animate-pulse delay-700"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-emerald-400/20 rounded-full blur-md animate-pulse delay-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full">
                      <PricingCard
                        key={plan.title}
                        title={plan.title}
                        description={plan.description}
                        price={plan.price}
                        priceSuffix={plan.priceSuffix}
                        backendFeatures={plan.backendFeatures}
                        frontendFeatures={plan.frontendFeatures}
                        buttonText={plan.buttonText}
                        className="bg-gray-50/40 dark:bg-transparent h-full"
                      />
                    </div>
                  </div>
                );
              }

              return card;
            })}
          </div>
        </div>
      </section>
    </>
  );
}