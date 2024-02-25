


import React, { useState ,useEffect} from 'react';
import './Nav.css';
import resume from "../../data/RAKIB.pdf"
import logo from "../../images/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function Nav() {
    const [activeSection, setActiveSection] = useState('');

    const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    function setActive(params) {
        console.log(params, '=>', activeSection);
        setActiveSection(params)
    }
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
    
      useEffect(() => {
    
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])


    return (
        <nav className='navBar'>
            <div className='logo'>    
             <img className=' logooo' src="../../../public/Play.png" alt="me" />
            </div>

            {(toggleMenu || screenWidth > 768) && (
            <div className='menu'>
                <ul className='links'>
                    <li onClick={toggleNav}><a className={`linksa ${activeSection === 'about' ? 'active' : ''}`} href="#about" onClick={() => setActive('about')} >About</a></li>
                    <li onClick={toggleNav}><a className={`linksa ${activeSection === 'exp' ? 'active' : ''}`} href="#exp" onClick={() => setActive('exp')}>Experience</a></li>
                    <li onClick={toggleNav}><a className={`linksa ${activeSection === 'con' ? 'active' : ''}`} href="#con" onClick={() => setActive('con')}>Contact</a></li>
                </ul>
                <div className='rela'>  <a id='cbtn'onClick={toggleNav} target="_blank" href={resume}> resume</a> </div>

            </div>
               )}

<div onClick={toggleNav} className="btn"> {toggleMenu ? <IoClose />:<CiMenuFries /> }</div>  
        </nav>
    );
}

export default Nav; 
