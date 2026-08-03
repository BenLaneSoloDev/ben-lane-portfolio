import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";

export default function Header({ title, tagline} : { title: string, tagline: string}) {

  return (
    <div className="flex flex-row content-center p-4 gap-4 bg-def-white border-b-4 border-def-orange">
      <div className="h-25 self-center">
        <AspectRatio ratio={1 / 1} className="h-full border-4 rounded-full overflow-clip border-def-orange shadow-md/20">
          <img src="./src/assets/home/headshot.webp" alt="Headshot" className="object-cover object-center"></img>
        </AspectRatio>
      </div>
      
      <div className="">
        <h1 className="mb-2 font-bold text-4xl text-def-orange drop-shadow-subtle">{title}</h1>
        <p className="ml-2 text-def-grey">{tagline}</p>
      </div>
      <div></div>
    </div>
  );
}