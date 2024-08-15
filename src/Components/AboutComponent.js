import React from "react";
import myProfile from "../Images/profile-image2.jpg.jpg";

export default function AboutComponent({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text"  style={{ textAlign: 'justify' }}>
        <h3>Hey there, 👋</h3>
        I'm <span> Keval </span>, and I have completed my <span>Bechlore of Computer Engineering </span> from Darshan University, Rajkot. I am
        Proficient in backend technologies, I excel in architecting solutions that translate end-user challenges into intuitive <span>APIs</span>, seamlessly integrating them for enhanced functionality. My expertise extends to <span>database</span> management, ensuring efficient data handling and retrieval, complemented by a keen understanding of frontend technologies for a comprehensive development approach.
        <br /> <br />
        Beyond my coding expertise, I am deeply spiritual, following the path of <span>Hinduism and Sanatan</span> Dharma, and actively volunteering at <span>BAPS</span> for the past few years. I hold a profound admiration for <span>Mahakal</span>, finding solace and inspiration in his divine essence. Want to know more about me? Feel free to <a className='resume' href="#" target="_blank" rel="noopener noreferrer">explore my resume.</a>
      </div>
      <div className="profile-photo">
        <img className="img" src={myProfile} alt="Profile" style={{borderRadius: "25px"}}></img>
      </div>
    </div>
  );
}
