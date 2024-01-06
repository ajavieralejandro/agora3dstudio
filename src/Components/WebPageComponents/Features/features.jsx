import Gallery from '../Gallery';
const Features = () =>{
    return (
        <>
        <div className="grid md:grid-cols-2 grid-cols-1 ">
            
            <div>
            <section class="bg-black sticky">
    <div class="container px-6  mx-auto">

        <div class="grid grid-cols-1 gap-8   ">
            <div class="flex flex-col items-center p-6 space-y-3 text-center  rounded-xl ">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white"> Diseño Responsive</h1>

                <p class="text-gray-500 dark:text-gray-300">
                   Utilizamos distintas tecnologías para que tu proyecto pueda adaptarse a diversos clientes 
                </p>

            
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center  rounded-xl ">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Comunicación de API's</h1>

                <p class="text-gray-500 dark:text-gray-300">
                </p>

              
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center  rounded-xl ">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Zero Configuration</h1>

                <p class="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

           
            </div>

          
        </div>
    </div>
</section>
            </div>
            <div>
                <Gallery />
            </div>
        </div>
        </>
    )
}

export default Features;