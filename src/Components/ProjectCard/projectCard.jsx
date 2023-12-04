import React from "react";

const ProjectCard = ()=>{
    return(
        <>
         <article class="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
            <div class="max-h-70 overflow-hidden">
                <img class="w-full h-auto" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/474c370e-2a59-42cf-442f-11b7b2227300/public"
                    alt="" />
            </div>
            <div class="p-7 my-auto pb-12 ">
                <h1 class="md:text-2xl text-md font-semibold text-gray-700">Visit Mordor</h1>
                <p class="md:text-xl text-sm font-light leading-relaxed text-gray-400 mt-5">
                    Super creative and colorful illustrations by Matheus Lopes. Check out more of his amazing artworks in his portfolio.
                </p>
            </div>
        </article>
        </>
    )
}

export default ProjectCard;