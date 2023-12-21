import ProjectCard from "../ProjectCard/projectCard";
import { Link } from "react-router-dom";
const Projects = () =>{
    return<>
	
    <div className=" grid grid-cols-1 md:grid-cols-2">
		
        <div> <div className="p-5 mx-auto sm:p-10 md:p-16  dark:text-gray-100">
	<div className="flex flex-col w-full mx-auto overflow-hidden rounded">
		<img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
				<p className="text-xs dark:text-gray-400">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
				</p>
			</div>
			<div className="dark:text-gray-100">
				<p>Insert the actual text content here...</p>
			</div>
		</div>
	</div>
</div></div>
        <div>
        <div class="grid h-screen place-items-center">
        <section className="p-5 mx-auto sm:p-10 md:p-1  dark:text-gray-100">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute">
				<Link to="/artists">

				<div className="flex p-2 flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracki">Proyectos </h3>
						<p className="mt-3">Explora los proyectos en los que participa el estudio.</p>
					</div>
				</Link>
				<Link to="/webPages">

					<div className="flex p-2 flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracki">Artistas</h3>
						<p className="mt-3">Brindamos acompañamiento a diversos artistas para que lleven adelante sus obras, brindadno soporte en varias tecnologías</p>
					</div>
				</Link>
					<Link to="/webPages">

					<div className="flex p-2 flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracki">Diseño Web</h3>
						<p className="mt-3">Desarrollamos aplicaciones desde sistemas web, aplicaciones móbiles y también aplicaciones de escritorio</p>
					</div>
					</Link>
				</div>
			</div>
		</div>
	</div>
</section>
</div>
        </div>
    </div>
	


    </>
}

export default Projects;