import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button.tsx";

import { useNavigate } from "react-router";

import buttonStyles from "@/utilities/css/button.module.css";

export default function HomeHero() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-4 content-center self-center gap-4">
      <div className=" p-3 bg-def-white border-3 border-def-orange shadow-md/20 rounded-3xl">
        <h2 className="text-base text-def-green">Benjamin Lane:</h2>
        <h1 className="text-4xl font-semibold text-def-green">About Me</h1>
        <Separator className="my-2" />
        <p className="text-def-grey">I am a gameplay programmer graduate with 4 years of experience. I am driven by my enjoyment of new and fun gameplay mechanics, whether its designing combat systems, developing unique player interactions or refining movement. All of this done with my keen eye for detail and care for the users experience.</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-center gap-8">
          <Button onClick={() => {navigate("/software-dev")}} className={`${buttonStyles.button} ${buttonStyles.highlight} flex-1 max-w-70 p-5 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline">Software Development</Button>
          <Button onClick={() => {navigate("/game-dev")}} className={`${buttonStyles.button} ${buttonStyles.highlight} flex-1 max-w-70 p-5 text-base font-semibold text-def-grey border-def-green border-2`} variant="outline">Games Development</Button>
        </div>
      </div>
    </div>
  );
}