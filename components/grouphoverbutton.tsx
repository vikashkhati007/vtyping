import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const GroupHoverButton = ({svg, hovertext}:any) => {
  return (
    <>
      <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                 {svg}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{hovertext}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
    </>
  )
}

export default GroupHoverButton
