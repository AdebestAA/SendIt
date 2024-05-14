import  { useEffect, useRef } from 'react'
import './index.css'
import gsap from 'gsap'

const Hero = () => {

  const firstSection = useRef<HTMLElement>(null)
  const firstSectionCover = useRef<HTMLDivElement>(null)
const secondSection = useRef<HTMLElement>(null)

  useEffect(()=>{

   
    const firstSectionCoverEl = firstSectionCover.current  as HTMLElement
  
   gsap.fromTo(firstSectionCoverEl,{top:"0%",},{top:"100%",duration:5,ease:"power3.inOut"})
  gsap.fromTo(secondSection.current,{translateX:"100%",scale:"0.2"},{translateX:"0%",scale:"1",duration:2,ease:"power2.inOut"})
const handleAnimation = ()=> {
const secondSectionEl = secondSection.current as HTMLElement
console.log("scroll");

const viewportHeight = window.innerHeight
const triggerPointSecondSecion = viewportHeight - secondSectionEl.getBoundingClientRect().top  >= secondSectionEl.offsetHeight / secondSectionEl.getBoundingClientRect().height
console.log(triggerPointSecondSecion);

if (triggerPointSecondSecion) {
  gsap.fromTo(secondSectionEl,{translateX:"100%",scale:"0.2"},{translateX:"0%",scale:"1",duration:2,ease:"power2.inOut"})
}
}
window.addEventListener("load",handleAnimation)

return ()=> window.removeEventListener("load",handleAnimation)
  },[])
  return (
 <article className='hero'>
    <section className='first-section' ref={firstSection}>

        <div className='hero-heading' >Making your banking transactions easy and seamless</div>
        <p>Save and send money to any where around the globe with ease faster than the speed of light</p>
        <button>Get started</button>
        <div className='first-section-cover' ref={firstSectionCover}></div>
    </section>
    <section className='second-section' ref={secondSection}>
<img src="./model.jpg" alt="" />

    </section>
 </article>
  )
}

export default Hero

