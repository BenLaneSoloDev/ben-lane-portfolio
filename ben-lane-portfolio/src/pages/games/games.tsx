import Hero from "@/sections/hero/hero";
import GamesHero from "@/sections/hero/pages/games.hero";
import ProjectList from "@/sections/projects/projectList"

export default function Games () {
  return (
    <div className="flex flex-col min-h-dvh overflow-hidden justify-center def-background">
      <Hero contents={<GamesHero />}/>
      <ProjectList />
    </div>
  );
}