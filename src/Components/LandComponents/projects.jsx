import ProjectCard from "../ProjectCard/projectCard";
import { Link } from "react-router-dom";
import About from "../Hero/About/about";
const Projects = () =>{
    return<>
	
    <div className=" grid grid-cols-1 md:grid-cols-2 ">
		
        <div> <div className=" mx-auto   dark:text-gray-100">
	<div className="flex flex-col w-full mx-auto overflow-hidden rounded">
		<img src="https://live.staticflickr.com/5703/30155520662_3f6f57b405_b.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-700">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Explora nuestro portafalio </a>
			
			</div>
			<div className="dark:text-gray-100">
				<p>Utilizamos diversas tecnologías para realizar distintos tipos de proyectos que involucran modelos 3ds. </p>
			</div>
		</div>
	</div>
		
	</div>
</div>
        <div>
        <div class="grid place-items-center gap-5">
			<ProjectCard title="Proyectos Artisticos" text="Explora nuestro trabajo acompañando a diversos artistas a realizar sus obras" />
			<ProjectCard title="Diseño Web" text="Disponemos de un portafolio de distintos sitios implementados por el estudio" />
			<ProjectCard title="Proyectos" text="Distintos proyectos donde el estudio participa y forma parte activamente." />

     
</div>		

        </div>
    </div>
	

    </>
}

export default Projects;