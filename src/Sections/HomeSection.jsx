import React from "react";
// import { ResumeURL } from "../Constants/ProfileDetails";
import { AiOutlineFileDone } from "react-icons/ai";
import { RESUME_URL } from "../Constants";

const HomeSection = ({ reference, contactSectionRef }) => {
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const executeScroll = (reference) => {
    scrollToSection(reference);
  };

  return (
    <div
      className="flex flex-col items-center w-full px-10 md:px-48 pt-12 pb-24 md:py-24 md:min-h-screen"
      id="homesection"
      ref={reference}
      //   data-aos="fade"
      //   data-aos-once="false"
      //   data-aos-duration="1500"
    >
      <div className="mt-20 md:mt-32 w-full flex items-start flex-col px-2 md:px-24">
        <div className="px-2 py-1 bg-lightGreen w-40 md:w-52 rounded-sm flex items-center justify-center">
          <p className="text-slateGrey font-bold font-mono text-sm md:text-base">
            Software Engineer
          </p>
        </div>
        <h2 className="text-white text-3xl md:text-6xl font-bold mt-6">
          Aman Pachori.
        </h2>
        <p className="mt-10 text-gray-400 w-full md:w-7/12">
          I am a Tech Enthusiast and a Software Engineer, seeking to leverage
          broad developement experience in a challenging role.
        </p>
        <p className="mt-2 text-gray-400 w-full md:w-7/12">
          Currently, I am pursuing my Integrated Dual Degree B.Tech in
          Information Technology from{" "}
          <span className="text-white font-bold opacity-80">IIIT Gwalior</span>.
        </p>
        {/* <button
          className="text-lightGreen text-xl font-bold mt-10 border-b-2 border-green-300 border-opacity-80 hover:text-white"
          onClick={() => executeScroll(contactSectionRef)}
        >
          LET'S CHAT!
        </button> */}
        <a
          className="bg-lightGreen py-2.5 mt-6 px-4 rounded-md text-darkGrey font-bold flex items-center hover:bg-white"
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
        >
          Download Resume{" "}
          <AiOutlineFileDone className="ml-3 font-bold text-lg" />
        </a>
      </div>
    </div>
  );
};

export default HomeSection;
