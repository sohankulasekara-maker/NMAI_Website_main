import Image from "next/image"

export default function DigitalMarketingIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-b-2xl">
      <Image
        src="/images/new-product-ui.jpeg"
        alt="Digital Marketing Illustration"
        layout="fill"
        objectFit="cover"
        className="rounded-b-2xl"
      />
    </div>
  )
}
