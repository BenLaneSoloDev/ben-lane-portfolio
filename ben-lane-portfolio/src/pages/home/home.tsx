import Hero from "@/sections/home/hero.tsx";
import ProjectCarousel from "@/sections/home/projectCarousel";

export default function Home () {
  return (
    <div className="flex flex-col justify-center def-background">
      <Hero />
      <ProjectCarousel total={5}/>
    </div>
  );
}