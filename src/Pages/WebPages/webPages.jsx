import React from "react";
import Projects from '../../Components/Projects/projects';
import Features from "../../Components/WebPageComponents/Features/features";
import Logos from "../../Components/Logos/logos";
import Navbar from '../../Components/Navbar/navbar';
import Footer from "../../Components/Footer/footer";
const WebPages = () =>{
    return (
        <>
        <div className="bg-black">
        <Navbar />
<div class="container my-24 mx-auto md:px-6">
<div class="container my-24 mx-auto md:px-6">

  <section class="mb-32 text-center lg:text-left">
    <div class="py-12 md:px-6 md:px-12">
      <div class="container mx-auto xl:px-32">
        <div class="flex grid items-center lg:grid-cols-2">
          <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
            <div
              class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
              <h2 class="mb-2 text-3xl font-bold  text-white">
                Diseño y desarollo de Aplicaciones
              </h2>
              <p class="mb-4 font-semibold">Graphic designer</p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                Ofrecemos servicios web para crear tu sitio, desde frontEnd hasta BackEnd
              </p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              Nos encargamos del diseño como así también de cuestiones técnicas, y trabajamos con tecnologías que incorporan 
              modelos 3d para obtener sitios dinámicos. También ofrecemos servicios de apps para celulares y realidad aumentada. 
              </p>
              <ul class="flex justify-center lg:justify-start">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:mb-12 lg:mb-0">
            <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/080.jpg"
              class="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <Features />

</div>
<section class="p-12">
    <div class="relative flex">
        <div class="min-h-screen lg:w-1/3"></div>
        <div class="hidden  lg:block"></div>

        <div
            class="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                What our <span class="text-blue-500">customers</span> <br /> are saying
            </h1>

            <div class="mt-10 lg:mt-20 lg:flex lg:items-center">
            <img class="object-cover	  w-full lg:w-[32rem] rounded-lg h-96" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                <div class="mt-8 lg:px-10 lg:mt-0">
                    <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                        Help us improve our productivity
                    </h1>

                    <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                        “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                        tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                        aperiam dolorum, obcaecati corrupti aspernatur a. ”
                    </p>

                    <h3 class="mt-6 text-lg font-medium text-blue-500">Ronik Ederson</h3>
                    <p class="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>
                    
                </div>
            </div>

            <div class="flex items-center justify-between mt-12 lg:justify-start">
                <button title="left arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button title="right arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>
<Logos />

<section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
      </h2>

      <p class="hidden text-gray-500 md:mt-4 md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
        sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
        quisque ut interdum tincidunt duis.
      </p>

      <div class="mt-4 md:mt-8">
        <a
          href="#"
          class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>

  <img
    alt="Violin"
    src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>
<Footer />

</div>
</div>
</>
    )
}

export default WebPages;