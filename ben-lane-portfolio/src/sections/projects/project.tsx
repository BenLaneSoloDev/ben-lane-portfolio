import type { ProjectObj } from "./projectObj";
import { getYouTubeEmbedUrl } from "@/utilities/ts/youtubeEmbedConverter";
import { capitaliseString } from "@/utilities/ts/capitaliseString"
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge";

import buttonStyles from "@/utilities/css/button.module.css";

export default function Project({activeTags, project}: {activeTags: string[], project: ProjectObj}) {

  const { 
    title,
    subtitle,
    briefDescription,
    poster,
    githubLink,
    liveLink,
    status,
    tags
  } = project;

  const validStatus = ["ongoing", "paused", "completed"];

  return (
    <div className="flex flex-col overflow-hidden w-[45%] items-center rounded-4xl font-light text-def-grey bg-def-white border-4 border-def-orange shadow-md/20">
      <div className="w-full relative">
        <div className="flex flex-col absolute gap-3 bottom-3 right-3">
          {githubLink && <Button className={`${buttonStyles["button-s"]} ${buttonStyles.highlight} p-5 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline" nativeButton={false} render={<a href={githubLink} target="_blank"></a>}>Github</Button>}
          {liveLink && <Button className={`${buttonStyles["button-s"]} ${buttonStyles.highlight} p-5 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline" nativeButton={false} render={<a href={liveLink} target="_blank"></a>}>Try It Out</Button>} 
        </div>
        <img className="object-cover object-center aspect-video h-full" src={`./src/assets/home/projectSS/${poster}`} alt="Project Screenshot"></img>
      </div>
      <div className="flex flex-col p-3 gap-3 border-t-4 border-def-orange"> 
        <h2 className="w-full text-lg">
          <strong className="text-xl">{title}</strong> | {subtitle}
        </h2>
        <p className="mx-4 mb-1">{briefDescription}</p>
        <div className="flex flex-row flex-wrap gap-1 items-center">
          <Badge className={`${buttonStyles.highlight} font-normal`}>{validStatus.some(s => s === status.toLowerCase()) ? capitaliseString(status) : "Completed"}</Badge>
          <span className="drop-shadow-subtle">|</span>
          {tags.map((tag, index) => (
            <Badge key={`t${index}`} className={(activeTags.includes(tag) ? `${buttonStyles.highlightToggle}` : `${buttonStyles.highlight}`) + ` font-normal text-def-grey`} variant="outline">{capitaliseString(tag)}</Badge>
          ))}
        </div>
      </div>      
    </div>
  );
}