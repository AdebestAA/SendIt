import React from 'react'
import "./sixthSection.css"

const SixthSection = () => {
  return (
   <footer className='sixth-section'>

<article>

    <div>lets keep in touch with you and give you updates</div>
    
    <form >
        <input type="text"
        placeholder='Enter your email'
        />
        <button>signup</button>
    </form>
   
</article>
    <p className='copyright'>copyright sendit {new Date().getFullYear()}</p>
   </footer>
  )
}

export default SixthSection
