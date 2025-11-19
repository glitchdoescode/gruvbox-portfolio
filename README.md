# Gruvbox Portfolio - Deepak Kumar Soni

A terminal-inspired portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, featuring the iconic Gruvbox color scheme.

## Features

- 🎨 **Gruvbox Theme**: Dark, vintage terminal aesthetic with orange accents
- ⚡ **Next.js 15**: Latest React framework with App Router
- 💎 **TypeScript**: Type-safe development
- 🎯 **Tailwind CSS**: Utility-first CSS with custom Gruvbox colors
- 📱 **Responsive**: Mobile-first design
- 🚀 **Optimized**: Static export ready for deployment

## Sections

1. **Hero** - Terminal-style introduction with profile image
2. **About** - Quick stats and achievements
3. **Experience** - Work history and expertise cards
4. **Skills** - Technical skills organized by category
5. **Projects** - Featured work with live demos
6. **Contact** - Get in touch form and social links

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

This portfolio is configured for static export and can be deployed to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

```bash
npm run build
# Output will be in the /out directory
```

## Customization

### Colors
Edit `tailwind.config.ts` to modify the Gruvbox color palette.

### Content
Update the content in each component file:
- `components/Hero.tsx` - Name, title, intro
- `components/About.tsx` - About me, achievements
- `components/Experience.tsx` - Work history
- `components/Skills.tsx` - Technical skills
- `components/Projects.tsx` - Portfolio projects
- `components/Contact.tsx` - Contact information

### Profile Image
Replace the placeholder in `Hero.tsx` with your actual profile image.

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## License

MIT

---

**Built with ❤️ using Gruvbox color scheme**
