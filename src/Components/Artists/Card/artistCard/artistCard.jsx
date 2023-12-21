import { useState } from "react";
import TissuePage from "../../../../Pages/LandPage/TissuePage/tissueProject";

const ArtistCard = ({img,name,text})=>{
    const [visible,setVisible] = useState(false);

    return(
        <>
        <section >
    <div class=" px-6 py-10 ">
        

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full  -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <div >
                    <div>                <img class="w-96 h-auto md:mx-6 rounded-full object-cover shadow-md  md:rounded-2xl" src={img} alt="client photo" />
</div>
                    <div>
                        <button onClick={()=>setVisible(!visible)} class=" w-full  text-blue-700 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
                            {visible?<p>Ver Texto</p>:<p>Ver Galeria</p>}
</button></div>
                </div>
                {visible?<TissuePage/>:  <div class=" md:mx-6">
                    <div>
                        <p class="text-xl font-medium tracking-tight text-white">{name}</p>
                        <p class="text-blue-200 "></p>
                    </div>

                    <p class="mt-4 text-lg leading-relaxed text-white md:text-xl"> {text}

</p>

                </div>}

              

            </div>
         
        </main>

    </div>
   

</section>
        </>
    )
}

export default ArtistCard;