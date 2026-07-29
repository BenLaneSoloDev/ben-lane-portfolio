import { useState, useEffect } from "react";
import Project from "@/sections/games/projects/project.tsx";
import type { ProjectObj } from "./projectObj";

export default function ProjectList() {

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
        throw new Error(`Failed to access json file: ${error}`);
      }
    }
    
    loadProjects();

  }, []);

  if (projects.length <= 0) return <div>No Projects To Load</div>;

  return (
    <div className="flex flex-col m-4">
      {projects.map((project) => (
      <Project key={project.id} {...project} />
    ))}
    </div>
  );
}