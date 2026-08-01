import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button.tsx";

import { useNavigate } from "react-router";

import buttonStyles from "@/utilities/css/button.module.css";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row flex-1 gap-2 sm:gap-[4%] p-[4%] sm:p-10">
      <div className="sm:flex-2">
        <AspectRatio ratio={1 / 1} className="w-[50%] sm:w-full mx-auto border-4 rounded-full overflow-clip border-def-orange shadow-md/20">
          <img src="./src/assets/home/headshot.webp" alt="Headshot" className="object-cover object-center"></img>
        </AspectRatio>
      </div>
      <div className="flex flex-col w-full sm:w-auto sm:flex-4 content-center self-center gap-4">
      <div className=" p-3 bg-def-white border-3 border-def-orange shadow-md/20 rounded-3xl">
        <h2 className="hidden sm:block sm:text-base text-def-green">Benjamin Lane:</h2>
        <h1 className="block sm:block text-xl sm:text-4xl font-semibold text-def-green">About Me</h1>
        <Separator className="my-0.5 sm:my-2" />
        <p className="text-def-grey">I am a gameplay programmer graduate with 4 years of experience. I am driven by my enjoyment of new and fun gameplay mechanics, whether its designing combat systems, developing unique player interactions or refining movement. All of this done with my keen eye for detail and care for the users experience.</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-stretch sm:items-center justify-center gap-[4%] sm:gap-8">
          <Button onClick={() => {navigate("/software-dev")}} className={`${buttonStyles["button-s"]} ${buttonStyles.highlight} flex-1 max-w-70 whitespace-normal sm:whitespace-nowrap h-auto sm:h-0 p-[2%] sm:p-5 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline">Software Development</Button>
          <Button onClick={() => {navigate("/game-dev")}} className={`${buttonStyles["button-s"]} ${buttonStyles.highlight} flex-1 max-w-70 whitespace-normal sm:whitespace-nowrap h-auto sm:h-0 p-[2%] sm:p-5 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline">Games Development</Button>
        </div>
      </div>
    </div>
    </div>
  );
}