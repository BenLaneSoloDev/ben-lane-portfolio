import { Button } from "@/components/ui/button";
import Footer from "@/sections/footer/footer";

import { startTransition } from "react";
import { useNavigate } from "react-router";

import buttonStyles from "@/utilities/css/button.module.css";

export default function Error404 () {

  const navigate = useNavigate();

  function handleNavigate(destination: string) {
    startTransition(() => {
      navigate(destination);
    })
  }

  return (
    <div className="flex flex-col pt-10 sm:pt-0 min-h-dvh overflow-hidden justify-center def-background">
      <div className="flex flex-col flex-1 justify-center items-center m-auto p-4">
        <h1 className="text-center text-def-green drop-shadow-subtle text-5xl font-bold uppercase underline-offset-8 underline decoration-4 decoration-def-orange leading-15">Error 404: This page does not exist</h1>
        <Button onClick={() => {handleNavigate("/")}} className={`${buttonStyles["button-s"]} ${buttonStyles.highlight} mt-4 whitespace-normal h-auto p-[2%] md:p-2 text-lg font-bold text-def-grey border-def-green border-2 uppercase`} variant="outline">Return Home</Button>
      </div>
      <div className="w-full border-b-4 border-def-green"></div>
      <Footer />
    </div>
  );
}