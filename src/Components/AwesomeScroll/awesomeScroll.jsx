
import Timeline from "../Timeline/timeline";
import Testimonial from "../Artists/terstimonial/testimonial";
const AwesomeScroll = () =>{
    return(
        <>
<div class="relative">
<div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
        <Testimonial />
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
        <h2 class="text-4xl">The Second Title</h2>
        <p>Scroll Down</p>
    </div>
  
  
</div>
        </>
    )
}

export default AwesomeScroll;