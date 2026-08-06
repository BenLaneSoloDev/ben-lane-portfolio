import ProjectFeature from "./projectFeature.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

import type { ProjectObj } from "../projects/projectObj";

import buttonStyles from "@/utilities/css/button.module.css";

import gamesData from "@/data/projects.games.json";
import softwareData from "@/data/projects.software.json";

export default function ProjectFeatureCarousel({projectType}: {projectType: boolean}) {

  const projects: ProjectObj[] = projectType ? softwareData as ProjectObj[] : gamesData as ProjectObj[];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api])

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="flex flex-col items-center my-7.5">
      <h2 className="uppercase font-semibold text-xl sm:text-2xl text-center text-def-grey drop-shadow-subtle">Featured Project{featuredProjects.length > 1 && "s"}</h2>
      <Carousel setApi={setApi} opts={{ loop:  true }} className="mx-2 md:mx-20 w-full">
        <CarouselContent className="my-7.5">
          {featuredProjects.map((project, index) => (
            <CarouselItem key={`citem${index}`} className="flex items-center justify-center">
              <ProjectFeature project={project}/>
            </CarouselItem>
          ))}
        </CarouselContent>  
      </Carousel>
      <div className="flex w-[70%] items-center gap-5">
        {featuredProjects.map((_, index) => (
          <Button 
            key={`button${index}`} 
            className={(index === current ? ` ${buttonStyles.highlightToggle}` : `hover:bg-def-l-green drop-shadow-subtle`) + ` ${buttonStyles["button-xs"]} bg-def-l-green flex-1 rounded-full`} 
            onClick={() => api?.scrollTo(index)} />
        ))}
      </div>
  </div>
  )
}