import Hero from "@/sections/hero/hero";
import ProjectCarousel from "@/sections/projectCarousel/projectCarousel";
import Footer from "@/sections/footer/footer";
import HomeHero from "@/sections/hero/pages/home.hero";

export default function Home () {
  return (
    <div className="flex flex-col min-h-dvh overflow-hidden justify-center def-background">
      <Hero contents={<HomeHero />}/>
      <ProjectCarousel total={5}/>
      <Footer />
    </div>
  );
}