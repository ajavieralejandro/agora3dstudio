import React from "react";

const About = () =>{
    return(
        
        <div class="h-screen w-screen">
        <div class=" bg-black  lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex flex-col lg:flex-row justify-between gap-8">
                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-white dark:text-white pb-4">About Us</h1>
                    <p class="font-normal text-base leading-6  text-white">We are a petit-studio in love with 3D and new technologies. Our team works passionately on projects ranging from 3D printing, product design, 3D animation, to augmented reality, virtual reality and video games. We really enjoy spending our hours between textures, polygons, voxels and enhancing projects, committing ourselves 100% to each development, in each work, with each design and object</p>
                </div>
                
<figure class="max-w-lg">
  <img class="h-auto max-w-full rounded-lg" src="https://scontent.fmdq6-1.fna.fbcdn.net/v/t1.18169-9/10176109_10153342218799535_6440414966149805355_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9b3078&_nc_eui2=AeE0xOxr2QGmnBcIDgsRBN3WG3j3IwEDtMcbePcjAQO0xy3CeEBchgmkbMfjZOTp9js&_nc_ohc=MM5yFbLKs5EAX-DlZ8B&_nc_ht=scontent.fmdq6-1.fna&oh=00_AfC3q4WuYIBoK2BS3NKeMo3O0_SxvnkLN8wdtSm3H2dggQ&oe=6591E266" alt="image description" />
</figure>

            </div>
    
        </div>
        </div>
    
    )
}

export default About;