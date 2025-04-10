import Image from 'next/image'
import { BaseLayout } from '@/components/layout/BaseLayout'

export default function ZenHavenPage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] md:h-[70vh] w-full">
          <Image
            src="/zen-haven.png"
            alt="Zen Haven"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white py-6 px-8 rounded-t-lg">
            <h1 className="text-3xl md:text-4xl">Zen Haven</h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Client</p>
              <p>Wellness Retreat</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Location</p>
              <p>Coastal Mountains</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Project Type</p>
              <p>Hospitality Design</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Size</p>
              <p>320 m²</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="mb-6">
              Zen Haven is a meditative retreat designed to create a profound sense of calm and connection 
              with nature. The architecture draws inspiration from traditional Japanese minimalism while 
              incorporating contemporary sustainable building practices. Built on a dramatic coastal 
              mountainside site, the structure carefully balances on the terrain to minimize site disruption 
              and maximize views of the surrounding landscape.
            </p>

            <p className="mb-6">
              The building's form is characterized by clean, horizontal lines that echo the layered 
              mountain ranges visible from the site. A series of pavilions connected by covered walkways 
              creates a journey through the space that encourages mindfulness and appreciation of the 
              changing natural conditions throughout the day. The careful choreography of light, shadow, 
              and views forms the central design concept, creating spaces that feel both protective and 
              expansive.
            </p>

            <p className="mb-6">
              Materials were selected for their tactile qualities and ability to age gracefully. Exposed 
              concrete provides thermal mass and grounds the building, while charred cedar cladding offers 
              natural weather protection and visual depth. Large glass panels create a seamless connection 
              with the exterior while carefully positioned skylights bring diffused natural light into the 
              innermost spaces, eliminating the need for artificial lighting during daylight hours.
            </p>
            
            <p>
              Sustainability was integrated throughout the design process, with passive heating and cooling 
              strategies, rainwater harvesting, and solar energy generation supporting off-grid operation. 
              The landscape design incorporates native plantings and a series of meditation gardens that 
              require minimal maintenance while enhancing biodiversity. Zen Haven demonstrates how thoughtful 
              architecture can create spaces for reflection and renewal that work in harmony with their 
              natural setting.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Project Image */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="relative aspect-video w-full">
            <Image
              src="/zen-haven-interior.png"
              alt="Zen Haven Interior"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </BaseLayout>
  )
} 