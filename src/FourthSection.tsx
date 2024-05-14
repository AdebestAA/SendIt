import  { useEffect, useRef, useState } from 'react'
import "./fourthSection.css"
import gsap from 'gsap'

const FourthSection = () => {
const [isAnimated,setIsAnimated] = useState<boolean>(false)
const [animatedSecondSection,setAnimateSecondSection] = useState<boolean>(false)
  const firstSectionFourth  = useRef<HTMLElement>(null)
  const secondSectionFourth = useRef<HTMLElement>(null)
  // first style
//   useEffect(()=>{
// const observer = new IntersectionObserver((entries)=>{
//   entries.forEach((item,index)=>{
// //  console.log(item);
 
//     if (item.isIntersecting) {
//       // console.log("in working");
//       gsap.fromTo(item.target,{translateX:"-100%"},{translateX:"0%",duration:"1",ease:"power1.inOut"})
//       observer.unobserve(item.target)
//     }
//     else{
//       console.log("not working");
      
//     }
//   })
// },{
//   threshold:0
// })
//  if (firstSectionFourth.current) {
//     observer.observe(firstSectionFourth.current)
//   }

//  return()=> {

//   observer.disconnect()
// }


 
//   },[firstSectionFourth])


//  i like this style better
useEffect(()=>{

  const handleScroll = ()=>{

    const firstSectionFourthEl = firstSectionFourth.current as HTMLElement 
    const secondSectionFourthEl = secondSectionFourth.current as HTMLElement
    // firstSectionFourthEl top
    const firstSectionFourthElTop = firstSectionFourthEl.getBoundingClientRect().top

     // secondSectionFourthEl top
         const secondSectionFourthElTop = secondSectionFourthEl.getBoundingClientRect().top
    const viewportHeight = window.innerHeight
    
    // triggerPoint for firstSection
    const triggerPointFirstSection = viewportHeight - firstSectionFourthElTop >= firstSectionFourthEl.offsetHeight / firstSectionFourthEl.getBoundingClientRect().height


  // triggerPoint for secondSection

  const triggerPointSecondSection = viewportHeight - secondSectionFourthElTop >= firstSectionFourthEl.offsetHeight / firstSectionFourthEl.getBoundingClientRect().height
    // console.log(Math.ceil( firstSectionFourthEl.getBoundingClientRect().height));

    // for firstSection

    if (triggerPointFirstSection  && !isAnimated ) {
      gsap.fromTo(firstSectionFourthEl,{translateX:"-100%"},{translateX:"0%",duration:"2",ease:"power1.inOut"})
      setIsAnimated(true)
    }
    else if(!triggerPointFirstSection  && isAnimated){
      setIsAnimated(false)
    }


    // for secondSection

    if (triggerPointSecondSection && !animatedSecondSection) {
     gsap.fromTo(secondSectionFourthEl,{translateX:"100%",opacity:"0.4"},{translateX:"0%",opacity:"1",duration:"2",ease:"power1.inOut"})
      setAnimateSecondSection(true)
}
else if(!triggerPointSecondSection && animatedSecondSection){
  setAnimateSecondSection(false)

}
  }

window.addEventListener("scroll",handleScroll)

return ()=> window.removeEventListener("scroll",handleScroll)

},[isAnimated,animatedSecondSection])


  return (
    <div className='fourth-section'>
     <section className='first-section-fourth' ref={firstSectionFourth}>
<img src="./handframe.jpg" alt="" />
     </section>
     <section className='second-section-fourth' ref={secondSectionFourth}>
      <span>
        <img src="./Frame.png" alt="frame" />
        Anywhere,Anytime,with sendit
        </span>
      <div>Seamless Transaction on our mobile app</div>
      <p>Paying your bills and sending money is easier with sendit mobile app</p>
      <button>Download app</button>
     </section>

    </div>
  )
}

export default FourthSection
