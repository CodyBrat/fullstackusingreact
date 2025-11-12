import React from "react";
import { Skeleton } from "@nextui-org/react";

export function LoadingCard() {
  return (
    <div className="relative flex w-64 max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large bg-content1 p-4 shadow-medium snap-start">
      <div className="flex flex-col items-stretch gap-2 h-full">
        <Skeleton className="rounded-medium">
          <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2" />
        </Skeleton>
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="rounded-md w-4/5"><div className="w-full h-6" /></Skeleton>
          <Skeleton className="rounded-md w-1/5"><div className="w-full h-6" /></Skeleton>
        </div>
        <Skeleton className="rounded-md w-full"><div className="w-full h-16" /></Skeleton>
        <Skeleton className="rounded-md w-full"><div className="w-full h-6" /></Skeleton>
        <Skeleton className="rounded-md w-full"><div className="w-full h-10" /></Skeleton>
      </div>
    </div>
  );
}