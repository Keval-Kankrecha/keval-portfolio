import React from 'react';
import cartoon from "../Images/header-img.png";

export default function HomeBanner({id}) {
  return (
   
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Keval Kankrecha</div>
              <div className="staticTitle">
                Software
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li>+<span>Developer</span></li>
              </ul>-
              <div>
              <a className='btn' href="https://www.linkedin.com/in/kevalkankecha/" target="_blank" rel="noopener noreferrer">Hire Me</a>
              </div>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div>
    </div>
  )
}
