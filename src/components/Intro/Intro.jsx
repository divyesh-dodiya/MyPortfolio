import React from 'react'
import './intro.css';
import {Link} from 'react-scroll';
import btnImg from './img/HireMe.png'


const Intro = () => {
  return (
   <section id='intro'>
     <div className='introContent'>
        <span className='hello'> Hello,</span>
        
        <span className='introText'>I'm <span className='introName'>Divyesh</span><br/> Frontend Developer</span>
        <p className='introPara'> Let's build something amazing together! Feel free to reach out for frontend magic that goes beyond pixels and lines of code. Together, let's create digitalexperiences that leave a lasting impression. </p>
        <Link><button className='btn'><img src={btnImg}  className='btnImg' alt='Hire'/> <h4>Hire Me</h4></button></Link>

     </div>
     <div class="lol">
       <div class="circle1"></div>
     </div>
     <div class="lol_2">
        <div class="circle2"></div>
      
     </div>
     <div class="lol_3">
        <div class="circle3"></div>
        
     </div>
   </section>
  )
}

export default Intro