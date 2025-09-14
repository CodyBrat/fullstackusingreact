"use client";
import React from "react";
import { BackgroundBeams } from "../components/background-beans";

export function BackgroundBeamsDemo() {
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-neutral-950 flex flex-col items-center justify-center antialiased">
      <div className="w-full min-h-screen absolute inset-0">
        <BackgroundBeams />
      </div>
      <div className="relative z-10">
        {/* Content will be rendered on top of the background */}
      </div>
    </div>
  );
}
