import React from "react";
import "./About.css";
import hero from "../../images/rakib.png";
import line1 from "../../images/llline1.svg";
import line2 from "../../images/llline2.svg";
import line3 from "../../images/llline3.svg";

import squar1 from "../../images/squar1.svg";
import squar2 from "../../images/squar2.svg";

import resume from "../../data/RAKIB.pdf"



function About() {
  return (
    <div className="about slides" id="about">
      <div className="bio">
          <div className="bioHedder">
            <h1>Hello There <div className="hand"> 👋🏾</div>  !</h1>
            <h1> I'm a Frontend <br /> Developer</h1>
          </div>
          <div className="bioBody" >
            <p>My name's Abdur Rakib Shaikh.</p>
            <p>
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
          </div>

          <a className="contactMe" href="#con"><span></span> contact me</a>
          <div className="socialLinks"> 
          
            <p>Fild me at <a target="_blank" href="https://www.linkedin.com/in/abdur-rakib-shaikh/">LinkedIn </a>, <a target="_blank" href="https://github.com/whispersrakib">GitHub</a> and <a target="_blank" href="https://www.instagram.com/its__rakib__/"> Instagran</a></p>
            <p>Download <a target="_blank" href={resume}> my resume</a> (PDF)</p>
          </div>
        
      </div>

      <div className="Card">
      <div className="heroCard">
     <img className="lin1" src={line2} alt="me" />
     <img className="lin2" src={line3} alt="me" />

     <img className="box1" src={squar1} alt="me" />

   
     <div className="hero">
        <img className="heroCard-img" src={hero} alt="me" />
        </div>
     
     <img className="lin3" src={line1} alt="me" />
     <img className="box2" src={squar2} alt="me" />

     </div>
      </div>

    </div>
    
  );
}
export default About;
