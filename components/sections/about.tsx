"use client";

import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Vortex } from "../ui/vortex";
const words = `Our portfolio is a testament to our unwavering dedication to delivering exceptional solutions across various digital domains. With a focus on innovation and quality, we have successfully completed projects that span web development, mobile applications, digital marketing, and beyond. Each project in our portfolio reflects our commitment to understanding our clients' unique needs and crafting tailored solutions that drive success.
`;
export default function About() {
  return (
    <section
      id="about"
      className="bg-black flex flex-col justify-center items-center px-10 md:px-32 lg:px-24"
    >
      {/* <h2 className="text-white text-3xl m-5 font-bold">About Us</h2>

      <div className="h-[20rem] w-full bg-black  bg-grid-small-white/[0.5] bg-grid-small-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">

        </div>
        <TextGenerateEffect words={words}/>



      </div> */}


      <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
      <h2 className="text-white text-3xl m-5 font-bold">About Us</h2>
        <TextGenerateEffect words={words} />
          
        </Vortex>
      </div>

    </section>
  );
}
