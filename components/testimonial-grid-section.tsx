import { User } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Working with them completely transformed how we operate. The AI automation they built saved us so much time and the results are incredibly accurate. Honestly couldn't be happier!",
    name: "Kasun",
    type: "large-purple",
  },
  {
    quote:
      "Their team really knows their stuff when it comes to machine learning. Now we can actually predict what our customers want. Total game changer for us!",
    name: "Pradeep",
    type: "small-dark",
  },
  {
    quote:
      "The chatbot they created has been amazing. Our customers are happier and we're spending way less on support. Win-win situation.",
    name: "Nimali Silva",
    type: "small-dark",
  },
  {
    quote:
      "NeuroMonky helped us get our inventory under control with predictive analytics. We're wasting so much less now and the ROI has been incredible.",
    name: "Chamari Jayasinghe",
    type: "small-dark",
  },
  {
    quote:
      "They built us a new platform and our sales just took off. Best investment we've made in years. The team was great to work with too.",
    name: "Kleesha",
    type: "small-dark",
  },
  {
    quote:
      "Professional, innovative, and they actually deliver what they promise. These guys exceeded every expectation we had.",
    name: "James Miller",
    type: "small-dark",
  },
  {
    quote:
      "From start to finish, NeuroMonky.Ai was incredible. Their AI solutions completely revolutionized our manufacturing process and made everything run so much smoother.",
    name: "Amanda Foster",
    type: "large-purple",
  },
]

const TestimonialCard = ({ quote, name, type }) => {
  const isLargeCard = type.startsWith("large")
  const avatarSize = 40
  const padding = isLargeCard ? "p-6" : "p-[30px]"

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] relative ${padding}`
  let quoteClasses = ""
  let nameClasses = ""
  let cardHeight = ""
  const cardWidth = "w-full md:w-[384px]"

  if (type === "large-purple") {
    cardClasses += " bg-purple-900"
    quoteClasses += " text-white text-2xl font-medium leading-8"
    nameClasses += " text-white text-base font-normal leading-6"
    cardHeight = "h-[502px]"
  } else {
    cardClasses += " bg-gray-900/50 backdrop-blur-sm border border-gray-800"
    quoteClasses += " text-gray-200 text-[17px] font-normal leading-6"
    nameClasses += " text-gray-200 text-sm font-normal leading-[22px]"
    cardHeight = "h-[244px]"
  }

  return (
    <div className={`${cardClasses} ${cardWidth} ${cardHeight}`}>
      <div className={`relative z-10 font-normal break-words ${quoteClasses}`}>{quote}</div>
      <div className="relative z-10 flex justify-start items-center gap-3">
        <div
          className="rounded-full bg-white flex items-center justify-center"
          style={{ width: avatarSize, height: avatarSize }}
        >
          <User className="w-5 h-5 text-gray-800" />
        </div>
        <div className="flex flex-col justify-start items-start gap-0.5">
          <div className={nameClasses}>{name}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialGridSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
            What Our Clients Say
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
            {"Discover how businesses across industries have transformed their operations"} <br />{" "}
            {"and achieved remarkable results with NeuroMonky.Ai's AI solutions"}
          </p>
        </div>
      </div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[5]} />
          <TestimonialCard {...testimonials[6]} />
        </div>
      </div>
    </section>
  )
}
