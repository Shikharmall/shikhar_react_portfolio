import React from 'react';
import '../css/About.css';
import social1 from '../img/shikhar_red.jpg';
import Badge from '../img/badge.png';
import Bag from '../img/bag.png';
import Support from '../img/support.png';

export default function About() {
  return (
    <div className="aboutme">
        <br /><br />
        <h1>About Me</h1>
        <h5>My introduction</h5>
        <br/>

        <div className='sub_aboutme'>

          <div className='sub_sub_aboutme1'>
            <img src={social1} alt='shikhar'/>
          </div>

          <div  className='sub_sub_aboutme2'>
            <div className='sub_sub_sub_aboutme2'>
              <div className="sub_sub_sub_sub_aboutme2">
                <img src={Badge} alt='badge'/>
                <h3>Experience</h3>
                <h3>1+ Years</h3>
              </div>
              <div className="sub_sub_sub_sub_aboutme2">
                <img src={Bag} alt='bag'/>
                <h3>Completed</h3>
                <h3>13+ Projects</h3>
              </div>
              <div className="sub_sub_sub_sub_aboutme2">
                <img src={Support} alt='support'/>
                <h3>Support</h3>
                <h3>Online 24/7</h3>
              </div>
            </div>
              <p>Hello , My name is Shikhar Mall. I have completed my high school in year 2017 in school named <b>The Pillars Public School</b>, Gorakhpur Uttar Pradesh  with a grade of 9.6 CGPA .Afterthat I joined <b>Madhav Public School</b>, Gorakhpur Uttar Pradesh for my intermediate in which I scored 85.6% with 93% in PCM(physics, chemistry ,maths). Currently I am doing my undergratuation in Bachelor of Technology in <b>Computer Science and Engineering</b> in the state government college <b>Madan Mohan Malviya University of Technology</b>, Gorakhpur Uttar Pradesh and my current CGPA is 7.7 . I would be completing my graduation on May,2024 .</p>
          </div>

        </div>

    </div>
  )
}
