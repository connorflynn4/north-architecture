import { BaseLayout } from "@/components/layout/BaseLayout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <BaseLayout>
      {/* Company Description */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-8">North Architecture</h1>
              <div className="max-w-xl">
                <p className="mb-6">
                  Welcome to North Architecture, where dreams take shape and spaces
                  come alive. Our story is one of passion, innovation, and a
                  relentless pursuit of architectural excellence. With a legacy
                  spanning over two decades, we have crafted iconic structures that
                  redefine skylines and inspire awe.
                </p>
                <p>
                  From the inception of our firm, we have been driven by a singular
                  vision: to create spaces that not only fulfill functional
                  requirements but also ignite emotions. Our team of talented
                  architects, designers, and engineers collaborate seamlessly to
                  bring forth unique designs that push the boundaries of
                  imagination.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="https://ext.same-assets.com/1543221887/1732629851.jpeg"
                alt="Modern architectural design"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Values */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="mb-6">Things that matter for us</h2>
            </div>
            <div>
              <p className="text-neutral-600 text-lg">
                Environmental concepts in architecture refer to design and
                implementation strategies that focus on preserving natural
                resources, energy conservation, waste management, and creating
                healthy indoor environments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Forest Image */}
            <div className="md:col-span-2 relative aspect-[4/3] mb-4">
              <Image
                src="https://ext.same-assets.com/3129108905/1820583680.jpeg"
                alt="Forest environment"
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Green Building Design */}
            <div className="bg-white p-6 rounded-md">
              <div className="mb-2 text-xl">*</div>
              <h3 className="mb-2">Green Building Design</h3>
              <p className="text-sm text-neutral-600">
                Green building design aims to minimize environmental impacts
                by incorporating strategies such as energy efficiency, water
                conservation, natural lighting, and natural ventilation.
              </p>
            </div>

            {/* Energy Efficiency */}
            <div className="bg-white p-6 rounded-md">
              <div className="mb-2 text-xl">*</div>
              <h3 className="mb-2">Energy Efficiency</h3>
              <p className="text-sm text-neutral-600">
                Energy efficiency focuses on reducing energy consumption
                through design and systems. Well-insulated buildings,
                energy-efficient lighting, and HVAC (heating, ventilation, and
                air conditioning) systems contribute to energy savings.
              </p>
            </div>

            {/* Natural Lighting */}
            <div className="bg-white p-6 rounded-md">
              <div className="mb-2 text-xl">*</div>
              <h3 className="mb-2">Natural Lighting</h3>
              <p className="text-sm text-neutral-600">
                Natural lighting aims to maximize the use of daylight in
                interior spaces. Factors such as proper orientation, window
                size and placement are considered in building design. This
                reduces the need for artificial lighting and saves energy.
              </p>
            </div>

            {/* Sustainable Materials */}
            <div className="bg-white p-6 rounded-md">
              <div className="mb-2 text-xl">*</div>
              <h3 className="mb-2">Sustainable Materials</h3>
              <p className="text-sm text-neutral-600">
                Sustainable materials are selected to preserve natural
                resources, reduce environmental impacts, and have
                recyclability. Examples include recycled materials, natural
                wood, bamboo, and low VOC (volatile organic compound) paints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="mb-12">Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 p-8 rounded-md">
              <div className="aspect-square bg-gray-200 mb-6 rounded-md"></div>
              <h3 className="mb-1">Svenn Eiker</h3>
              <p className="text-sm text-neutral-600 mb-4">Architect</p>
              <a
                href="mailto:contact@example.com"
                className="text-sm hover:text-neutral-500 transition-colors"
              >
                contact@example.com
              </a>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 p-8 rounded-md">
              <div className="aspect-square bg-gray-200 mb-6 rounded-md"></div>
              <h3 className="mb-1">Amber Robinson</h3>
              <p className="text-sm text-neutral-600 mb-4">Architect</p>
              <a
                href="mailto:contact@example.com"
                className="text-sm hover:text-neutral-500 transition-colors"
              >
                contact@example.com
              </a>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-50 p-8 rounded-md">
              <div className="aspect-square bg-gray-200 mb-6 rounded-md"></div>
              <h3 className="mb-1">Christa Rees</h3>
              <p className="text-sm text-neutral-600 mb-4">
                Interior Architect
              </p>
              <a
                href="mailto:contact@example.com"
                className="text-sm hover:text-neutral-500 transition-colors"
              >
                contact@example.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
