import React ,{useRef}from 'react'
import './contact.css'
import facebook from '../../assets/all-facebook.png'
import Instagram from '../../assets/all-insta.png'
import Twiter from '../../assets/all-twit.png'
import Github from '../../assets/all-github.png'
import emailjs from '@emailjs/browser';

function Contacts() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tkzdzhk', 'template_41gk82r', form.current, 'bFIvrYeyPFRXsxmWhn5QN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <section id='contactPage'>
        
        <div id='contact'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='ContactDesc'>Please fill out txxhe form below to discuss any work opportunities..</span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text " className='name' placeholder='Your Name ' name='user_name'/>
            <input type="email " className='email' placeholder='Your Email ' name='user_email'/>
            <textarea name='message' rows="5" placeholder='Your message' className='msg'></textarea>
            <button className='submitBtn' type='submit' value="send">Sbmit</button>
            <div className='links'>
             
             <a href='#'> <img src={facebook} alt='icon-1' className='link' id='face'/></a>
             <a href='#'>  <img src={Instagram} alt='icon-2' className='link' id='insta'/></a>
             <a href='#'> <img src={Twiter} alt='icon-3' className='link' id='twit'/></a>
             <a href="https://github.com/divyesh-dodiya" target='_blank'> <img src={Github} alt='icon-4' className='link' id='gh'/></a>

            </div>


          </form>
        </div>
      </section>
    </>
  )
}

export default Contacts;