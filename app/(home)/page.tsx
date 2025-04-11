// File: pages/home-page.tsx
import { HomeHero } from '@/components/home-hero'; // Asegúrate de que coincida el nombre

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center">
      <HomeHero />
    </main>
  );
}
