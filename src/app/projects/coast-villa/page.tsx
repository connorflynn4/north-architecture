import Image from 'next/image'
import { BaseLayout } from '@/components/layout/BaseLayout'

export default function CoastVillaPage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] md:h-[70vh] w-full">
          <Image
            src="/coast-villa.png"
            alt="Coast Villa"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white py-6 px-8 rounded-t-lg">
            <h1 className="text-3xl md:text-4xl">Coast Villa</h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Client</p>
              <p>Jim Offerdahl</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Location</p>
              <p>Henningsvaer</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Project Type</p>
              <p>Residential Design</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Size</p>
              <p>450 Square Feet</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="mb-6">
              The Coast Villa project exemplifies the perfect fusion of modern luxury and natural beauty.
              Situated in a prime location that captures breathtaking ocean views, this villa is designed
              for those who seek both tranquility and sophistication. With a harmonious blend of minimalist
              architecture and sustainable design, Coast Villa offers an unparalleled living experience that
              emphasizes light, space, and nature.
            </p>

            <p className="mb-6">
              Every detail of Coast Villa has been meticulously crafted to create an atmosphere of refined elegance.
              The villa features floor-to-ceiling glass walls, inviting natural light to fill each room while
              seamlessly connecting indoor and outdoor spaces. The open-plan layout is thoughtfully arranged to
              enhance the flow of movement, providing an airy, free-flowing ambiance ideal for relaxation and
              social gatherings alike. Expansive terraces and outdoor living areas encourage residents to immerse
              themselves in the surrounding landscape, whether it's taking in the sunrise over the ocean or
              unwinding under a starlit sky.
            </p>

            <p className="mb-6">
              Interior spaces are designed with a modern aesthetic, balancing comfort and style. High-quality
              materials, including sustainable woods and eco-friendly finishes, are used throughout the villa,
              reinforcing its connection to nature and commitment to sustainability. The furnishings and décor
              follow a sophisticated, understated palette, creating a timeless elegance that complements the
              natural scenery.
            </p>

            <p>
              Coast Villa is more than a residence; it's a sanctuary where one can experience the beauty of
              coastal living combined with the conveniences of modern design. Here, luxury and nature coexist
              in perfect harmony, making Coast Villa a true retreat for those who value privacy, beauty, and
              sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Project Image */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="relative aspect-video w-full">
            <Image
              src="https://ext.same-assets.com/430477690/154057675.jpeg"
              alt="Coast Villa Interior"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}
