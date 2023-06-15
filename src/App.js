import "./App.css";
import { useRef, React, useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutMe from "./Sections/AboutMe";
import ContactMeSection from "./Sections/ContactMeSection";
import ExperienceSection from "./Sections/ExperienceSection";
import HomeSection from "./Sections/HomeSection";
import ProjectsSection from "./Sections/ProjectsSection";
import SkillSection from "./Sections/SkillSection";
import ResponsiveNavbar from "./Components/ResponsiveNavbar";
import Loader from "./Components/Loader";
function App() {
  const [showVideo, setShowVideo] = useState(true);

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    let timer1 = setTimeout(() => setShowVideo(false), 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <div className="font-mono bg-slateGrey h-full flex items-center flex-col">
      {showVideo && <Loader />}
      <Navbar
        homeSectionRef={homeSectionRef}
        aboutSectionRef={aboutSectionRef}
        skillsSectionRef={skillsSectionRef}
        experienceSectionRef={experienceSectionRef}
        projectsSectionRef={projectsSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <ResponsiveNavbar
        homeSectionRef={homeSectionRef}
        aboutSectionRef={aboutSectionRef}
        skillsSectionRef={skillsSectionRef}
        experienceSectionRef={experienceSectionRef}
        projectsSectionRef={projectsSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <HomeSection
        reference={homeSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <AboutMe reference={aboutSectionRef} />
      <SkillSection reference={skillsSectionRef} />
      <ExperienceSection reference={experienceSectionRef} />
      <ProjectsSection reference={projectsSectionRef} />
      <ContactMeSection reference={contactSectionRef} />
      <Footer />
    </div>
  );
}

export default App;
