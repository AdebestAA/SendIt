import { SyntheticEvent, useEffect, } from 'react'

import './index.css'
import { FaBars } from "react-icons/fa6";
// import "Group.png"

const Navbar = ({navRef}:{navRef:any}) => {


  useEffect(()=>{
 // Create a GSAP timeline
  // const tl = gsap.timeline();
  // const yTl = gsap.timeline()



  },[])

  const handleOpenNav = (e:SyntheticEvent)=>{
    e.stopPropagation()
    const navReference = navRef.current as unknown as HTMLElement
navReference.style.left = "70%"

  }


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
