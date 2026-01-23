import React from "react";
import imgg from "../assets/images/skillimg.webp";

import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiExpress,
  SiGit,
} from "react-icons/si";

function MySkill() {
  return (
    <>
      <div
        className={`bg-gradient-to-br from-[#050816] via-[#0b0f2a] to-[#090118] text-white px-6 py-14 min-h-screen`}
      >
        <h2 className={`text-4xl font-bold mb-12 sm:px-10`}>
            <span className={`bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent`}>My Tech Skill</span>
        </h2>
        
        <div className={`grid sm:grid-cols-2 gap-4 sm:px-15`}>
             <div className={`grid grid-cols-2 sm:grid-cols-2 gap-6`}>
          <div
            className={`flex flex-col items-center justify-center p-4 bg-[#1e293b] rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg`}>
            <SiHtml5 className={`text-yellow-400`}></SiHtml5>
            HTML
          </div>
          <div
            className={`flex flex-col items-center justify-center p-4 bg-[#1e293b] rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg`}>
            <SiCss3 className={`text-blue-500`}></SiCss3>
            CSS
          </div>
          <div
            className={`flex flex-col items-center justify-center p-4 bg-[#1e293b] rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg`}>
            <SiJavascript className={`text-yellow-400`}></SiJavascript>
            javaScript
          </div>
          <div
            className={`flex flex-col items-center justify-center p-4 bg-[#1e293b] rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg`}>
            <SiReact className={`text-cyan-400`}></SiReact>
            React js
          </div>
          <div
            className={`flex flex-col items-center justify-center p-4 bg-[#1e293b] rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg`}>
            <SiTailwindcss className={`text-teal-400`}></SiTailwindcss>
            Tailwind
          </div>
          <div
            className={`flex flex-col items-center justify-center p-4 bg-[#1e293b] rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg`}>
            <SiNodedotjs className={`text-green-500`}></SiNodedotjs>
            Node js
          </div>
          <div
            className={`flex flex-col items-center justify-center p-4 bg-[#1e293b] rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg`}>
            <SiGit className={`text-orange-600`}></SiGit>
            Git
          </div>
          <div
            className={`flex flex-col items-center justify-center p-4 bg-[#1e293b] rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg`}>
            <SiMysql className={`text-blue-400`}></SiMysql>
            MySql
          </div>
        </div>

        <div className={` flex justify-center items-center`}>
          <img src={imgg} className={`w-100  object-cover object-center`} alt="skillimg" />
        </div>
        </div>

       

        
      </div>
    </>
  );
}

export default MySkill;
