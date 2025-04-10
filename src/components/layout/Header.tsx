'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <LogoIcon className="w-8 h-8" />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-neutral-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 p-5 bg-white shadow-md">
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm hover:text-neutral-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// Logo component (matching the North logo design)
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
