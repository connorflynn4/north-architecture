import Link from 'next/link'
import Image from 'next/image'
import { BaseLayout } from '@/components/layout/BaseLayout'

export default function ProjectsPage() {
  return (
    <BaseLayout>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <h1 className="mb-16">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Link href="/projects/coast-villa" className="group">
              <div className="mb-4 relative aspect-square overflow-hidden">
                <Image
                  src="/coast-villa.png"
                  alt="Coast Villa"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3>Coast Villa</h3>
            </Link>

            <Link href="/projects/peak-house" className="group">
              <div className="mb-4 relative aspect-square overflow-hidden">
                <Image
                  src="/peak-house.png"
                  alt="Peak House"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3>Peak House</h3>
            </Link>

            <Link href="/projects/oasis-residence" className="group">
              <div className="mb-4 relative aspect-square overflow-hidden">
                <Image
                  src="/oasis-residence.png"
                  alt="Oasis Residence"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3>Oasis Residence</h3>
            </Link>

            <Link href="/projects/zen-haven" className="group">
              <div className="mb-4 relative aspect-square overflow-hidden">
                <Image
                  src="/zen-haven.png"
                  alt="Zen Haven"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3>Zen Haven</h3>
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}
