import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center gap-5 items-center text-lg p-2 w-full">
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[90%]" />
    </div>
  );
};

export default Loading;
