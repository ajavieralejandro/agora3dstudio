import React,{useState} from "react";
import Gallery from "../../Gallery/gallery";
import Card from "../Card/card";
import TissuePage from "../../../Pages/LandPage/TissuePage/tissueProject";
import ArtistCard from "../Card/artistCard/artistCard";


const Testimonial = () =>{
    return (
        <div className="testimonial bg-black">

<div className="mx-auto">
<ArtistCard text="Junto a Horacio hemos trabajado en varias oportunidades, siempre en torno al diagnóstico por imágenes, en esta oportunidad nos encontramos con la idea de realizar una serie de objetos reconstruidos en 3D desde tomografía computadorizada para luego ser destruidos y reconstruidos mediante la técnica de kintsugi.

" name="Horacio Acerbo" img="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/65a3eab3-a093-4124-ad63-93774ae93c00/public" />

<ArtistCard name="Laura Heiss" text=" Laura se acercó a nuestro estudio con la necesidad de trabajar con material de diagnóstico por imágenes (TAC). Y viendo el potencial de su obra le propusimos construir su propia web page, una muestra itinerante y trabajar a fondo en renders y clases de arte complementando de manera hands-on sus estudios en arte terapia. Logró junto a nosotros crear su propio diálogo de obra encontró la materia prima de su trabaJo
 y su lenguaJe de obra. Transitó desde el aprendizaje en 3D en modelado y diseño hasta impresión 3D y técnicas del arte académico como la pintura.
" img="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/40a4c57a-db1b-4f1e-14d3-c3c2ef767f00/public?w=248&fit=crop&auto=format&dpr=2" />



<section class="">
    <div class="max-w-6xl px-6 py-10 ">
       
        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full  -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class="w-96 h-auto md:mx-6 rounded-full object-cover shadow-md  md:rounded-2xl" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/ff7bb1fb-656e-48ec-f775-b426ff791700/Tissue" alt="client photo" />
                
                <div class="mt-2 md:mx-6">
                    <div>
                        <p class="text-xl font-medium tracking-tight text-white">Laura Heiss</p>
                        <p class="text-blue-200 "></p>
                    </div>

                    <p class="mt-4 text-lg leading-relaxed text-white md:text-xl"> El caso de Jessica fué especial para nosotros ella poseía diferentes TACs (tomografìa computarizada) de frutas y verduras y necesitaba hacer una limpieza aprendiendo en el proceso cómo organizar las herramientas
 y trabajar sobre las tomografías.
Por lo tanto al poner manos a la obra nos encontramos con bananas, cestas completas de fruta,. frutilla.durazno, manzanas. y una increíble selección de lo que debìa ser visto y lo que no.  La obra final fue presentada junto al artista de nuevos medios Franz Fischnaller en el Deep Space de Festival Internacional  Ars Electrónica 2022, en Linz, Austria.
Estamos muy orgullosos de haber acompañado a la artista en su proceso creativo.

</p>
                    
                 
                </div>
            </div>
        </main>
    </div>
</section>
</div>
        </div>
    )
}

export default Testimonial;