import { useState } from "react";

const ArtistCard = ({img,name,text1,text2
})=>{
    const [visible,setVisible] = useState(false);

    return(
        <>
        <section >
    <div class=" ">
        

        <main class=" w-full mt-4 md:flex md:items-center xl:mt-6">
            <div class="absolute w-full pt-12    rounded-2xl"></div>
            
            <div class="w-full   md:flex  rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <article class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-0 cursor-pointer group" style={{backgroundImage: `url("https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900")` }}>
                <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-12 hover:bg-opacity-75 transform duration-300">
                    <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        {name}
                    </h1>
                    <div class="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform  group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                      {text1}
                    </p>
                </div>
            </article>
              <div class=" md:mx-6">
                    <div>
                    <div class="container mx-auto ">
    
  <div class=" flex flex-wrap ">
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

    </div>
  </div>
</div>
                    <p class="mt-4 text-lg leading-relaxed text-white md:text-xl"> {text2}

</p>
                    </div>

                  


                </div>

              

            </div>
         
        </main>

    </div>
   

</section>
        </>
    )
}

export default ArtistCard;