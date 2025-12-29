1.
npm create vite@latest speakershub -- --template react-ts

npm install

npm install react-router-dom
npm install @types/react-router-dom -D
npm install lucide-react  # pentru iconițe
npm install class-variance-authority clsx tailwind-merge  # pentru utilități CSS
npm install zustand  # pentru state management (simplu și eficient)

tailwind --

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install -D tailwindcss postcss autoprefixer

structura 

speakershub/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation with dark mode
│   │   ├── Hero.tsx             # Hero section
│   │   ├── Features.tsx         # Trust features
│   │   ├── Categories.tsx       # Product categories
│   │   └── ProductCard.tsx      # Product card
│   ├── context/
│   │   └── ThemeContext.tsx     # Dark/Light theme context
│   ├── data/
│   │   └── products.ts          # Mock data
│   ├── pages/
│   │   └── HomePage.tsx         # Main page
│   ├── types/
│   │   └── index.ts             # TypeScript types
│   ├── App.tsx                  # App with theme provider
│   ├── index.css                # Global styles
│   └── main.tsx                 # Entry point

fulscreen : 
src/
├── components/
│   ├── FullscreenModal.tsx     # Modal pentru fullscreen
│   ├── ProductCardEnhanced.tsx # Card cu fullscreen
│   └── ProductCard.tsx    

import { products } from "../data/product";
import { categories } from "../data/product";