import  { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './Navbar';
import Hero from './Hero';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';




function App() {
  const itemRef = useRef(null);
   const navRef = useRef(null);

  useEffect(()=>{
 // Create a GSAP timeline
  const tl = gsap.timeline();
  const yTl = gsap.timeline()


//   gsap.to(itemRef.current, {
//   x: "100%",  // Move element 100 pixels to the right
//   y: 50,   // Move element 50 pixels down
//   opacity: 1, // Set opacity to 50%
//   duration: 1,  // Animation duration in seconds
//   ease: 'bounce.in' // Easing function for smooth transition
// });

  // Animate the element from left to right
  // tl.fromTo(itemRef.current, { x: '-100%' }, { x: '0%', duration: 1, ease: 'power3.out' });
// yTl.fromTo(itemRef.current,{y:"0%",x:"0%"},{y:"300%",x:"200%",duration:2,ease:"power4.in"}).yoyo(true)

// gsap.to(itemRef.current, { scaleX: "20%", duration: 1, ease: 'power3.out' });
//  gsap.to(itemRef, { rotation: "260deg", duration: 2, repeat: -1, ease: "none" });
  // Cleanup function to prevent memory leaks (optional)
  // return () => tl.kill();
// gsap.set(itemRef.current, { opacity: 8, x: 100 });

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
