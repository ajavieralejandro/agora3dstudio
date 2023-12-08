import React from "react";
import Navbar from '../../Components/Navbar/navbar';
import Footer from "../../Components/Footer/footer";
import Timeline from "../../Components/Timeline/timeline";
import TissuePage from "../LandPage/TissuePage/tissueProject";
import Gallery from "../../Components/Gallery/gallery";
import Collage from "../../Components/Collage/collage2";
import AwesomeScroll from "../../Components/AwesomeScroll/awesomeScroll";
import Testimonial from "../../Components/Artists/terstimonial/testimonial";
import TestimonialCard from "../../Components/Artists/Card/testimonialCard/testimonialCard";
const Artists = () =>{
    return (
        <>
        <Navbar />
        <div className="pt-12 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <TestimonialCard />
        <Testimonial />
        
        </div>
        <Footer />
        </>
    )
}

export default Artists;