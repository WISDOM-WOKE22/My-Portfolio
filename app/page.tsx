"use client"
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
// import Tools from "@/components/tools";
import Footer from "@/components/footer";
import WorkLife from "@/components/workLife";
import Contact from "@/components/contact";

export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <Skills/>
    {/* <Tools/> */}
    <Projects/>
    <WorkLife/>
    <Contact/>
    <Footer/>
   </div>
  );
}
