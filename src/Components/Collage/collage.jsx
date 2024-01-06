import React from "react";

const Collage = () => {
    return( 
        <>
         <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section class="relative  px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
            <img class="xl:max-w-6xl" src="https://live.staticflickr.com/4277/35181223575_c191a09ad5_h.jpg" alt="" />
            <div class="content bg-gray-700 p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                <div class="flex justify-between font-bold text-sm">
       
                </div>
                <h2 class="text-3xl text-white font-semibold mt-4 md:mt-10">Agora3dStudio</h2>
                <p class="my-3 text-justify text-white font-medium text-gray-700 leading-relaxed">Queremos acompañarte, utilizando herramientas 3d y web de vanguardia en el desarrollo de tus ideas</p>
                
            </div>
        </section>
    </section>

        </>
    )
}

export default Collage; 