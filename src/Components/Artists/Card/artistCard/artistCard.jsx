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
                        <p class="text-xl font-medium tracking-tight text-white">{name}</p>
</button></div>
                </div>
                {visible?<TissuePage/>:  <div class=" md:mx-6">
                    <div>
                    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/ff7bb1fb-656e-48ec-f775-b426ff791700/public" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/d1b218dc-8162-47e5-1ef8-ba9a2a813400/public" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/6a484d06-9bf9-4966-a1f6-a093c3501a00/public" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/71235e32-471b-47c2-b768-84a6fb483c00/public" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/74c2ec4d-64c1-4b07-bec9-47972aff4600/public" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
      </div>
    </div>
  </div>
</div>
                    <p class="mt-4 text-lg leading-relaxed text-white md:text-xl"> {text}

</p>
                    </div>

                  


                </div>}

              

            </div>
         
        </main>

    </div>
   

</section>
        </>
    )
}

export default ArtistCard;