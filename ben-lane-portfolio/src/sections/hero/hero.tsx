import type React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Hero({ contents }: { contents: React.ReactNode }) {

  return (
    <div className="flex flex-row flex-1 gap-[4%] p-10">
      <div className="flex-2">
        <AspectRatio ratio={1 / 1} className="w-full border-4 rounded-full overflow-clip border-def-orange shadow-md/20">
          <img src="./src/assets/home/headshot.webp" alt="Headshot" className="object-cover object-center"></img>
        </AspectRatio>
      </div>
      {contents}
    </div>
  );
}