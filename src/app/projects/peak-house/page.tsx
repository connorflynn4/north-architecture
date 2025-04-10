import Image from 'next/image'
import { BaseLayout } from '@/components/layout/BaseLayout'

export default function PeakHousePage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] md:h-[70vh] w-full">
          <Image
            src="/peak-house.png"
            alt="Peak House"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white py-6 px-8 rounded-t-lg">
            <h1 className="text-3xl md:text-4xl">Peak House</h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Client</p>
              <p>Private Residence</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Location</p>
              <p>Northern Forest Region</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Project Type</p>
              <p>Residential Design</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Size</p>
              <p>280 m²</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="mb-6">
              The Peak House project is a testament to harmonious integration with nature.
              Set against a backdrop of towering pine trees, this contemporary residence
              combines clean architectural lines with warm wooden elements to create a
              tranquil retreat in the forest.
            </p>

            <p className="mb-6">
              The design features distinct volumes - a white stucco section housing dining and
              service areas, complemented by a wooden-clad main living space with expansive
              glass windows that connect the interior with the surrounding landscape. The
              thoughtful blending of materials creates a dialogue between the built environment
              and the natural setting.
            </p>

            <p className="mb-6">
              Indoor and outdoor living spaces flow seamlessly through floor-to-ceiling glass
              walls, with carefully placed outdoor furniture encouraging residents to enjoy
              the serene environment. The minimalist approach to the landscape design, with
              natural grass and strategically placed boulders, further emphasizes the project's
              commitment to environmental harmony.
            </p>
            
            <p>
              Peak House represents a philosophy of living that respects and celebrates its 
              natural context. The careful integration of stone pathways and indigenous plants
              creates a gentle transition between the architectural elements and the surrounding
              forest. This project stands as a model for sustainable mountain architecture that
              enhances rather than dominates its environment.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Project Image */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="relative aspect-video w-full">
            <Image
              src="/peak-house-interior.png"
              alt="Peak House Interior"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </BaseLayout>
  )
} 