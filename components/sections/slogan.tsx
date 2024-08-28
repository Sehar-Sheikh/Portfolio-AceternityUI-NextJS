"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function Slogan() {
  const words = [
    {
      text: "Transforming",
    },
    {
      text: "ideas",
    },
    {
      text: "into",
    },
    {
      text: "Digital",
      className: "text-blue-500 dark:text-blue-500"
    },
    {
      text: "Reality.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem] bg-black ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
