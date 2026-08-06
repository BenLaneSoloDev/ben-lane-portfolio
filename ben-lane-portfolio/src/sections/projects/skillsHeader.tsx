import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { capitaliseString } from "@/utilities/ts/capitaliseString";

import buttonStyles from "@/utilities/css/button.module.css";

import dropUpIcon from "@/assets/home/drop-up-icon-green.svg";

export default function SkillsHeader({ uniqueTags, activeTags, toggleTag, clearTags } : { uniqueTags: string[], activeTags: string[], toggleTag: (tag: string) => void, clearTags: () => void}) {
  
  const [expandedTags, setExpandedTags] = useState<boolean>(false);
  const initialTagLimit: number = 10;
  
  return (
    <div onClick={() => setExpandedTags(!expandedTags)} className="flex flex-col items-center bg-def-white p-4 border-b-4 border-b-def-green border-t-2 border-t-def-l-green drop-shadow-subtle">
      <h2 className="text-def-grey font-semibold text-xl sm:text-2xl uppercase drop-shadow-subtle">All Projects</h2>
      <h2 className="mb-4 text-def-l-grey font-semibold uppercase">Filter By Skill</h2>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-center mx-[2.5%] md:w-[max(40%,700px)]">
        {uniqueTags.map((tag, index) => {
          if ((index >= initialTagLimit) && !expandedTags) return;
          const isActive = activeTags.includes(tag);
          return (
            <Badge key={`t${index}`} onClick={(event) => {event.stopPropagation(); toggleTag(tag);}} className={(isActive ? `${buttonStyles.highlightToggle}` : `${buttonStyles.highlight}`) + ` text-base p-3 font-normal text-def-grey cursor-pointer`} variant="outline">{capitaliseString(tag)}</Badge>
        )})}
      </div>
      {(expandedTags && uniqueTags.length > initialTagLimit) && <div className="inline-block mt-2"><img className="drop-shadow-subtle" src={dropUpIcon}></img></div>}
      {(!expandedTags && uniqueTags.length > initialTagLimit) && <div className="inline-block text-def-green drop-shadow-subtle text-2xl">...</div>}
      <Button onClick={(event) => { event.stopPropagation(); clearTags(); }} className={(uniqueTags.length > initialTagLimit ? `mt-2` : `mt-4`) +  ` ${buttonStyles.button} ${buttonStyles.highlight} rounded-3xl p-2 text-sm font-medium text-def-grey border-def-green border-2`} variant="outline">Clear</Button> 
    </div>
  );
}