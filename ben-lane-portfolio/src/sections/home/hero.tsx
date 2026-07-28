import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";

export default function Hero() {
  return (
    <div className="flex flex-row gap-[4%] p-10">
      <div className="flex-2">
        <AspectRatio ratio={1 / 1} className="w-full border-4 rounded-full overflow-clip border-def-orange shadow-md/20">
          <img src="./src/assets/home/headshot.webp" alt="Headshot" className="object-cover object-center"></img>
        </AspectRatio>
      </div>
      <div className="flex-4 p-3 content-center self-center bg-def-white border-3 border-def-orange shadow-md/20 rounded-3xl">
        <h2 className="text-base text-def-green">Benjamin Lane:</h2>
        <h1 className="text-4xl font-semibold text-def-green">Developer Portfolio</h1>
        <Separator className="my-2" />
        <p className="text-def-grey">I am a gameplay programmer graduate with 4 years of experience. I am driven by my enjoyment of new and fun gameplay mechanics, whether its designing combat systems, developing unique player interactions or refining movement. All of this done with my keen eye for detail and care for the users experience.</p>
      </div>
    </div>
  );
}