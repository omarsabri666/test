import SecHero from "./components/SecHero";
import Hero1 from "./components/Hero1";
import Services from "./components/Services";
import Regions from "./components/Regions";
import Image from "next/image";
import card1 from "/public/card1.png";

import card5 from "/public/card5.png";
import card6 from "/public/card6.png";
import about from "/public/about.png";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <ScrollUp/>
     <Hero1/>
    <SecHero/>
    <Services/>
    <Regions/>
    <News/>
    <Contact/>
    <Footer/>
     

    
    </main>
  );
}
