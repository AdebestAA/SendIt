import { useEffect, useRef, useState } from 'react'
import "./fifthSection.css"
import  dataz  from './data'
const FifthSection = () => {
    const [data,setData] = useState<{id:number,name:string,text:string}[]>(dataz)
    // const [widthOfCards,setWidthOfCards] = useState(0)
    // const [numberInMeddle,setNumberInMiddle] = useState(0)
    const [translateValue,setTranslateValue] = useState(0)
    const [completed,setCompleted] = useState(false)
    
    const slideContainer = useRef<HTMLElement>(null)


   
useEffect(()=>{
    const interValId  = setInterval(()=>{       
    if (completed) {
    setTranslateValue(translateValue - 1)

    if (translateValue <= 1) {

    setCompleted(false)
    }
    return
    }
    if (!completed) {
    setTranslateValue(translateValue + 1)
    if (translateValue >= data.length - 5) {
    setCompleted(true)          
    }
    }



    },2000)


return ()=> clearInterval(interValId)
},[translateValue])

    // const handleSlideLeft = ()=>{
        // setNumberInMiddle(prev => prev- 1)
    //     const getLengthOfSlideContainer = slideContainer.current?.getBoundingClientRect().width

    // console.log(getLengthOfSlideContainer);
// if (translateValue <= 0 ) {
//     return
// }
//     setTranslateValue(prev => prev - 1)       
    
// }

// const handleSlideRight = ()=>{
//     console.log("subtract",translateValue - data.length);
    
//         if (( data.length - translateValue) <= 4) {
    
            
//         return
//     }
//     setTranslateValue(prev => prev + 1)        

//     }
    
    
  return (
    <div className='fifth-section'>
        <header>
        <p> <img src="./Frame.png" alt="frame" />testimonies</p>
            <div>what our satisfied users say</div>
        </header>
        <section className='slider-all-container'>

 {/* <article className='testimonies-cards-container' ref={slideContainer}>
    {data.map((item,index)=>{

let classToGive = "testimonies-card others"
if (index === translateValue) {
    classToGive = "testimonies-card active"
}
if (index === translateValue + 1) {
    classToGive = "testimonies-card next"
}
if ( index === translateValue + 2) {
    classToGive = "testimonies-card third" 
}
if ( index === translateValue + 3) {
    classToGive = "testimonies-card fourth"
}
if (  index === translateValue + 4 ) {
    
    classToGive ="testimonies-card fifth"
}
if ( index === translateValue - 1) {
    classToGive ="testimonies-card prev"
}


return (
    <div key={index} className={classToGive}>
    <h1>{item.name}</h1>
    <p>{item.text}</p>

    </div>
        )
    })}
 </article> */}
  <article className='testimonies-cards-container' ref={slideContainer}>
    {data.map((item:{id:number,name:string,text:string,img?:string},index:number)=>{

let classToGive = "testimonies-card others"
if (index === translateValue) {
    classToGive = "testimonies-card active"
}
if (index === translateValue + 1) {
    classToGive = "testimonies-card next"
}
if ( index === translateValue + 2) {
    classToGive = "testimonies-card third" 
}
if ( index === translateValue + 3) {
    classToGive = "testimonies-card fourth"
}
if (  index === translateValue + 4 ) {
    
    classToGive ="testimonies-card fifth"
}
if ( index === translateValue - 1) {
    classToGive ="testimonies-card prev"
}


return (
    <div key={index} className={classToGive}>
        <div className='inherit-height-and-width'>

{item?.img &&  (
    <img src={item.img} alt={item.name} className='image'/>)}
<aside>
    <h1>{item.name}</h1>
    <p>{item.text}</p>
</aside>
    </div>
    </div>
        )
    })}
 </article>
    </section>
    <div className='slidespan-container'>
    {data.map((_,index)=>{

        return(
            <span key={index} className={index === translateValue ? "slidespan span-active" : "slidespan"}></span>
        )
    })}
 </div>

 {/* <button className='slide-btn' onClick={handleSlideLeft}> {"<"} </button>
 <button className='slide-btn' onClick={handleSlideRight}> {">"} </button> */}
 
    </div>
  )
}

export default FifthSection
