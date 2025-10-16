# 🚀 Modern Portfolio Website

A professional, high-performance portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.5.5-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- ⚡ **Lightning Fast** - Built with Next.js 15 and optimized for performance
- 🎨 **Beautiful UI** - Modern design with smooth animations using Framer Motion
- 🌓 **Dark Mode** - Seamless theme switching with next-themes
- 📱 **Fully Responsive** - Works perfectly on all devices
- ♿ **Accessible** - WCAG 2.1 compliant
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt, and structured data
- 🚀 **Performance Optimized** - Code splitting, lazy loading, and image optimization
- 💅 **Tailwind CSS** - Utility-first CSS framework for rapid development
- 📧 **Contact Form** - Integrated contact form with validation
- 🎯 **Type Safe** - Full TypeScript support

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Font**: [Geist](https://vercel.com/font) & [Inter](https://fonts.google.com/specimen/Inter)

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

The easiest way to deploy is using [Vercel](https://vercel.com):
1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live!

## 📁 Project Structure

```
brian-website/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── layout.tsx  # Root layout with metadata
│   │   ├── page.tsx    # Home page
│   │   ├── globals.css # Global styles
│   │   ├── sitemap.ts  # Dynamic sitemap
│   │   └── robots.ts   # Robots.txt configuration
│   └── components/     # React components
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── ThemeToggle.tsx
│       └── ThemeProvider.tsx
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.tsx`
   - Update name, title, and description
   - Modify social media links

2. **About Section**: Edit `src/components/About.tsx`
   - Add your bio and experience
   - Update statistics

3. **Skills Section**: Edit `src/components/Skills.tsx`
   - Add/remove technologies
   - Customize skill categories

4. **Projects Section**: Edit `src/components/Projects.tsx`
   - Add your projects with descriptions
   - Include GitHub and live demo links

5. **Contact Section**: Edit `src/components/Contact.tsx`
   - Update email, phone, and location
   - Customize social media links

### Update Metadata & SEO

Edit `src/app/layout.tsx` to update:
- Site title and description
- Open Graph tags
- Twitter card metadata
- Keywords and author information

### Change Theme Colors

Edit `src/app/globals.css` and Tailwind configuration:
- Update CSS variables for light/dark themes
- Modify gradient colors throughout components

## 🔧 Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Font optimization with next/font
- ✅ Automatic static optimization
- ✅ Compression enabled
- ✅ Optimized bundle size
- ✅ Turbopack for faster builds

## 📊 SEO Features

- ✅ Comprehensive metadata configuration
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Semantic HTML
- ✅ Mobile-friendly design

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Brian**
- Portfolio: [ogero.dev](https://ogero.dev)
- GitHub: [@Ogero79](https://github.com/Ogero79)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- All open-source contributors

---

⭐ Star this repo if you find it helpful!
