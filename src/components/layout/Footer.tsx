'use client'

import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://x.com', label: 'X', icon: 'X' },
  { href: 'https://instagram.com', label: 'Instagram', icon: 'IG' },
  { href: 'https://youtube.com', label: 'YouTube', icon: 'YT' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <LogoIcon className="w-8 h-8" />
          </Link>

          {/* Info section */}
          <div className="text-sm text-gray-600">
            <p className="mb-1">North Architecture {currentYear}</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-1 hover:text-gray-900 transition-colors"
            >
              3891 Ranchview Dr. Richardson, California 62639
            </a>
            <a
              href="tel:00000000"
              className="block mb-1 hover:text-gray-900 transition-colors"
            >
              000-000-0012
            </a>
            <a
              href="mailto:north@architecture.com"
              className="block hover:text-gray-900 transition-colors"
            >
              north@architecture.com
            </a>
          </div>

          {/* Social + Nav links */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
            <div className="flex space-x-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-6 h-6 flex items-center justify-center hover:text-gray-500 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <nav className="flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-gray-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Logo component
function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.5001 8.50001L22 16L14.5001 23.5L7.00001 16L14.5001 8.50001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.50006 0.500012L17 8.00001L9.50006 15.5L2.00006 8.00001L9.50006 0.500012Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
