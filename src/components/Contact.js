import '../css/contact.css';
import React from 'react';
import Mail from '../img/mail.png';
import Whatsapp from '../img/whatsapp.png';
import Phone from '../img/phone.png';

export default function Contact() {
  return (
    <div className='contact'>
      <br /><br />
      <h1>Contact Me</h1>
      <h5>Get in touch</h5>

      <div className='sub_contact'>

        <div className='sub_sub_contact'>
          <br/> <br />
          <h3>Talk to me</h3>

          <div className='sub_sub_sub_contact'>
            <img src={Mail} alt="mail" />
            <h4>Email</h4>
            <h4>shmail.21.2020@gmail.com</h4>
            <a href="#contactviascroll">Write me &rarr;</a>
          </div>

          <div className='sub_sub_sub_contact'>
            <img src={Whatsapp} alt="mail" />
            <h4>Whatsapp</h4>
            <h4>xxxxx xxxxx</h4>
            <a href="#contactviascroll">Write me &rarr;</a>
          </div>

          <div className='sub_sub_sub_contact'>
            <img src={Phone} alt="mail" />
            <h4>Phone call</h4>
            <h4>xxxxx xxxxx</h4>
            <a href="#contactviascroll">Write me &rarr;</a>
          </div>

        </div>

        <div className='sub_sub_contact1' id="contactviascroll">
          <br/> <br />
          <h3>Write me your project</h3>
          <form>
            <input type="text" name="" id="" placeholder='Enter Your Name...'/>
            <br/>
            <input type="text" name="" id="" placeholder='Enter Your email...'/>
            <br/>
            <textarea name="" id="" placeholder='Enter Your message...'/>
            <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>

      </div>
    </div>
  )
}
