import ProjectList from "@/sections/projects/projectList"
import ProjectFeatureCarousel from "@/sections/projectFeatureCarousel/projectFeatureCarousel";
import Footer from "@/sections/footer/footer";

import navbarStyles from "@/utilities/css/navbar.module.css"

export default function Page({ title, isSoftware } : { title: string, isSoftware: boolean }) {

  return (
    <div className="flex flex-col min-h-dvh def-background">
      <div className={`${navbarStyles.navbar} flex flex-col items-center pt-10 p-2 sm:pt-4 gap-4 border-b-4 border-def-green bg-def-white w-full`}>
        <h1 className={`text-center font-bold text-2xl sm:text-4xl text-def-white drop-shadow-subtle`}>{title}</h1>
      </div>
      <div className="flex-1 justify-center items-center">
        <ProjectFeatureCarousel projectType={isSoftware}/> 
        <ProjectList projectType={isSoftware}/>
      </div>
      <div className="w-full border-b-4 border-def-green"></div>
      <Footer />
    </div>
  );
}