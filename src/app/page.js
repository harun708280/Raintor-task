import Contact from "@/components/shared/Contact";
import Develop from "@/components/shared/Develop";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import Previously from "@/components/shared/Previously";
import Skills from "@/components/shared/Skills";
import WorkProcess from "@/components/shared/WorkProcess";
import Nav from "@/components/shared/Nav";

export default function Home() {
  return (
    <div className="font-grotesque scroll-smooth">
   

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <Skills />
        <Develop />
        <Previously />
      </div>

      <div id="portfolio">
        <WorkProcess />
        <Contact />
      </div>

    </div>
  );
}
