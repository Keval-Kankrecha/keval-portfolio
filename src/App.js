import React from 'react';
import './index.min.css';
import ParticlesComponent from './Components/ParticlesComponent';
import NavbarComponnent from './Components/NavbarComponent';

import AnimatedCursor from "react-animated-cursor"
import HeaderComponent from './Components/HeaderComponent';
import SkilComponent from './Components/SkillComponent';
import FooterComponent from './Components/FooterComponent';
import ProjectComponent from './Components/ProjectComponent';
import ContactFormComponent from './Components/ContactFormComponent';
import AboutComponent from './Components/AboutComponent';

const App = () => {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: '#ffffff',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: '#F94892'
        }}
      />
      <div className="App"> <div className="particles-background">
        <ParticlesComponent id="particles" />
      </div>
        <NavbarComponnent />
        <HeaderComponent />
        <AboutComponent id="about"/>
        <SkilComponent id="skill"/>
        <ProjectComponent
          id="project"
          className="odd"
          projectTitle="Aayush Hospital"
          projectDesc="By this Web-Application Patients can view various details of hospital like available specialization, doctor, resources.Patients can book appointment for specific doctor and view status for booked appointment, view/upload their medical report.Receptionist manage upcoming appointments and view report uploaded by user."
          projectLink="https://github.com/KevalKankrecha-2/MERN-Hospital/tree/development"
          deployedProjectLink="#"
          projectImg={require('./Images/ProjectHospital.png')}
        />
        <ProjectComponent
          projectTitle="Yogi Nagar Yuvak Madal"
          projectDesc="Through this web application, the admin can efficiently manage participants and various Sabha details, including present participants and activities conducted during the event. Admins have the flexibility to view Sabha details based on their specific requirements."
          projectLink="https://github.com/KevalKankrecha-2/YOGINAGARYUVAK-MANDAL"
          deployedProjectLink="#"
          projectImg={require('./Images/ProjectYoginagarYuvakMandal.png')}
        />
        <ContactFormComponent id="contact"/>
        <FooterComponent />
      </div>
    </>

  );
}

export default App;
