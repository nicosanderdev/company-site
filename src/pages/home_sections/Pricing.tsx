import { SectionHeader } from "../../components/SectionHeader";
import { SectionSubtitle } from "../../components/SectionSubtitle";
import { PricingCard } from "../../components/PricingCard";

export default function Pricing() {
    const pricingPlans = [
        {
          title: "Starter Web App",
          description: "Aplicación web ligera con React y Supabase, ideal para proyectos rápidos con panel admin básico.",
          backendFeatures: [
            "Base de datos y autenticación gestionadas con Supabase.",
            "API CRUD generada automáticamente mediante Supabase.",
            "Reglas de seguridad configuradas para tablas y endpoints.",
            "Email de verificación y recuperación de contraseña integrados.",
            "Funciones (Edge Functions) opcionales para lógica personalizada.",
            "Gestión de almacenamiento (storage) para archivos simples."
          ],
          frontendFeatures: [
            "Aplicación web en React con estructura optimizada por componentes.",
            "Dashboard de administración básico (usuarios, roles, contenidos).",
            "Autenticación integrada con Supabase (login/registro).",
            "Componentes base (Inputs, Tables, Modals, Alerts).",
            "Navegación con rutas públicas y protegidas.",
            "Diseño responsivo con Tailwind CSS."
          ],
          buttonText: "Contactar",
        },
      
        {
          title: "Proceso Automático / Backend Pro",
          description: "API en ASP.NET Core con carga de plantillas, procesos recurrentes y automatización empresarial.",
          backendFeatures: [
            "API REST en ASP.NET Core con arquitectura estructurada.",
            "Carga y procesamiento de plantillas (Excel, CSV o JSON).",
            "Procesos automáticos programados (cron jobs) para tareas recurrentes.",
            "Integración con servicios externos (emails, bots, CRMs).",
            "Logging avanzado y métricas de rendimiento.",
            "Base de datos con Entity Framework y migraciones automatizadas.",
            "Gestión de colas para tareas pesadas opcionales (ej. Hangfire)."
          ],
          frontendFeatures: [
            "Panel administrativo para gestionar plantillas y procesos.",
            "Visualización de logs, estados y ejecuciones de tareas.",
            "Formularios avanzados con validaciones.",
            "Notificaciones de estado en tiempo real (cuando aplique).",
            "Diseño moderno con Tailwind o componente UI elegido."
          ],
          buttonText: "Contactar",
        },
      
        {
          title: "Plataforma Escalable",
          description: "Sistema completo y escalable con ASP.NET + React, arquitectura empresarial y servicios avanzados.",
          backendFeatures: [
            "Arquitectura Limpia (Clean Architecture) para máxima escalabilidad.",
            "ASP.NET API modular con separación de dominios.",
            "Autenticación avanzada (JWT, OAuth, Social Login).",
            "Autorización RBAC por roles y permisos.",
            "Servicios distribuidos o microservicios (opcional).",
            "Event Bus, colas y procesos asincrónicos.",
            "Multi-tenant opcional para múltiples clientes o empresas.",
            "Monitoreo, telemetría y trazabilidad en toda la plataforma."
          ],
          frontendFeatures: [
            "Aplicación completa en React con dashboards, módulos y flujos complejos.",
            "Manejo avanzado de estado (React Query o Redux).",
            "Biblioteca de componentes personalizados reutilizables.",
            "Soporte para branding personalizado (white label).",
            "Panel admin avanzado con roles, permisos y auditoría.",
            "Integración con servicios externos (pasarelas de pago, mapas, emails)."
          ],
          buttonText: "Contactar",
        }
      ];
      
  const pricingPlans2 = [
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
    <section id="pricing">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <SectionHeader>Diferentes planes para diferentes necesidades</SectionHeader>
          <SectionSubtitle>Ofrecemos una variedad de soluciones que se ajustan a las necesidades de tu negocio.</SectionSubtitle>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingPlans.map((plan, index) => {
            const card = (
              <PricingCard
                key={plan.title}
                title={plan.title}
                description={plan.description}
                // price={plan.price}
                // priceSuffix={plan.priceSuffix}
                backendFeatures={plan.backendFeatures}
                frontendFeatures={plan.frontendFeatures}
                buttonText={plan.buttonText}
              />
            );

            // Apply emerald bubble background to the second card (index 1)
            if (index === 1) {

              return (
                <div key={plan.title} className="relative overflow-hidden rounded-lg shadow-lg">
                  {/* Background bubbles */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 -left-16 w-60 h-60 bg-emerald-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
                    <div className="absolute -bottom-10 right-1/3 w-40 h-40 bg-emerald-600/25 rounded-full blur-xl animate-pulse delay-500"></div>
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-300/10 rounded-full blur-lg animate-pulse delay-700"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-emerald-400/20 rounded-full blur-md animate-pulse delay-300"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full">
                    <PricingCard
                      key={plan.title}
                      title={plan.title}
                      description={plan.description}
                      //price={plan.price}
                      //priceSuffix={plan.priceSuffix}
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
  );
}