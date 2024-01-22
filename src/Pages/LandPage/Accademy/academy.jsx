import React from "react";
import Navbar from '../../../Components/Navbar/navbar';
import Footer from "../../../Components/Footer/footer";
import Contact from "../../../Components/Contact/contact";
const Academy = () => {
    return(
      <>
      <Navbar />
      <div class="">

      <section class="pt-12 -mb-24 bg-black flex flex-col justify-center">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl mx-auto">
            <div class="-mt-32 flex justify-start">
              <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            </div>
            
            <div class="md:flex hidden  justify-start -mr-28 ml-28">
              <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" />
            </div>
            
            <div class="md:-translate-y-96 md:transform md:ml-28 md:s-mr-28 p-8 shadow-xl rounded-xl overflow-hidden bg-gray-900">
              <div class="space-y-4">
                <p class="text-5xl font-bold text-white tracking-tight">
                  Agora3dAcademy
                </p>
                <p class="md:text-xl text-sm text-white">
                Ágora 3D es un espacio virtual que ofrece cursos de diseño, modelado 3d, impresión 3D, conversión de imágenes médicas y una comunidad online. Está orientado al público en general, docentes, estudiantes, investigadores, hobbistas y profesionales. Propone un lugar de intercambio e inspiración desde la comprensión del funcionamiento de una impresora 3D, usos y prácticas con el fin de desarrollar posibles aplicaciones y el diseño y modelado 3D orientado a la fabricación digital y el contenido interactivo.
Estamos a su entera disposición.

                </p>
              </div>
              <div class="grid grid-cols-2 gap-6 border-t border-b border-gray-200 my-12 py-2">
                <div>
                  <p class="text-4xl font-bold text-white">
                    2 mil 
                  </p>
                  <p class="text-xl text-white">
                    Más de 2 mil alumnos tomaron nuestros cursos 
                  </p>
                </div>
                <div>
                  <p class="text-4xl font-bold text-white">
                    3 Cursos
                  </p>
                  <p class="text-sm text-white">
                  BIOMODELOS / DISEÑO PARA PERSONAL DE SALUD / MODELADO 3D / ESCULTURA DIGITAL / IMPRESIÓN 3D                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        <Contact />
        <Footer />
        </>
    )
}

export default Academy;