import { useState, useEffect } from "react";
import Project from "@/sections/projects/project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button.tsx";
import type { ProjectObj } from "./projectObj.ts";

import { capitaliseString } from "@/utilities/ts/capitaliseString";
import { combineTagArrays } from "@/utilities/ts/combineArrays";

import buttonStyles from "@/utilities/css/button.module.css";

export default function ProjectList({ projects } : { projects: ProjectObj[] }) {

  if (projects.length <= 0) return <div>No Projects To Load</div>;

  const [uniqueTags, setUniqueTags] = useState<string[]>([]);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  function toggleTag(tag: string) {
    setActiveTags((prev) => {
      return prev.includes(tag) ? prev.filter((t) => { return t !== tag }) : [...prev, tag];
    });
  }

  const clearSkills = () => setActiveTags([]);

  useEffect(() => {
    let allTags: string[] = [];
    projects.forEach((project) => { allTags = [...allTags, ...project.tags]; });
    setUniqueTags(combineTagArrays(allTags));
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center bg-def-white p-4 border-b-4 border-b-def-green border-t-2 border-t-def-l-green drop-shadow-subtle">
      <h2 className="text-def-grey font-semibold text-xl sm:text-2xl uppercase drop-shadow-subtle">All Projects</h2>
      <h2 className="mb-4 text-def-l-grey font-semibold uppercase">Filter By Skill</h2>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-center mx-[2.5%] md:w-[max(40%,700px)]">
        {uniqueTags.map((tag, index) => {
          const isActive = activeTags.includes(tag);
          return (
            <Badge key={`t${index}`} onClick={() => {toggleTag(tag)}} className={(isActive ? `${buttonStyles.highlightToggle}` : `${buttonStyles.highlight}`) + ` text-base p-3 font-normal text-def-grey cursor-pointer`} variant="outline">{capitaliseString(tag)}</Badge>
        )})}
      </div> 
      <Button onClick={clearSkills} className={`${buttonStyles.button} ${buttonStyles.highlight} rounded-3xl mt-4 p-2 text-sm font-medium text-def-grey border-def-green border-2`} variant="outline">Clear</Button>
    </div>
      <div className="flex flex-row flex-wrap justify-center m-[5%] gap-10">
        {projects.filter((project) => {
          if (activeTags.length === 0) return true;
          console.log(activeTags.length);
          console.log(activeTags);
          return project.tags.some((tag) => activeTags.includes(tag));
        }).map((project, index) => (
          <Project key={`p${index + 1}`} activeTags={activeTags} project={project} />
        ))}
      </div>
    </div>
  );
}