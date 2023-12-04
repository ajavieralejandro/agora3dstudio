import React from "react";

const Collage = () => {
    return( 
        <>
        <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
            <img class="xl:max-w-6xl" src="https://scontent.fmdq6-1.fna.fbcdn.net/v/t1.18169-9/10176109_10153342218799535_6440414966149805355_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9b3078&_nc_eui2=AeE0xOxr2QGmnBcIDgsRBN3WG3j3IwEDtMcbePcjAQO0xy3CeEBchgmkbMfjZOTp9js&_nc_ohc=MM5yFbLKs5EAX-DlZ8B&_nc_ht=scontent.fmdq6-1.fna&oh=00_AfC3q4WuYIBoK2BS3NKeMo3O0_SxvnkLN8wdtSm3H2dggQ&oe=6591E266" alt="" />
            <div class="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                
                <h2 class="text-3xl font-semibold mt-4 md:mt-10">Agora3dStudio</h2>
                <p class="my-3 text-justify font-medium text-gray-700 leading-relaxed">Queremos acompañarte, utilizando herramientas 3d y web de vanguardia en el desarrollo de tus ideas</p>
                <button class="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Read
          More</button>
            </div>
        </section>
    </section>
        </>
    )
}

export default Collage; 