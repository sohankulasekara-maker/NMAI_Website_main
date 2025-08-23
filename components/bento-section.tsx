import AiCodeReviews from "./bento/ai-code-reviews"
import RealtimeCodingPreviews from "./bento/real-time-previews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration"
import EasyDeployment from "./bento/easy-deployment"
import ParallelCodingAgents from "./bento/parallel-agents"

const BentoCard = ({ title, description, Component }) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-normal leading-7">
          {title} <br />
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </div>
    <div className="self-stretch h-72 relative -mt-0.5 z-10">
      <Component />
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
      Component: AiCodeReviews,
    },
    {
      title: "Customer Service AI",
      description: "Transform customer support with intelligent automation and personalization.",
      Component: RealtimeCodingPreviews,
    },
    {
      title: "Connect Apps",
      description: "Seamlessly integrate and automate workflows across your business applications.",
      Component: OneClickIntegrationsIllustration,
    },
  ]

  return (
    <section id="ai-services" className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Our AI Services
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
