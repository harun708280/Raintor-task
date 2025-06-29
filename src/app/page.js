import Contact from "@/components/shared/Contact";
import Develop from "@/components/shared/Develop";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import Previously from "@/components/shared/Previously";

import Skills from "@/components/shared/Skills";
import WorkProcess from "@/components/shared/WorkProcess";


export default function Home() {
  return <div className=" font-grotesque">
    <Hero/>
    
    <Skills/>
    <Develop/>
    <Previously/>
    <WorkProcess/>
    <Contact/>
    
  </div>;
}
