import React from "react";
import Projects from '../../Components/Projects/projects';
import Features from "../../Components/WebPageComponents/Features/features";
import Logos from "../../Components/Logos/logos2";
import Navbar from '../../Components/Navbar/navbar';
import Footer from "../../Components/Footer/footer";
import Contact from "../../Components/Contact/contact";
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
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <Features />

</div>

<Contact />

</div>
<Footer />

</div>
</>
    )
}

export default WebPages;