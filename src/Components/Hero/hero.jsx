import React from "react";
import { Link } from "react-router-dom";
const Hero = () =>{
    return(
        <>
            <section class="bg-black  text-white "> 

            <div class="grid h-screen place-items-center">
                
    <div class="grid w-full place-items-center px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div class=" sm:hidden sm:mt-0 sm:col-span-5 sm:flex ">
        <img  className=" w-44"  src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/7388b8f6-6dbb-4433-acd2-8e9b04f5b700/public" alt="bg"/>
        </div>     
        <div class="mr-auto text-center place-self-center lg:col-span-7">
            
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Agora3d Academy</h1>
            <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Ofrecemos distitnos cursos para que domines distintas tecnologías sobre el modelado 3d</p>
          <Link to="/Academy">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
               Ver más
            </a> 
            </Link>
        </div>
        
        <div class=" hidden lg:mt-0 lg:col-span-5 lg:flex ">
        <img  className="md:w-3/4 w-44"  src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/7388b8f6-6dbb-4433-acd2-8e9b04f5b700/public" alt="bg"/>
        </div>      
        </div>          
    </div>
</section>
    
         
        
        </>
    )
}

export default Hero;
