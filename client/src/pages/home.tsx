import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";
import { Features } from "@/components/sections/features";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Products />
      <Features />
      <Contact />
    </div>
  );
}
