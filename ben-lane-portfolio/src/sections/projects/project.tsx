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
    description,
    video,
    githubLink,
    liveLink,
    status,
    tags
  } = project;

  const validStatus = ["ongoing", "paused", "completed"];

  const videoUrl: string= video ? getYouTubeEmbedUrl(video) : "";

  return (
    <div className="flex flex-row flex-wrap items-center p-6 gap-6 rounded-4xl font-light text-def-grey bg-def-white border-3 border-def-orange shadow-md/20">
      <div className="flex flex-col flex-1 gap-2">
        <div className="">
          <h2 className="ml-2 text-lg">
            <strong className="text-xl">{title}</strong> | {subtitle}
          </h2>
        </div>
        <div className="">
          <iframe className="aspect-video rounded-2xl drop-shadow-green border-def-l-green border-2" 
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"/>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-4 text-base">
        {description.map((paragraph, index) => (
          <p key={`desc${index}`}>{paragraph}</p>
        ))}
        <div className="flex flex-row gap-4 items-center">
          {githubLink && <Button className={`${buttonStyles.button} ${buttonStyles.highlight} p-5 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline" nativeButton={false} render={<a href={githubLink} target="_blank"></a>}>Github</Button>}
          {liveLink && <Button className={`${buttonStyles.button} ${buttonStyles.highlight} p-5 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline" nativeButton={false} render={<a href={liveLink} target="_blank"></a>}>Try It Out</Button>} 
        </div>
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