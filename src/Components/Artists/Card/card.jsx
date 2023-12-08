import React from "react";

const Card = () =>{
    return (
        <>
        
<section class="bg-black">
    <div class="max-w-6xl px-6 py-10 ">
        <p class="text-xl font-medium text-blue-500 ">Testimonials</p>

        <h1 class="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            What clients saying
        </h1>

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full  -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/07051094-3480-4541-67d8-3a9fdb0b0800/public" alt="client photo" />
                
                <div class="mt-2 md:mx-6">
                    <div>
                        <p class="text-xl font-medium tracking-tight text-white">Laura Heiss</p>
                        <p class="text-blue-200 ">Marketing Manager at Stech</p>
                    </div>

                    <p class="mt-4 text-lg leading-relaxed text-white md:text-xl"> Laura se acercó a nuestro estudio con la necesidad de trabajar con material de diagnóstico por imágenes (TAC). Y viendo el potencial de su obra le propusimos construir su propia web page, una muestra itinerante y trabajar a fondo en renders y clases de arte complementando de manera hands-on sus estudios en arte terapia. Logró junto a nosotros crear su propio diálogo de obra encontró la materia prima de su trabaJo
 y su lenguaJe de obra. Transitó desde el aprendizaje en 3D en modelado y diseño hasta impresión 3D y técnicas del arte académico como la pintura.
</p>
                    
                 
                </div>
            </div>
        </main>
    </div>
</section>
        
        </>
    )
}

export default Card;