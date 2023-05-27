import React from 'react';
import '../css/skills.css';

import Verified from '../img/verified.png'

export default function Skills() {
  return (
    <div className='skills'>
      <br /><br />
      <h1>Skills</h1>
      <h5 id="techlvl">My technical level</h5>
      <br /><br />
      <div className="sub_skills">
        <div className="sub_sub_skills">
          <div className="sub_sub_skills0">
            <h3> <b>Frontend Developer</b> </h3>
          </div>  
          <div className="sub_sub_skills1">
            <div> <img src={Verified} alt ='verified-subject' /> </div>
            <div> 
              <h3>HTML</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills2">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>Bootstrap</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills3">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>CSS</h3>
              <h5>Advanced</h5>
            </div>
          </div>
          <div className="sub_sub_skills4">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>Git</h3>
              <h5>Basic</h5>
            </div>
          </div>
          <div className="sub_sub_skills5">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>JavaScript</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills6">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>React</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
        </div>


        <div className="sub_sub_skills">
          <div className="sub_sub_skills0">
            <h3> <b>Backend Developer</b> </h3>
          </div>
          <div className="sub_sub_skills1">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>PHP</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills2">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>MySQL</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills3">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>Node JS</h3>
              <h5>Basic</h5>
            </div>
          </div>
          <div className="sub_sub_skills4">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>SQL</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills5">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>Mongo DB</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills6">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>Next JS</h3>
              <h5>Intermediate</h5>
            </div>
          </div> 
        </div>
      </div>

      <div className="sub_skills">
        <div className="sub_sub_skills">
          <div className="sub_sub_skills0">
            <h3> <b>Programming Languages</b> </h3>
          </div>  
          <div className="sub_sub_skills1">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>C</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills2">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>C++</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills3">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>Java</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills4">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>Python</h3>
              <h5>Basic</h5>
            </div>
          </div>
          <div className="sub_sub_skills5">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>JavaScript</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills6">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>React</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
        </div>


        <div className="sub_sub_skills_2">
          <div className="sub_sub_skills_2-0">
            <h3> <b>Curriculum</b> </h3>
          </div>
          <div className="sub_sub_skills_2-1">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>Data Structure and Algorithm</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills_2-2">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>Design and Analyis of Algorithm</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills_2-3">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>Operating System</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
          <div className="sub_sub_skills_2-4">
            <div> <img src={Verified} alt ='verified-subject'/> </div>
            <div> 
              <h3>Advanced Computer Architecture</h3>
              <h5>Intermediate</h5>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
