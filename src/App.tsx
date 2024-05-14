import  { useRef, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';




function App() {
  
   const navRef = useRef(null);

  useEffect(()=>{
 // Create a GSAP timeline
  // const tl = gsap.timeline();
  // const yTl = gsap.timeline()



  },[])

const handleCloseNav = ()=>{
const navReference = navRef.current as unknown as HTMLElement
navReference.style.left = "100%"

}

useEffect(()=>{
window.addEventListener("scroll",handleCloseNav)
},[])
  return (
<>
<div className='navbar-hero' onTouchEnd={handleCloseNav} onClick={handleCloseNav}>
<Navbar navRef={navRef}/>
<Hero/>
</div>
<ThirdSection/>
<FourthSection/>
<FifthSection/>
<SixthSection/>
</>
  )
}

export default App
