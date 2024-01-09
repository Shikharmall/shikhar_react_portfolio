import '../css/content.css';
import Shikhar from '../img/download.png';
import Sent from '../img/sent.png';
import React from 'react';

import { useNavigate } from 'react-router-dom';

export default function Content() {
  const navigate = useNavigate();

  const goToContact =()=>{
    navigate('contact');
  };

  return (
    <div className='content'>
        <div className="sub_content1">
            <h1>Hi,</h1>
            <h1>I'am <span id="lgt-blue">Shikhar</span></h1>
            <h1>Full Stack Developer<span id="lgt-blue">!</span></h1>
            <br></br>
            <br></br>
            <button onClick={() => goToContact()}>
              <div className="contbtn">
                <p>Contact &nbsp;</p> 
                <img src={Sent} alt="sent"/> 
              </div>
            </button>
        </div>
        <div className="sub_content2">
            <img src={Shikhar} alt="Shikhar"/>
        </div>
       
    </div>
  )
}
