import React from "react";
import About from "../../Hero/About/about";
import Hero from "../../Hero/hero";
import './parallax.css';
const Parallax = () =>{
    return(
        <>
        
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-2"><div class="relative">


    </div>
    <section class="flex items-center  xl:h-screen font-poppins  ">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div class="flex flex-wrap ">
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <img src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg" alt=""
                        class="relative z-40 object-cover w-full h-96 rounded-3xl" />
                </div>
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <h2 class="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
                        About Us
                    </h2>
                    <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                    </p>
                  
                </div>
            </div>
        </div>
    </section>
    <div class="sticky  flex flex-col items-center justify-center bg-black text-white">
       

    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-black text-white">
        <Hero />
    </div>
  
</div></div>
<div className="picture1"></div>

            </div>

        </>
    )
}

export default Parallax;