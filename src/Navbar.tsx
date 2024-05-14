import React, { SyntheticEvent, useEffect, useRef } from 'react'
import gsap from 'gsap';
import './index.css'
import { FaBars } from "react-icons/fa6";
// import "Group.png"

const Navbar = ({navRef}:{navRef:any}) => {


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

  const handleOpenNav = (e:SyntheticEvent)=>{
    e.stopPropagation()
    const navReference = navRef.current as unknown as HTMLElement
navReference.style.left = "70%"

  }

  // const closeNav = ()=>{
  //   console.log("playwith me");
    
  // }
  return (
    <nav >
   <figure>
      <img src="./Group.png" alt="myimage" />
   </figure>
  <button className='open-nav'  onClick={handleOpenNav}>< FaBars/></button>
      <div className='link-and-signup' ref={navRef}>
        <ul>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Features</a>
        <a href="#">Contact</a>
        </ul>
        <button className='signup-btn'>Sign up</button>
        {/* <button className='close-nav'>Cancel</button> */}
      </div>
    </nav>
  )
}

export default Navbar
