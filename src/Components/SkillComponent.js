import React from "react";
import {
  DiGit,
  DiNodejs,
} from "react-icons/di";
import {
  SiNestjs,
  SiMysql,
  SiMongodb,
  SiClickup,
} from "react-icons/si";
import {
  TbBrandJavascript,
  TbBrandHtml5,
} from "react-icons/tb";
import {
  FaDocker,
  FaPython,
} from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { BsFiletypeCss } from "react-icons/bs";

// Import Qdrant logo
import QdrantLogo from "../Images/logomark-white.svg";

const skillData = [
  {
    category: "Languages",
    items: [
      { title: "HTML 5", icon: <TbBrandHtml5 className="techLogo" /> },
      { title: "CSS", icon: <BsFiletypeCss className="techLogo" /> },
      { title: "Javascript", icon: <TbBrandJavascript className="techLogo" /> },
      { title: "Python", icon: <FaPython className="techLogo" /> },
      { title: "Java", icon: <FaJava className="techLogo" /> },
    ],
  },
  {
    category: "Frameworks & Databases",
    items: [
      { title: "NodeJs", icon: <DiNodejs className="techLogo" /> },
      { title: "NestJs", icon: <SiNestjs className="techLogo" /> },
      { title: "MySQL", icon: <SiMysql className="techLogo" /> },
      { title: "MongoDB", icon: <SiMongodb className="techLogo" /> },
      {
        title: "Qdrant",
        icon: <img src={QdrantLogo} alt="Qdrant" className="techLogo" />,
      },
    ],
  },
  {
    category: "Tools & Systems",
    items: [
      { title: "Git", icon: <DiGit className="techLogo" /> },
      { title: "Docker", icon: <FaDocker className="techLogo" /> },
      { title: "Clickup", icon: <SiClickup className="techLogo" /> },
    ],
  },
];

const SkillComponent = ({ id }) => {
  return (
    <div className="skill-container" id={id}>
      <div className="skill-header">My Skills</div>
      {skillData.map((section) => (
        <div className="skill-box" key={section.category}>
          <h2 style={{ textAlign: "center" }}>{section.category}</h2>
          <div className="skillset">
            {section.items.map((skill) => (
              <abbr title={skill.title} key={skill.title}>
                {skill.icon}
                <h3 style={{ textAlign: "center" }}>{skill.title}</h3>
              </abbr>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillComponent;
