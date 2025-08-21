import React from "react";
import myProfile from "../Images/profile-image2.jpg.jpg";

export default function AboutComponent({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text" style={{ textAlign: "justify" }}>
        <h3>Hey there, 👋</h3>
        I'm <span> Keval Kankrecha</span>, and I have completed my{" "}
        <span>Bechlore of Computer Engineering </span> from Darshan University,
        Rajkot. I am a passionate backend developer with strong experience in
        building scalable and reliable APIs using <span>Node.js</span> and{" "}
        <span>NestJS</span>. I have worked with both <span>relational{" "}
        (MySQL)</span> and <span>non-relational(MongoDB)</span>
        databases, along with practical exposure to{" "}
        <span>RabbitMQ and Redis</span> for handling distributed systems and
        caching.
        <br />
        <br />
        Beyond backend development, I am deeply interested in Agentic AI. I have
        worked with <span>Retrieval-Augmented Generation (RAG)</span>, GPT-based models, web
        scraping, and vector databases like <span>Qdrant</span> to design intelligent and
        adaptive AI agents.
        <br /> <br />
        Beyond my coding expertise, I am deeply spiritual, following the path of{" "}
        <span>Hinduism and Sanatan</span> Dharma, and actively volunteering at{" "}
        <span>BAPS</span> for the past few years. I hold a profound admiration
        for <span>Mahakal</span>, finding solace and inspiration in his divine
        essence. Want to know more about me? Feel free to{" "}
        <a
          className="resume"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          explore my resume.
        </a>
      </div>
      <div className="profile-photo">
        <img
          className="img"
          src={myProfile}
          alt="Profile"
          style={{ borderRadius: "25px" }}
        ></img>
      </div>
    </div>
  );
}
