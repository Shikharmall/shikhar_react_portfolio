import React,{useState} from 'react';
import '../css/project.css';
import podcast from '../img/podcast.png';
import portfolio from '../img/portfolio.png';

import ecommerce from '../img/ecommerce.png';




export default function Project(){

    const [isHovered1, setIsHovered1] = useState(false);
  
    const handleHover1 = () => {
      setIsHovered1(!isHovered1);
    };

    const handleHover11 = () => {
      setTimeout(() => {
        setIsHovered1(!isHovered1);
      }, 5000);
      
    };

    const [isHovered2, setIsHovered2] = useState(false);
  
    const handleHover2 = () => {
      setIsHovered2(!isHovered2);
    };

    const handleHover21 = () => {
      setTimeout(() => {
        setIsHovered2(!isHovered2);
      }, 5000);
      
    };

    const [isHovered3, setIsHovered3] = useState(false);
  
    const handleHover3 = () => {
      setIsHovered3(!isHovered3);
    };

    const handleHover31 = () => {
      setTimeout(() => {
        setIsHovered3(!isHovered3);
      }, 5000);
      
    };

    //const content = isHovered ? 'Hovered Content' : 'Original Content';
  
  
  return (
    <div className='project'>
      <br /><br />
      <h1>Projects</h1>
      <h5>Top three projects of mine</h5>
      <br />
      
      <div className='sub_project'>

        <div className="sub_project1">
          
          <img src={podcast} alt="projectimg" onMouseOver={handleHover1} onMouseOut={handleHover11}/>

          <div className="sub_sub_project1" id={isHovered1 ? "visibleyes":"visibleno"}>

            <center>
              <h2>The SARUS Podcast</h2>
            </center>
            
            <p>
            	<span id='lightblue'>•</span> The languages used in this project are CSS , JavaScript , NodeJS , ExpressJS and MongoDB. <br />
              <span id='lightblue'>•</span> Here users can create his channel and add many podcast on his channel. <br />
              <span id='lightblue'>•</span> This project has a secure login system protected by JWT authentication and users have to also verify their identity via email verification.	 <br />           
              <span id='lightblue'>•</span> Users can create seasons of his podcast and upload his podcast video. <br />
	            <span id='lightblue'>•</span> Viewers can subscribe their favorite channel. They can search their favorite channel and podcast.
            </p>

            <br />

            <center>
              <a href="https://github.com/Shikharmall/podcast" target='_blank' rel="noreferrer">Visit Project</a>
            </center>

          </div>

        </div>
        

        <div className="sub_project1">

          <img src={portfolio} alt="projectimg" onMouseOver={handleHover2} onMouseOut={handleHover21}/>

          <div className="sub_sub_project1" id={isHovered2 ? "visibleyes":"visibleno"}>

            <center>
              <h2>Portfolio</h2>
            </center>
            
            <p>
            	<span id='lightblue'>•</span> The languages used in this project are HTML, CSS, JavaScript and ReactJS. <br />
              <span id='lightblue'>•</span> This project contains a deep knowledge about me. <br />
              <span id='lightblue'>•</span> It is single page application and also has feature of navigation without loading which reduces server load.	 <br />           
              <span id='lightblue'>•</span> It also contains the project which is developed by me or on-developing phrase.
            </p>

            <br />

            <center>
              <a href="https://Shikharmall.github.io/shikhar_react_portfolio" target='_blank' rel="noreferrer">Visit Project</a>
            </center>

          </div>

        </div>

        <div className="sub_project1">
          <img src={ecommerce} alt="projectimg" onMouseOver={handleHover3} onMouseOut={handleHover31}/>

          <div className="sub_sub_project1" id={isHovered3 ? "visibleyes":"visibleno"}>

            <center>
              <h2>The SARUS E-Commerce</h2>
            </center>
            
            <p>
            	<span id='lightblue'>•</span> Online E-commerce website where owner can sell his products. <br />
              <span id='lightblue'>•</span> The languages used in this project are HTML, CSS, JavaScript, and PHP. <br />
              <span id='lightblue'>•</span> This project is full stack which contains both frontend and backend. 	 <br />           
              <span id='lightblue'>•</span> Full responsive website without using bootstrap. <br />
	            <span id='lightblue'>•</span> Contains Consignment Tracking System, Payment System and a Cart System. <br />
              <span id='lightblue'>•</span> It also contains very secure owner dashboard.
            </p>

            <br />

            <center>
              <a href="http://thesarus.rf.gd" target='_blank' rel="noreferrer">Visit Project</a>
            </center>

          </div>
        </div>

      </div>


 
    </div>
  )
}


