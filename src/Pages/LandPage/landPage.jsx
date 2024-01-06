import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import About from "../../Components/Hero/About/about";
import Hero from "../../Components/Hero/hero";
import Collage from "../../Components/Collage/collage";
import Team from "../../Components/Team/team";
import Contact from "../../Components/Contact/contact";
import Footer from '../../Components/Footer/footer';
import Feature  from "../../Components/Features/features";
import Academy from "./Accademy/academy";
import Logos from "../../Components/Logos/logos";
import Projects from "../../Components/LandComponents/projects";
import Timeline from "../../Components/Timeline/timeline";
import Parallax from '../../Components/LandComponents/Parallax/Parallax';

import './landPage.css'
const LandPage = () =>{
    return(
        <>
        <Navbar/>
        <div className="bg-black">
      <Collage/>
      <div class="container mx-auto px-4">
      <Projects />
      <Hero />
      <About />
      </div>


        <Team />
        <Logos />
        <Contact />
        <Footer />
    </div>
    </>
    )
}

export default LandPage;