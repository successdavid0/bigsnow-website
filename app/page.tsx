import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Roles from "@/components/sections/Roles";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Testimonials from "@/components/sections/Testimonials";
import Ambassador from "@/components/sections/Ambassador";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Roles />
      <Projects />
      <Timeline />
      <Testimonials />
      <Ambassador />
      <Contact />
    </>
  );
}
