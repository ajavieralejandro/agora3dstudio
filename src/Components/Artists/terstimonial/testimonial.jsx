import React,{useState} from "react";
import Gallery from "../../Gallery/gallery";
import Card from "../Card/card";
import TissuePage from "../../../Pages/LandPage/TissuePage/tissueProject";
import ArtistCard from "../Card/artistCard/artistCard";
import resources from './resources.json';
const Testimonial = () =>{
    return (
        <div className="testimonial bg-black">

<div className="mx-auto">
<ArtistCard text2="" images={resources.Horacio.images}  text1="Junto a Horacio hemos trabajado en varias oportunidades, siempre en torno al diagnóstico por imágenes, en esta oportunidad nos encontramos con la idea de realizar una serie de objetos reconstruidos en 3D desde tomografía computadorizada para luego ser destruidos y reconstruidos mediante la técnica de kintsugi.

" name="Horacio Acerbo" img="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/65a3eab3-a093-4124-ad63-93774ae93c00/public" />

<ArtistCard name="Laura Heiss" images={resources.Laura.images} text1={resources.Laura.text1} text2={resources.Laura.text2}img="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/40a4c57a-db1b-4f1e-14d3-c3c2ef767f00/public?w=248&fit=crop&auto=format&dpr=2" />

<ArtistCard name="Jessica Roudes" images={resources.Jessica.images}  text2="Por lo tanto al poner manos a la obra nos encontramos con bananas, cestas completas de fruta,. frutilla.durazno, manzanas. y una increíble selección de lo que debìa ser visto y lo que no.  La obra final fue presentada junto al artista de nuevos medios Franz Fischnaller en el Deep Space de Festival Internacional  Ars Electrónica 2022, en Linz, Austria.
Estamos muy orgullosos de haber acompañado a la artista en su proceso creativo." text1=" El caso de Jessica fué especial para nosotros ella poseía diferentes TACs (tomografìa computarizada) de frutas y verduras y necesitaba hacer una limpieza aprendiendo en el proceso cómo organizar las herramientas
 y trabajar sobre las tomografías.Por lo tanto al poner manos a la obra nos encontramos con bananas, cestas completas de fruta,. frutilla.durazno, manzanas. 
" img="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/ff7bb1fb-656e-48ec-f775-b426ff791700/Tissue" />


</div>
        </div>
    )
}

export default Testimonial;