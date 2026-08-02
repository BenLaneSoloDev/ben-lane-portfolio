import Hero from "@/sections/hero/hero";
import ProjectCarousel from "@/sections/projectCarousel/projectCarousel";
import Footer from "@/sections/footer/footer";

export default function Home () {
  return (
    <div className="flex flex-col pt-10 sm:pt-0 min-h-dvh overflow-hidden justify-center def-background">
      <Hero />
      <ProjectCarousel total={5}/>
      <Footer />
    </div>
  );
}