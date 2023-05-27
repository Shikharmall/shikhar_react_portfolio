import React from 'react';
import '../css/project.css';

export default function Project() {
  return (
    <div className='project'>
      <br /><br />
      <h1>Projects</h1>
      <h5>Things developed by me</h5>
      <div className='sub_project'>
        <div className='sub_sub_project'>
          
            <span id='lgt-blue'> <b>The SARUS E-Commerce Website</b> </span>
              <ul>
                <li> <b>Link: </b> <a href='http://thesarus.rf.gd' target='blank'>thesarus.rf.gd</a></li>
                <li>Online E-commerce website where one can shop items.</li>
                <li>The languages used in this project are HTML, CSS, JavaScript, and PHP.</li>
                <li>This project is under progress to be converted into MERN stack.</li>
                <li>Responsive without using bootstrap.</li>
                <li>Contains Consignment Tracking System, Payment System and cart is on progress.</li>
                <li>High use of database for storing details of customers.</li>
              </ul>

            <br/>
            <br/>

            <span id='lgt-blue'> <b>Treasure Hunt Game</b> </span>
              <ul>
                <li> <b>Link: </b> <a href='https://project19.onrender.com/' target='blank'>project19.onrender.com/</a></li>
                <li>MERN project</li>
                <li>Responsive without using bootstrap.</li>
                <li>email :  shmall.21.2020@gmail.com</li>
                <li>password : 1234</li>
                <li>This is email and password to login this game.</li>
                <li>As project is hosted on free server it can take time to load.</li>
              </ul>

            <br/>
            <br/>

            <span id="lgt-blue"> <b>React Based Portfolio</b> </span>
              <ul>
                <li> <b>Link: </b> <a href='https://shikharmall.github.io/shikhar_react_portfolio/' target='blank'>https://shikharmall.github.io/shikhar_react_portfolio/</a> </li>
                <li>React based Portfolio of myself which contain information about my qualifications and achivements.</li>
                <li>The languages used in this project are HTML, CSS, JavaScript, and React JS.</li>
                <li>This project gives client easiness for using the site by solving the loading of pages.</li>
                <li>Responsive without using bootstrap.</li>
                <li>High use of database for storing details of customers.</li>
              </ul>
          

        </div>
      </div>
    </div>
  )
}
