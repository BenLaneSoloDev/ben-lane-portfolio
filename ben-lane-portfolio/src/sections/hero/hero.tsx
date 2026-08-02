import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button.tsx";

import { useNavigate } from "react-router";

import buttonStyles from "@/utilities/css/button.module.css";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row flex-1 gap-2 sm:gap-4 md:gap-8 p-[4%] md:py-10 md:w-[min(max(80%,700px),1000px)] md:mx-auto">
      <div className="flex items-center justify-center md:basis-[40%] md:grow-0 md:shrink-0">
        <AspectRatio ratio={1 / 1} className="w-[50%] sm:w-[40%] md:w-full mx-auto border-4 rounded-full overflow-clip border-def-orange shadow-md/20">
          <img src="./src/assets/home/headshot.webp" alt="Headshot" className="object-cover object-center"></img>
        </AspectRatio>
      </div>
      <div className="flex flex-col content-center self-center gap-4 md:basis-0 md:grow md:min-w-0">
      <div className=" p-3 bg-def-white border-3 border-def-orange shadow-md/20 rounded-3xl">
        <h2 className="hidden md:block md:text-base text-def-green">Benjamin Lane:</h2>
        <h1 className="block md:block text-xl md:text-4xl font-semibold text-def-green">About Me</h1>
        <Separator className="my-0.5 md:my-2" />
        <p className="text-def-grey">I am a gameplay programmer graduate with 4 years of experience. I am driven by my enjoyment of new and fun gameplay mechanics, whether its designing combat systems, developing unique player interactions or refining movement. All of this done with my keen eye for detail and care for the users experience.</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-stretch justify-center gap-[4%] sm:gap-8">
          <Button onClick={() => {navigate("/software-dev")}} className={`${buttonStyles["button-s"]} ${buttonStyles.highlight} flex-1 whitespace-normal h-auto p-[2%] md:p-2 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline">Software Development</Button>
          <Button onClick={() => {navigate("/game-dev")}} className={`${buttonStyles["button-s"]} ${buttonStyles.highlight} flex-1 whitespace-normal h-auto p-[2%] md:p-2 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline">Games Development</Button>
        </div>
      </div>
    </div>
    </div>
  );
}