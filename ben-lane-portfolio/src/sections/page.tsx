import { useState, useEffect } from "react";
import ProjectList from "@/sections/projects/projectList"
import type { ProjectObj } from "@/sections/projects/projectObj.ts";
import ProjectFeatureCarousel from "@/sections/projectFeatureCarousel/projectFeatureCarousel";
import Footer from "@/sections/footer/footer";

import navbarStyles from "@/utilities/css/navbar.module.css"

export default function Page({ title, pageData } : { title: string, pageData: string }) {
    
  const [projects, setProjects] = useState<ProjectObj[]>([]);

  useEffect(() => {
  
    async function loadProjects() {
      try {
        
        const response = await fetch(pageData);

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
    <div className="flex flex-col min-h-dvh def-background">
      <div className={`${navbarStyles.navbar} flex flex-col items-center pt-10 p-2 sm:pt-4 gap-4 border-b-4 border-def-green bg-def-white w-full`}>
        <h1 className={`text-center font-bold text-2xl sm:text-4xl text-def-white drop-shadow-subtle`}>{title}</h1>
      </div>
      <ProjectFeatureCarousel projects={projects}/> 
      <ProjectList projects={projects}/>
      <div className="w-full border-b-4 border-def-green"></div>
      <Footer />
    </div>
  );
}