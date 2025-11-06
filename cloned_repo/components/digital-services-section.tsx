import WebDevelopment from "./bento/web-development"
import MobileAppDevelopment from "./bento/mobile-app-development"
import UIUXDesign from "./bento/uiux"
import EcommerceSolutions from "./bento/e-commerce-solutions"
import CloudSolutions from "./bento/cloud-solutions"

interface ServiceCardProps {
  title: string
  description: string
  Component: React.ComponentType<{ className?: string }>
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Component }) => (
  <div
    className="
      relative flex flex-col overflow-hidden rounded-2xl border border-white/20
      bg-transparent
    "
  >
    {/* Background layers */}
    <div
      className="absolute inset-0 rounded-2xl pointer-events-none"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />

    {/* TEXT HOLDER */}
    <div className="relative z-10 p-6">
      <h3 className="text-foreground text-lg font-semibold leading-7">
        {title}
      </h3>

      {/* Ellipses if too long */}
      <p className="
      mt-2 text-muted-foreground text-md leading-relaxed
      line-clamp-4  
    ">
        {description}
      </p>
    </div>

    {/* MEDIA HOLDER */}
    <div className="relative z-10 mt-auto pb-4">
      {/* fixed visual area so media aligns across cards */}
      <div className="relative h-64 md:h-72">
        <div className="absolute inset-0 flex items-center justify-center p-3">
          {/* wrapper constrains size even if Component ignores className */}
          <div className="w-full h-full max-w-full max-h-full">
            <Component className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* subtle divider above media */}
      <div className="absolute -top-px inset-x-0 h-px" />
    </div>
  </div>
)

export function DigitalServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies.",
      Component: WebDevelopment,
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      Component: MobileAppDevelopment,
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration.",
      Component: EcommerceSolutions,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      Component: CloudSolutions,
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that enhances customer experience.",
      Component: UIUXDesign,
    },
  ]

  return (
    <section id="digital-services" className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] right-[80px] origin-top-right rotate-[33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Design Services
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Complete design transformation services to establish your online presence and accelerate business growth in the digital landscape.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
