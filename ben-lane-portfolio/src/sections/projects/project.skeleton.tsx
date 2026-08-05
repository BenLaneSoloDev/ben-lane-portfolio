import { Badge } from "@/components/ui/badge";

export default function ProjectSkeleton() {

  return (
    <div className="flex flex-col overflow-hidden w-full md:max-w-112.5 md:w-[45%] items-center rounded-4xl font-light text-def-grey bg-def-orange border-4 border-def-orange shadow-md/20">
      <div className="w-full h-80 relative bg-def-white"></div>
      <div className="flex flex-col w-full p-3 gap-3 border-t-4 border-def-orange"> 
        <div className="rounded-3xl mb-1 w-[50%] h-4 bg-def-white"></div>
        <div className=" rounded-3xl mb-1 w-full h-8 bg-def-white"></div>
        <div className="flex flex-row flex-wrap gap-1 items-center">
          <Badge className={`bg-def-white flex-1`} variant="default"></Badge>
          <span className="drop-shadow-subtle text-def-white">|</span>
          {Array.from({ length: 3}, (_v, i) => (
            <Badge key={`b${i}`} className="bg-def-white flex-1 max-w-15" variant="default"></Badge>
          ))}
        </div>
      </div>  
    </div>
  );
}