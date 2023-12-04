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
import Timeline from "../../Components/Timeline/timeline";
import { Swiper, SwiperSlide } from 'swiper/react';
import Projects from '../../Components/Projects/projects';
import Collage2 from '../../Components/Collage/collage2';

// import Swiper and modules styles
import { Navigation, Pagination, Scrollbar, A11y,EffectCube } from 'swiper/modules';
// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


const LandPage = () =>{
    return(
        <div className="bg-black">
        <Navbar />
        <Hero />

        <Collage2 />


       <Timeline />
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