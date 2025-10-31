"use client";

import InteractiveAvatar from "@/components/InteractiveAvatar";
export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-col items-start justify-start gap-5 mx-auto pt-0 sm:pt-4 pb-20 videoWrapper">
        <div className="w-full">
          <InteractiveAvatar />
        </div>
      </div>
    </div>
  );
}
