import { useState, useEffect } from "react";
import Header from "@/sections/header/header";
import ProjectList from "@/sections/projects/projectList"
import type { ProjectObj } from "@/sections/projects/projectObj.ts";
import ProjectFeatureCarousel from "@/sections/projectFeatureCarousel/projectFeatureCarousel";


export default function Games () {

  
  const [projects, setProjects] = useState<ProjectObj[]>([]);

  useEffect(() => {
  
    async function loadProjects() {
      try {
        
        const response = await fetch("/projects.json");

        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.status}`);
        }

        const data: ProjectObj[] = await response.json();
        setProjects(data);

      } catch (error) {
        console.log(`Failed to access json file: ${error}`);
      }
    }

    loadProjects();

  }, []);

  return (
    <div className="flex flex-col pt-10 sm:pt-0 min-h-dvh overflow-hidden justify-center def-background">
      <Header title="Gameplay Developer" tagline="Focus on user experience..." />
      <ProjectFeatureCarousel projects={projects}/>
      <ProjectList projects={projects}/>
    </div>
  );
}