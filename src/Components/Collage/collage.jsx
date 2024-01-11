import React from "react";
import Logo from "../../img/Logo.png";
const Collage = () => {
    return( 
        <>
         <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section class="relative  px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
            <img class="xl:max-w-6xl" src="https://live.staticflickr.com/4277/35181223575_c191a09ad5_h.jpg" alt="" />
            <div class="content bg-gray-900 p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                <div class="flex justify-between font-bold text-sm">
                <h2 class="text-5xl text-white text-center font-semibold mt-4 md:mt-10">Agora3dStudio</h2>
                

                </div>
                <div className="flex items-center">
                <div><img className="h-auto w-full" src={Logo} /></div>
                <div><p class="p-2 m-2 justify-center  text-white text-md  leading-relaxed">Queremos acompañarte, utilizando herramientas 3d y web de vanguardia en el desarrollo de tus ideas</p>
                </div>
                </div>
              
            </div>
        </section>
    </section>

        </>
    )
}

export default Collage; 