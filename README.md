# North Architecture Website

- A modern, responsive website for an architecture firm built with Next.js and TypeScript. 
- This website showcases architectural projects, services, and provides a platform for potential clients to get in touch.

- Inspired by: https://www.framer.com/marketplace/templates/north-20/

## ✨ Features

- 📱 Fully responsive design for all devices
- 🎨 Modern, minimalist aesthetic with smooth animations
- 🖼️ Optimized image loading and gallery views
- 🎯 SEO optimized with metadata
- 📝 TypeScript for type safety
- 🚄 Fast page loads with Next.js and Turbopack
- 💅 Tailwind CSS for styling
- 📱 Mobile-first approach
- 🎨 Custom animations and transitions

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Font:** [Urbanist](https://fonts.google.com/specimen/Urbanist)
- **Package Manager:** [Bun](https://bun.sh/)
- **Deployment:** [Vercel](https://vercel.com)
- **Linting & Formatting:** 
  - [Biome](https://biomejs.dev/) for formatting and linting
  - [ESLint](https://eslint.org/) for additional linting
- **Icons:** [Lucide React](https://lucide.dev/)

## 📁 Project Structure

```
src/
├── app/                    # App router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
└── lib/                   # Utility functions and configurations
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Installation

1. Clone the repository:

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Development

- `bun dev` - Start development server with Turbopack
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run linting
- `bun format` - Format code

## 📦 Building for Production

```bash
bun build
```



## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Bun Documentation](https://bun.sh/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
