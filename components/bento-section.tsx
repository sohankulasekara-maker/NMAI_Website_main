import AiCodeReviews from "./bento/ai-code-reviews"
import RealtimeCodingPreviews from "./bento/real-time-previews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration"
import EasyDeployment from "./bento/easy-deployment"
import ParallelCodingAgents from "./bento/parallel-agents"
import DataSilosIntegration from "./bento/data-silos-integration"
import CustomerServiceAI from "./bento/customer-service-ai"
import ConnectApps from "./bento/connect-apps"

const BentoCard = ({ title, description, Component }) => (
  <div
    className="
      relative flex flex-col overflow-hidden rounded-2xl border border-white/20
      bg-transparent
    "
  >
    {/* background layers */}
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

      {/* clamp text inside the card; scroll if it overflows */}
      {/* Ellipses if too long */}
      <p className="
      mt-2 text-muted-foreground text-md leading-relaxed
      line-clamp-4  
    ">
        {description}
      </p>
    </div>


    {/* MEDIA HOLDER */}
    <div className="relative z-10 mt-auto pb-4"> {/* <-- added bottom padding */}
      {/* fixed visual area so media never pushes past the card */}
      <div className="relative h-64 md:h-72">
        <div className="absolute inset-0 flex items-center justify-center p-3">
          <div className="w-full h-full max-w-full max-h-full">
            <Component className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* subtle divider between text and media */}
      <div className="absolute -top-px inset-x-0 h-px" />
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "Sales and Marketing Automation",
      description: "Streamline your sales processes and marketing campaigns with intelligent automation.",
      Component: AiCodeReviews,
    },
    {
      title: "Image, Voice, Text Recognition",
      description: "Advanced AI analysis for multimedia content and document processing.",
      Component: RealtimeCodingPreviews,
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with AI-powered insights.",
      Component: OneClickIntegrationsIllustration,
    },
    {
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants for enhanced customer engagement.",
      Component: MCPConnectivityIllustration,
    },
    {
      title: "Project Management",
      description: "AI-driven project optimization and resource allocation for maximum efficiency.",
      Component: ParallelCodingAgents,
    },
    {
      title: "Staff Augmentation",
      description: "Enhance your team capabilities with AI-powered talent and expertise.",
      Component: EasyDeployment,
    },
    {
      title: "Data Silos Integration",
      description: "Break down data barriers and create unified, accessible information systems.",
      Component: DataSilosIntegration,
    },
    {
      title: "Customer Service AI",
      description: "Transform customer support with intelligent automation and personalization.",
      Component: CustomerServiceAI,
    },
    {
      title: "Connect Apps",
      description: "Seamlessly integrate and automate workflows across your business applications.",
      Component: ConnectApps,
    },
  ]

  return (
    <section id="ai-services" className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              AI Services
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Comprehensive AI solutions designed to transform your business operations and drive sustainable growth through intelligent automation.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
