import { BaseLayout } from "@/components/layout/BaseLayout";
import Image from "next/image";

export default function ContactPage() {
  return (
    <BaseLayout>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <h1 className="mb-16">Contact</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* Contact Information */}
              <div className="mb-12">
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-4 hover:text-neutral-500 transition-colors"
                >
                  3891 Ranchview Dr. Richardson, California 62639
                </a>
                <a
                  href="tel:0000000012"
                  className="block mb-4 hover:text-neutral-500 transition-colors"
                >
                  000-000-0012
                </a>
                <a
                  href="mailto:north@architecture.com"
                  className="block hover:text-neutral-500 transition-colors"
                >
                  north@architecture.com
                </a>
              </div>

              {/* Contact Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-4 bg-gray-50 border-0 rounded-md"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-4 bg-gray-50 border-0 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full p-4 bg-gray-50 border-0 rounded-md resize-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-black text-white rounded-md hover:bg-neutral-800 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Image */}
            <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden rounded-md">
              <Image
                src="https://ext.same-assets.com/1959021982/995162454.jpeg"
                alt="Modern interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
