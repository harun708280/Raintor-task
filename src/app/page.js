import Develop from "@/components/shared/Develop";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import Previously from "@/components/shared/Previously";

import Skills from "@/components/shared/Skills";
import WorkProcess from "@/components/shared/WorkProcess";


export default function Home() {
  return <div>
    <Hero/>
    
    <Skills/>
    <Develop/>
    <Previously/>
    <WorkProcess/>
    <Footer/>
  </div>;
}
