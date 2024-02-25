import React from "react";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import "./Contact.css";

function Contact(params) {
  return (
    <div className="con slides" id="con">
      <div className="mcon">
        <div>
        <div className="margintop">
          <h1 className="whats">What’s Next?</h1>
          </div>
          <div className="margintop">
          <h1 className="chead">Get In Touch</h1>
          </div>
          <div className="margintop">
          <p className="cbody">
           currently  I’m looking for any new opportunities, my
            inbox is always open.
            <br></br>  Whether you have a question or just want to
            say hi, I’ll try my best to
            <br></br> get back to you as soon as possible!
          </p>
          </div>
          <div className="margintop">
            <a className="cbtn" href="mailto:abdurrakibshaikh20@gmail.com">
              say hello
            </a>

          </div>
        </div>
      </div>
      <div className="footer">
        <div className="solink">
          <div className="uldiv">
            <ul>
              <li>
                <a className="a" target="_blank" href="https://www.linkedin.com/in/abdur-rakib-shaikh/">
                {" "}
                <LuInstagram className="changeColor" />{" "}
                </a>
               
              </li>
              <li>
                <a className="a" target="_blank" href="https://github.com/whispersrakib">
                {" "}
                <LuGithub className="changeColor" />{" "}
                </a>
              
              </li>
              <li>
                <a className="a" target="_blank" href="https://www.instagram.com/its__rakib__/">
                {" "}
                <LuLinkedin className="changeColor" />{" "}
                </a>
               
              </li>
            </ul>
          </div>

          <div className="ling"></div>
        </div>
        <div className="copyrignt">
          <p>Designed & Built by Rakib</p>
        </div>
        <div className="mail changeColor">
          <p>
          <a className="a none" href="mailto:abdurrakibshaikh20@gmail.com">
            
             abdurrakibshaikh20@gmail.com</a></p>
          <div className="ling"></div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
