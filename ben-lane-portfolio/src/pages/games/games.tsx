import Hero from "@/sections/hero/hero";
import ProjectList from "@/sections/projects/projectList"

export default function Games () {
  return (
    <div className="flex flex-col pt-10 sm:pt-0 min-h-dvh overflow-hidden justify-center def-background">
      <Hero />
      <ProjectList />
    </div>
  );
}