import React from 'react'
import AboutImg from "../assets/images/about.webp";
import {Link} from 'react-router-dom'

 function About() {
  return (
    <>
    <div className={`custom_About bg-[#16122e] px-5 flex pt-24 min-h-screen`} id="About">

            <div className={`w-full px-2`}>
            <img src={AboutImg} className={`w-130 `} alt="" />
        </div>

        <div className={`w-full px-2`}>
            <h1 className={` text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-purple-200 to-pink-900 text-transparent bg-clip-text pt-10 `}>About Me</h1>
            <p className={`text-amber-100 line-clamp-6`}>As a Full Stack Web Developer with 1.6 years of experience, I specialize in building scalable and high-performance web applications. With a Bachelor's in Computer Applications from Maharishi Dayanand University, I have a strong foundation in MERN Stack, Next.js, WebSocket, and SQL/MongoDB databases. My expertise spans React.js, Node.js, Express.js, Tailwind CSS, and Python, enabling me to develop dynamic frontends and efficient backend solutions. I am passionate about solving complex problems, optimizing performance, and delivering seamless user experiences.</p>

            <div className={`text-amber-50 pt-7 flex gap-5`}>
                <a  className={`border border-blue-500 text-blue-400 px-4 py-2 rounded-md text-sm hover:bg-blue-500 hover:text-white duration-500 transition`}>Resume</a>
            <a  className={`border border-gray-500 px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-gray-700 duration-300 transition`}>Contact Me</a>
            </div>
        </div>
        
    </div>
    </>
  )
}

 export default About