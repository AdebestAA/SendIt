import { GoArrowRight } from "react-icons/go";
import "./thirdSection.css"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";


const ThirdSection = () => {

  const thirdSectionHeader = useRef<HTMLElement>(null)
  const cardContainer = useRef<HTMLDivElement>(null)
  const [animateHeader,setAnimateHeader] = useState<boolean>(false)
const [animateCardContainer,setAnimateCardContainer] = useState<boolean>(false)
  useEffect(()=>{
const thirdSectionHeaderEl = thirdSectionHeader.current as HTMLElement
const cardContainerEl = cardContainer.current as HTMLDivElement


const handleAnimation = ()=>{

const triggerCardAnimation = window.innerHeight - cardContainerEl.getBoundingClientRect().top >=cardContainerEl.offsetHeight / cardContainerEl.getBoundingClientRect().height
  const triggerHeaderAnimation = window.innerWidth - thirdSectionHeaderEl.getBoundingClientRect().top >= thirdSectionHeaderEl.offsetHeight / thirdSectionHeaderEl.getBoundingClientRect().height

  // for header
  if (triggerHeaderAnimation && !animateHeader) {
    gsap.fromTo(thirdSectionHeaderEl,{translateY:"-100%"},{translateY:"0%",duration:"2",ease:"power2.inOut"})
    setAnimateHeader(true)
  }
  else if (!triggerHeaderAnimation && animateHeader) {
    setAnimateHeader(false)
  }



  // for cardsAnimation

  if (triggerCardAnimation && !animateCardContainer) {
        gsap.fromTo(cardContainerEl,{translateX:"-100%"},{translateX:"0%",duration:"2",ease:"power2.inOut"})
    setAnimateCardContainer(true)
  }
  else if (!triggerHeaderAnimation && animateCardContainer) {
    setAnimateCardContainer(false)
        
  }
}

window.addEventListener("scroll",handleAnimation)

return ()=>  window.removeEventListener("scroll",handleAnimation)
  },[animateHeader,animateCardContainer])
  return (
    <div className="third-section" >
  <header className='third-section-headers' ref={thirdSectionHeader}>
    <h5>Seamless payment worldwide</h5>
    <p>Easiest way of sending,spending and securing funds globally</p>
  </header>
  <article className="card-container" ref={cardContainer}>
    {/* first card */}
<div className="card" >
<aside >
    <img src="./Vector3.png" alt="connect" />
    <h3>Global banking</h3>
    <div>transact to more than 74 countries</div>
</aside>
<button>learn more <GoArrowRight/></button>
</div>
    {/* seconds card */}
<div className="card" >
<aside >
    <img src="./Vector2.png" alt="connect" />
    <h3>Secure transactions</h3>
    <div>transact to more than 74 countries</div>
</aside>
<button>learn more <GoArrowRight/></button>
</div>
    {/* third card */}
<div className="card" >
<aside>
    <img src="./Vector1.png" alt="connect" />
    <h3>fast payment</h3>
    <div>transact to more than 74 countries</div>
</aside>
<button>learn more <GoArrowRight/></button>
</div>
  </article>
<div className="sponsors">
  <aside className="sponsors-scroll">
   <img src="./airbnb.png" alt="airbng" />
   <img src="./tesla.png" alt="tesla"  className="tesla"/>
   <img src="./don.png" alt="don" />
   <img src="./amazon.png" alt="amazon" />
   <img src="./binance.png" alt="binance" />
  </aside>
  {/* <aside className="sponsors-scroll">
   <img src="./airbnb.png" alt="airbng" />
   <img src="./tesla.png" alt="tesla"  className="tesla"/>
   <img src="./don.png" alt="don" />
   <img src="./amazon.png" alt="amazon" />
   <img src="./binance.png" alt="binance" />
  </aside> */}
</div>
    </div>
  )
}

export default ThirdSection
