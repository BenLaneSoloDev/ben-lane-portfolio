import { Button } from "@base-ui/react/button";
import { useNavigate } from "react-router";
import { startTransition } from "react";

export default function HomeButton() {
  
  const navigate = useNavigate();
  
  function handleNavigate(destination: string) {
    startTransition(() => {
      navigate(destination);
    })
  }

  return (
    <div className="bg-def-white rounded-xl drop-shadow-subtle border-def-orange border-2">
      <Button onClick={() => {handleNavigate("/")}} className={`text-def-grey font-semibold text-lg sm:text-2xl uppercase drop-shadow-subtle cursor-pointer px-4 py-2`} >Home</Button>
    </div>
  )
}