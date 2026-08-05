import { useState, useEffect, useMemo } from "react";
import Project from "@/sections/projects/project";

import type { ProjectObj } from "./projectObj.ts";
import { combineTagArrays } from "@/utilities/ts/combineArrays";

import SkillsHeader from "./skillsHeader.tsx";

export default function ProjectList({ projects } : { projects: ProjectObj[] }) {

  const [uniqueTags, setUniqueTags] = useState<string[]>([]);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const activeTagSet = useMemo(() => new Set(activeTags), [activeTags]);

  function toggleTag(tag: string) {
    setActiveTags((prev) => {
      return prev.includes(tag) ? prev.filter((t) => { return t !== tag }) : [...prev, tag];
    });
  }

  const clearSkills = () => setActiveTags([]);

  useEffect(() => {
    if (projects.length > 0) {
      let allTags: string[] = [];
      projects.forEach((project) => { allTags = [...allTags, ...project.tags]; });
      setUniqueTags(combineTagArrays(allTags));
    }
  }, [projects])

  // TODO: OPTIMISE (Look into React.Memo, React.StartTransition)
  // TODO: UPDATE READ ME
  // TODO: UPLOAD PORTFOLIO TO VERCELs
  // TODO: ADD PORTFOLIO TO THE PROJECTS

  return (
    <div className="flex flex-col">
      <SkillsHeader uniqueTags={uniqueTags} activeTags={activeTags} toggleTag={(tag) => toggleTag(tag)} clearTags={clearSkills}/>
      <div className="flex flex-row flex-wrap justify-center m-[5%] gap-10">
        {projects.filter((project) => {
          if (activeTags.length === 0) return true;
          return project.tags.some((tag) => activeTags.includes(tag));
        }).map((project, index) => (
          <Project key={`p${index + 1}`} activeTags={activeTagSet} project={project} />
        ))}
      </div>
    </div>
  );
}