# 🎵 SpeakersHub Pro

A modern, responsive e-commerce platform for premium audio equipment, built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **🛒 E-commerce Functionality**: Browse and shop premium speakers and audio equipment
- **🌙 Dark Mode**: Seamless light/dark theme switching with system preference detection
- **📱 Responsive Design**: Optimized for all devices and screen sizes
- **🔍 Product Filtering**: Filter products by category (Wireless, Soundbars, Home Theater, Compact)
- **⭐ Rating System**: Product ratings and reviews display
- **🖼️ Fullscreen Preview**: High-quality product image viewing with zoom and navigation
- **🎬 Video Hero Section**: Immersive video background with smooth scroll navigation
- **🎨 Modern UI**: Beautiful glassmorphism effects and smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.18
- **Routing**: React Router DOM 7.10.1
- **State Management**: Zustand 5.0.9
- **Icons**: Lucide React 0.561.0
- **UI Components**: Custom components with Class Variance Authority
- **Deployment**: Netlify ready configuration

## 📦 Project Structure

```
speakers-hub-pro/
├── public/
│   ├── img/                 # Product images (20 files)
│   │   ├── wireless*.avif    # Wireless speaker images
│   │   ├── soundbar*.avif    # Soundbar images
│   │   ├── home*.avif        # Home theater images
│   │   ├── compact*.avif     # Compact speaker images
│   │   ├── logo.png          # Company logo
│   │   └── logo.ico          # Favicon
│   └── vid/
│       └── speaker.mp4       # Hero background video (10.7MB)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Categories.tsx   # Category filter with images and descriptions
│   │   ├── Features.tsx     # Feature showcase (Premium Quality, Audio Expertise, Fast Delivery)
│   │   ├── Footer.tsx       # Comprehensive footer with social links and company info
│   │   ├── FullscreenModal.tsx # Image viewer with zoom, navigation, keyboard controls
│   │   ├── Hero.tsx         # Video hero section with smooth scroll
│   │   ├── Navbar.tsx       # Navigation with theme toggle and cart badge
│   │   └── ProductCard.tsx  # Product display with add to cart animation
│   ├── context/             # React contexts
│   │   └── ThemeContext.tsx # Theme management with localStorage persistence
│   ├── data/                # Static data
│   │   └── product.ts       # 17 products across 4 categories with pricing in RON
│   ├── pages/               # Page components
│   │   └── HomePage.tsx     # Main landing page with all sections
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Product and Category interfaces
│   ├── App.tsx              # Root application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
├── projects.ts              # Portfolio project data (external reference)
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── netlify.toml             # Netlify deployment settings
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/speakers-hub-pro.git
cd speakers-hub-pro
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Core Functionality

### Product Catalog

- Browse 17 premium audio products across 4 categories
- Filter products by category (Wireless Speakers, Soundbars, Home Theater, Compact)
- View product details including price (RON), rating, brand, and description
- Responsive grid layout with hover effects and glassmorphism design

### Shopping Experience

- Add to cart functionality with visual feedback animation
- Product image fullscreen preview with zoom and keyboard navigation
- Price formatting in Romanian Leu (RON)
- Star rating display for each product
- Mock cart badge in navigation (currently shows count of 3)

### Immersive Hero Section

- Full-screen video background with autoplay and loop
- Smooth scroll navigation to categories section
- Responsive text overlay with call-to-action
- Optimized video performance with muted playback

### Theme System

- Automatic dark/light mode detection based on system preferences
- Manual theme toggle in navigation with smooth transitions
- Persistent theme preference using localStorage
- Component-level theme awareness throughout the app

### Category Navigation

- Visual category cards with product images
- Category descriptions (Portable & Bluetooth, TV Audio Systems, etc.)
- Active category highlighting
- Smooth filtering animations

## 🎨 Design Features

- **Glassmorphism Effects**: Modern frosted glass appearance on cards and modals
- **Smooth Animations**: Hover states, micro-interactions, and page transitions
- **Gradient Accents**: Beautiful color gradients for pricing and CTAs
- **Responsive Grid**: Adaptive layout for all screen sizes (mobile to desktop)
- **Modern Typography**: Clean, readable font hierarchy
- **Video Background**: Immersive hero section with optimized performance
- **Interactive Modals**: Fullscreen image viewer with zoom and navigation controls

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## 🚀 Deployment

The project is configured for Netlify deployment:

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Shopping cart with checkout process
- [ ] Product search functionality
- [ ] User reviews and ratings
- [ ] Admin panel for product management
- [ ] Payment integration
- [ ] Order tracking
- [ ] Multi-language support
- [ ] Advanced filtering and sorting
- [ ] Product comparison tool

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
