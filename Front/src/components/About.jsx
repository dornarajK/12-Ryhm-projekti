import React from 'react'
import img from '../img/AboutUs.jpg';
import '../Style/About.css'
const About = () => {
  return (
    <>

      <div className='imgediv'>
        <img src={img} class="imge" alt="."></img>
      </div>

      <div className='divp'>
        <p className='ptext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam id numquam natus aperiam dignissimos dolorum. Ex fugit sint aperiam odio. Minima consequatur, reiciendis provident officia nesciunt vel suscipit qui perspiciatis?</p>
      </div>

    </>
  )
}

export default About
