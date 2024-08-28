import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Slogan } from "@/components/sections/slogan";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Projects />
      <Slogan/>
      <Contact/>
    </>

  );
}
