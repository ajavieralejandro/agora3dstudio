import HorizontalScroll from "react-scroll-horizontal";
import Navbar from "../../../Components/Navbar/navbar";
import Hero from "../../../Components/Hero/hero";
import Footer from "../../../Components/Footer/footer";
import TissueCard from "../../../Components/TissueComponents/TissueCards/tissueCard";
import TissueCard2 from "../../../Components/TissueComponents/TissueCards/tissueCard2";
import AwesomeScroll from "../../../Components/AwesomeScroll/awesomeScroll";
import './tissue.css';
export default function TissuePage() {
  const child = { width: `100%`, height: `100%` };
  const child2 = { width: `400px`, height: `100%` };

  return (
    <div className="h-screen w-screen">
        <Navbar />
        <AwesomeScroll />
        <div class="external">
  <div class="horizontal-scroll-wrapper">
    <div class="img-wrapper slower">
    <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/07051094-3480-4541-67d8-3a9fdb0b0800/public" alt=""/>

    </div>

    <div class="img-wrapper faster">
      <a href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/" target="_blank" rel="noopener">
        <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/45711dfa-7bcc-4e9f-711f-555fc8926200/public" alt=""/>
      </a>
    </div>

    <div class="img-wrapper slower vertical">
      
      <a href="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/" target="_blank" rel="noopener">
        <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/bade9527-e43c-4643-d5b0-b0cf97b0e200/public?w=248&fit=crop&auto=format&dpr=2" alt=""/>
      </a>
    </div>

    <div class="img-wrapper slower slower-down">
      <a href="https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/" target="_blank" rel="noopener">
        <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/9b53d02c-afe8-4780-167f-4079acadff00/public?w=248&fit=crop&auto=format&dpr=2" alt=""/>
      </a>
    </div>

    <div class="img-wrapper">
      <a href="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/" target="_blank" rel="noopener">
        <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/0e6474d0-cd17-41cc-a7d9-f0fba0a0c500/public?w=248&fit=crop&auto=format&dpr=2" alt=""/>
      </a>
    </div>

    <div class="img-wrapper slower">
      <a href="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/" target="_blank" rel="noopener">
        <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/1978dbfa-cb11-4917-2e93-f2560504d400/Tissue?w=248&fit=crop&auto=format&dpr=2" alt=""/>
      </a>
    </div>

    <div class="img-wrapper faster1">
      <a href="https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/" target="_blank" rel="noopener">
        <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/bb05308f-3604-441c-2423-446301bdfa00/public?w=248&fit=crop&auto=format&dpr=2" alt=""/>
      </a>
    </div>
    
    <div class="img-wrapper slower slower2">
      <a href="https://altphotos.com/photo/cafe-terrace-with-a-row-of-retro-tables-261/" target="_blank" rel="noopener">
        <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/dd1bf274-33b2-408d-cf48-99d36321f700/public" alt=""/>
      </a>
    </div>
    
    <div class="img-wrapper">
      <a href="https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/" target="_blank" rel="noopener">
        <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/40a4c57a-db1b-4f1e-14d3-c3c2ef767f00/public?w=248&fit=crop&auto=format&dpr=2" alt=""/>
      </a>
    </div>
    
    <div class="img-wrapper slower">
      <a href="https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/" target="_blank" rel="noopener">
        <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/4aa17241-9190-4338-36f3-779c42df9e00/public" alt=""/>
      </a>
    </div>
    
    <div class="img-wrapper slower last">
      <a href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/" target="_blank" rel="noopener">
        <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/474c370e-2a59-42cf-442f-11b7b2227300/public" alt=""/>
      </a>
    </div>
  </div>
 
</div>


<Footer />


    </div>
  );
}
