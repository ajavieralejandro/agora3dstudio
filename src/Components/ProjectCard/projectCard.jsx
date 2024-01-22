import React from "react";

const ProjectCard = ({text,title})=>{
    return(
        <>
    
<a href="#" class="block w-full md:max-w-sm p-6  rounded-lg shadow   bg-gray-900 hover:bg-gray-500">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-white">{title}</h5>
<p class="font-normal text-white ">{text}</p>
</a>

        </>
    )
}

export default ProjectCard;