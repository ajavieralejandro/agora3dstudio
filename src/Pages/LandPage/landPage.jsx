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
import Projects from '../../Components/Projects/projects';
import Timeline from "../../Components/Timeline/timeline";

const LandPage = () =>{
    return(
        <div className="bg-black">
        <Navbar />
        <Collage />
       <Hero />
        <Projects />
       <About />

        <Feature />

        <Team />
        <Logos />
        <Contact />
        <Footer />
    </div>
    )
}

export default LandPage;