import Hero from "@/sections/home/hero/hero.tsx";
import ProjectCarousel from "@/sections/home/projectCarousel/projectCarousel.tsx";
import Footer from "@/sections/home/footer/footer.tsx";

export default function Home () {
  return (
    <div className="flex flex-col min-h-dvh overflow-hidden justify-center def-background">
      <Hero />
      <ProjectCarousel total={5}/>
      <Footer />
    </div>
  );
}