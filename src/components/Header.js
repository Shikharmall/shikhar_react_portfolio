import '../css/header.css';
import social1 from '../img/hamburger.png';
import social2 from '../img/close.png';
import React  , {useState} from 'react';
import {NavLink} from 'react-router-dom';

export default function Header() {

  const [showMediaIcons , setShowMediaIcons] = useState(false);

  return (
    <>
    <div className='heading'>

        <div className='sub_heading1'> 
          <p> <b>Shikhar Mall</b> </p> 
        </div>
        
        <div className='sub_heading2'>
          <NavLink to="">Home</NavLink>
          <NavLink to="about">About Me</NavLink>
          <NavLink to="contact">Contact Me</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="project">Projects</NavLink>
        </div>

        <div className='sub_heading3'>
          <img src={social1} alt='hamburger' onClick={()=>setShowMediaIcons(!showMediaIcons)} />
        </div>
      
    </div>

    <div className={showMediaIcons ? "notvanish" : "vanish"}>
      <div className='sub_headingggg'>
        <img src={social2} alt='close' onClick={()=>setShowMediaIcons(!showMediaIcons)} />
        <br /><br /><br /><br /> <br />
        
        <div className='sub_sub_headingggg'> <NavLink to="" onClick={()=>setShowMediaIcons(false)}>Home</NavLink> </div>
        <div className='sub_sub_headingggg'> <NavLink to="about" onClick={()=>setShowMediaIcons(false)}>About Me</NavLink> </div>
        <div className='sub_sub_headingggg'> <NavLink to="contact" onClick={()=>setShowMediaIcons(false)}>Contact Me</NavLink> </div>
        <div className='sub_sub_headingggg'> <NavLink to="skills" onClick={()=>setShowMediaIcons(false)}>Skills</NavLink> </div>
        <div className='sub_sub_headingggg'> <NavLink to="project" onClick={()=>setShowMediaIcons(false)}>Projects</NavLink> </div>
      </div>
    </div>

  </>
  )
}
