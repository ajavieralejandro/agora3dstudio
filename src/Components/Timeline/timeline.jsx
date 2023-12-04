import './timeline.css';
import Gallery from '../Gallery/gallery';

const Timeline = () =>{
    return(
      <section>
          <div class="bg-black text-white py-8">
          <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p class="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
              <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
              <p class="text-sm md:text-base text-gray-50 mb-4">
                Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the
                fest.
              </p>
            
            
            </div>
            <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div class="container mx-auto w-full h-full">
              <Gallery />
            </div>
          </div>
        </div>
        </div>
        </section>
    )
}

export default Timeline;