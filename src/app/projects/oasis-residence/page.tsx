import Image from 'next/image'
import { BaseLayout } from '@/components/layout/BaseLayout'

export default function OasisResidencePage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] md:h-[70vh] w-full">
          <Image
            src="/oasis-residence.png"
            alt="Oasis Residence"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white py-6 px-8 rounded-t-lg">
            <h1 className="text-3xl md:text-4xl">Oasis Residence</h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Client</p>
              <p>Private Commission</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Location</p>
              <p>Deep Forest Region</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Project Type</p>
              <p>Residential Design</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-sm text-neutral-600 mb-1">Size</p>
              <p>240 m²</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="mb-6">
              The Oasis Residence is a minimalist linear retreat nestled within a dense pine forest.
              This contemporary structure exemplifies the perfect balance between architectural precision
              and natural integration, with its elongated form creating a striking silhouette against
              the vertical rhythm of the surrounding trees.
            </p>

            <p className="mb-6">
              The design features a harmonious contrast of materials, with concrete and wood cladding
              working in tandem to create visual interest. Floor-to-ceiling glass walls dominate the
              front façade, blurring the boundaries between interior and exterior spaces while
              allowing natural light to flood the living areas and providing unobstructed views
              of the serene forest environment.
            </p>

            <p className="mb-6">
              A thoughtfully designed stone pathway leads to the entrance, with large flat stones
              arranged in a natural yet purposeful pattern that guides visitors through the landscape.
              This pathway design reflects the project's overall philosophy of creating a meaningful
              journey through nature, culminating in the architectural sanctuary that serves as both
              a viewing platform for the forest and a comfortable living space.
            </p>
            
            <p>
              The Oasis Residence embodies the principle that architecture should frame and enhance
              nature rather than compete with it. Materials were selected not only for their aesthetic
              qualities but also for their environmental performance and longevity. The result is a
              home that will age gracefully within its forest setting, developing a patina that
              integrates it further into the landscape over time.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Project Images */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-square w-full">
              <Image
                src="/oasis-residence-interior.png"
                alt="Oasis Residence Interior"
                fill
                className="object-cover rounded-[2rem]"
              />
            </div>
            <div className="relative aspect-square w-full">
              <Image
                src="/oasis-residence-interior2.png"
                alt="Oasis Residence Interior"
                fill
                className="object-cover rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
} 