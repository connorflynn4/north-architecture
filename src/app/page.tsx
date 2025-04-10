'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BaseLayout } from '@/components/layout/BaseLayout'
import { useState } from 'react'

type ServiceType = 'residential' | 'commercial' | 'interior'

interface ServiceData {
  title: string
  description: string
  image: string
  details: string
}

const serviceData: Record<ServiceType, ServiceData> = {
  residential: {
    title: 'Residential Design',
    description: 'Creating beautiful, functional homes that reflect your lifestyle and personality.',
    image: '/peak-house.png',
    details: 'Our residential design service focuses on creating homes that are not just buildings, but spaces that enhance your quality of life. We work closely with you to understand your needs, preferences, and lifestyle to create a home that is uniquely yours.',
  },
  commercial: {
    title: 'Commercial Design',
    description: 'Innovative spaces that drive business success and enhance customer experience.',
    image: '/zen-haven.png',
    details: 'Our commercial design service helps businesses create spaces that are both functional and inspiring. We understand that your space needs to work for your business while also creating the right impression for your clients and employees.',
  },
  interior: {
    title: 'Interior Design',
    description: 'Transforming spaces from within to create environments that inspire and delight.',
    image: '/zen-haven-interior.png',
    details: 'Our interior design service focuses on creating spaces that are not just beautiful, but also functional and comfortable. We work with you to understand your needs and preferences to create interiors that reflect your style and enhance your daily life.',
  },
}

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="relative h-screen mt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1543221887/1732629851.jpeg"
            alt="Modern architecture"
            fill
            priority
            className="object-cover rounded-3xl"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent rounded-3xl"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="pl-6 md:pl-12">
            <div className="max-w-md p-8 rounded-lg text-white">
              <h1 className="text-4xl md:text-5xl mb-3 drop-shadow-sm">
                Redefining the Art of Architecture
              </h1>
              <p className="text-white/90 mb-8 drop-shadow-sm">
                Discover spaces where innovation meets nature.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="btn-primary">
                  Explore Projects
                </Link>
                <Link href="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20">
        <div className="container-custom">
          <p className="text-xl md:text-2xl max-w-3xl">
            North Architecture is a dynamic and innovative design firm based in the heart of the architectural world.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-50 p-8 rounded-md">
              <h3 className="text-3xl md:text-4xl mb-2">24+</h3>
              <p className="text-neutral-600">Years of Experience</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-md">
              <h3 className="text-3xl md:text-4xl mb-2">200+</h3>
              <p className="text-neutral-600">Completed Projects</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-md">
              <h3 className="text-3xl md:text-4xl mb-2">100%</h3>
              <p className="text-neutral-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-10">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <button
              onClick={() => setSelectedService('residential')}
              className={`group p-8 rounded-lg transition-all duration-300 ${
                selectedService === 'residential'
                  ? 'bg-black text-white'
                  : 'bg-white hover:bg-neutral-50'
              }`}
            >
              <h3 className="mb-1">Residential Design</h3>
              <p className={`text-sm ${
                selectedService === 'residential' ? 'text-white/70' : 'text-neutral-600'
              }`}>
                Creating beautiful, functional homes
              </p>
            </button>
            <button
              onClick={() => setSelectedService('commercial')}
              className={`group p-8 rounded-lg transition-all duration-300 ${
                selectedService === 'commercial'
                  ? 'bg-black text-white'
                  : 'bg-white hover:bg-neutral-50'
              }`}
            >
              <h3 className="mb-1">Commercial Design</h3>
              <p className={`text-sm ${
                selectedService === 'commercial' ? 'text-white/70' : 'text-neutral-600'
              }`}>
                Innovative spaces for business
              </p>
            </button>
            <button
              onClick={() => setSelectedService('interior')}
              className={`group p-8 rounded-lg transition-all duration-300 ${
                selectedService === 'interior'
                  ? 'bg-black text-white'
                  : 'bg-white hover:bg-neutral-50'
              }`}
            >
              <h3 className="mb-1">Interior Design</h3>
              <p className={`text-sm ${
                selectedService === 'interior' ? 'text-white/70' : 'text-neutral-600'
              }`}>
                Transforming spaces from within
              </p>
            </button>
          </div>

          {selectedService && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="mb-6">About {serviceData[selectedService].title}</h2>
                <p className="text-lg text-neutral-600">
                  {serviceData[selectedService].details}
                </p>
              </div>
              <div className="relative aspect-square">
                <Image
                  src={serviceData[selectedService].image}
                  alt={serviceData[selectedService].title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Link href="/projects/coast-villa" className="group">
              <div className="mb-4 relative aspect-square overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1543221887/981026846.jpeg"
                  alt="Coast Villa"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3>Coast Villa</h3>
            </Link>

            <Link href="/projects/peak-house" className="group">
              <div className="mb-4 relative aspect-square overflow-hidden rounded-md">
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
