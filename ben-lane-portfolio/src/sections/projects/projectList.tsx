import { useState, useEffect } from "react";
import Project from "@/sections/projects/project";
import type { ProjectObj } from "./projectObj";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button.tsx";
import Footer from "@/sections/footer/footer";

import { combineStringArrays } from "@/utilities/ts/combineArrays";
import { capitaliseString } from "@/utilities/ts/capitaliseString";

import buttonStyles from "@/utilities/css/button.module.css";

export default function ProjectList() {

  const [projects, setProjects] = useState<ProjectObj[]>([]);
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);

  const [activeTags, setActiveTags] = useState<boolean[]>([]);
  const [activeProjects, setActiveProjects] = useState<boolean[]>([]);

  function toggleTag(tagIndex: number): void {
    const newActivity = activeTags.map((_currentTag, index) => {
      if (tagIndex === index) {
        return !activeTags[index];
      }
      return activeTags[index];
    }); 
    setActiveTags(newActivity);
  }

  function clearTagSelection(): void {
    const clearedActivity = activeTags.map(() => { return false; });
    setActiveTags(clearedActivity);
  }

  function updateActiveProjects(): void {
    let tagsToShow: number[] = [];
    activeTags.forEach((active, index) => { if(active) {tagsToShow.push(index); }});

    let projectsToShow: boolean[] = [false];
    projects.forEach((project) => {
      let shouldShow: boolean = false
      for (let i = 0; i < project.tags.length; i++) {
        for (let j = 0; j < tagsToShow.length; j++) {
          if (project.tags[i] === uniqueTags[tagsToShow[j]]) {
            // Should be active project
            shouldShow = true;
            projectsToShow[0] = true; // Sets the toggle of if tags are applied
            continue;
          }
        }
      }
      projectsToShow.push(shouldShow);
    });

    setActiveProjects(projectsToShow);
  }

  useEffect(() => {
  
    async function loadProjects() {
      try {
        
        const response = await fetch("/projects.json");

        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.status}`);
        }

        const data: ProjectObj[] = await response.json();
        setProjects(data);

        let allTags: string[] = [];
        data.forEach((project) => { allTags = [...allTags, ...project.tags]; });
        setUniqueTags(combineStringArrays(true, allTags));

        updateActiveProjects();

      } catch (error) {
        throw new Error(`Failed to access json file: ${error}`);
      }
    }

    loadProjects();

  }, []);

  useEffect(() => {
    let initialTagActivity: boolean[] = [];
    uniqueTags.forEach(() => { initialTagActivity.push(false); })
    setActiveTags(initialTagActivity);
  }, [uniqueTags]);

  useEffect(() => {
    updateActiveProjects();
  }, [activeTags])

  if (projects.length <= 0) return <div>No Projects To Load</div>;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center bg-def-white p-4 rounded-b-xl border-b-4 border-b-def-green border-t-2 border-t-def-l-green drop-shadow-subtle">
      <h2 className="mb-4 text-def-grey font-semibold uppercase drop-shadow-subtle">Filter By Skill</h2>
      <div className="flex flex-row flex-wrap gap-1 items-center justify-center">
        {uniqueTags.map((tag, index) => (
          <Badge key={`t${index}`} onClick={() => {toggleTag(index)}} className={(activeTags[index] ? `${buttonStyles.highlightToggle}` : `${buttonStyles.highlight}`) + ` font-normal text-def-grey cursor-pointer`} variant="outline">{capitaliseString(tag)}</Badge>
        ))}
      </div> 
      <Button onClick={() => {clearTagSelection()}} className={`${buttonStyles.button} ${buttonStyles.highlight} rounded-3xl mt-4 px-2 text-sm font-medium text-def-grey border-def-green border-2`} variant="outline">Clear</Button>
    </div>
      <div className=" flex flex-col mx-40 my-10 gap-10">
        {projects.map((project, index) => (
          (!activeProjects[0] || activeProjects[index + 1]) && <Project key={project.id} {...project} />
        ))}
      </div>
      <Footer />
    </div>
  );
}