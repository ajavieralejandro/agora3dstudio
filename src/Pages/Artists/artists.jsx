import React from "react";
import Navbar from '../../Components/Navbar/navbar';
import Footer from "../../Components/Footer/footer";
import TissuePage from "../LandPage/TissuePage/tissueProject";
import Testimonial from "../../Components/Artists/terstimonial/testimonial";
import TestimonialCard from "../../Components/Artists/Card/testimonialCard/testimonialCard";
const Artists = () =>{
    return (
        <>
        <Navbar />
        <div className="artists pt-12 bg-black">
        <TestimonialCard />
        <Testimonial />
        
        </div>
        <Footer />
        </>
    )
}

export default Artists;