import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";

import type { ProjectObj } from "../projects/projectObj.ts";
import { getYouTubeEmbedUrl } from "@/utilities/ts/youtubeEmbedConverter.ts";
import { capitaliseString } from "@/utilities/ts/capitaliseString.ts";
import buttonStyles from "@/utilities/css/button.module.css";
import { useState } from "react";

import dropUpIcon from "@/assets/home/drop-up-icon-green.svg";

export default function ProjectFeature({project}: {project: ProjectObj}) {
  
  const [expanded, setExpanded] = useState<boolean>(false);

  const { 
    title,
    subtitle,
    video,
    githubLinks,
    liveLink,
    status,
    tags
  } = project;

  const description: string[] = project.description ? project.description as string[] : [project.briefDescription] as string[];

  const validStatus = ["ongoing", "paused", "completed"];

  const videoUrl: string= video ? getYouTubeEmbedUrl(video) : "";

  return (
    <div className="flex flex-col md:flex-row flex-wrap w-[90%] md:w-[max(60%,700px)] h-auto items-start md:items-center p-2 sm:p-6 gap-3 md:gap-6 rounded-4xl font-light text-def-grey bg-def-white border-3 border-def-orange shadow-md/20">
      <div className="flex flex-col md:flex-1 gap-3">
        <div className="">
          <h2 className="ml-2 -mb-2 text-lg">
            <strong className="text-xl">{title}</strong> | {subtitle}
          </h2>
        </div>
        <div className="">
          <iframe className="aspect-video w-full rounded-2xl drop-shadow-green border-def-l-green border-2" 
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"/>
        </div>
        <div className="flex flex-row gap-4 items-center md:justify-center">
          {(githubLinks && githubLinks.length > 0) && <Button className={`${buttonStyles["button-s"]} ${buttonStyles.highlight} p-5 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline" nativeButton={false} render={<a href={githubLinks[0]} target="_blank"></a>}>{`Github ${githubLinks.length > 1 ? "(FE)" : ""}`}</Button>}
          {(githubLinks && githubLinks.length > 1) && <Button className={`${buttonStyles["button-s"]} ${buttonStyles.highlight} p-5 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline" nativeButton={false} render={<a href={githubLinks[1]} target="_blank"></a>}>{`Github (BE)`}</Button>}
          {liveLink && <Button className={`${buttonStyles["button-s"]} sm:${buttonStyles.button} ${buttonStyles.highlight} p-5 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline" nativeButton={false} render={<a href={liveLink} target="_blank"></a>}>Try It Out</Button>} 
        </div>
      </div>
      <div className="flex flex-col md:flex-1 gap-4 text-base">
        <div className="flex flex-row justify-between">
          <Badge className={`${buttonStyles.highlight} font-normal`}>{validStatus.some(s => s === status.toLowerCase()) ? capitaliseString(status) : "Completed"}</Badge>
        </div>
        <div onClick={() => setExpanded(!expanded)} className="relative sm:flex sm:flex-col sm:gap-4">
          {description?.map((paragraph, index) => {
            return <p key={`line${index}`} className="hidden sm:block ml-1">{paragraph}</p>;
          })}
          {description?.map((paragraph, index) => {
            if (!expanded) {
              if (index === 0 ) return <p key={`line${index}`} className="sm:hidden inline ml-1">{paragraph}</p>;
            }
            else return <p key={`line${index}`} className="sm:hidden inline ml-1">{paragraph}</p>;
          })}
          {expanded && <div className="inline-block sm:hidden absolute"><img className="drop-shadow-subtle" src={dropUpIcon}></img></div>}
          {!expanded && <div className="inline-block sm:hidden absolute text-def-green drop-shadow-subtle ml-2">...</div>}
        </div>
        <div className="flex flex-row flex-wrap gap-1 items-center">
          {tags.map((tag, index) => (
            <Badge key={`t${index}`} className={`${buttonStyles.highlight} font-normal text-def-grey`} variant="outline">{capitaliseString(tag)}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}