import React from "react";
import styles from "./MainPage.module.css";
import mainImg from "../assets/images/mainImg.webp";



import { Link } from "react-router-dom";

function MainPage() {



  return (
    <>
      <div className={`customMainPage h-auto flex justify-evenly text-white pt-30 pb-10 ${styles.mainPage}`}>
        

        
        <div className={`custom_name w-auto p-5  mt-10 font-semibold`}>
          <p className={`text-sky-300 text-lg`}>Hello I'm</p>
          <p
            className={`custom_Name text-5xl font-bold
            bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300
            bg-clip-text text-transparent mt-3`}
          >
            Rahul Mehta
          </p>
          <h5 className={`custom_developer text-purple-400 text-3xl mt-4`}>
            I am Full Stack Developer
          </h5>
          <p className={`text-slate-300 mt-2 max-w-xl text-lg leading-relaxed ${styles.poppins}`}>
            I am a frontend developer and a fresher with a strong interest in building clean, responsive, and user-friendly web interfaces. I work with HTML, CSS, JavaScript, and React to create modern web applications. 
          </p>
          <div className={`p-5 mt-5 flex gap-4`}>
            <Link  className={`border border-blue-500 text-blue-400 px-4 py-2 rounded-md text-sm hover:bg-blue-500 duration-300 hover:text-white transition`}>Recent project</Link>
            <a  className={`border border-gray-500 px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-gray-700 duration-300 transition`}>Porfolio</a>
          </div>
        </div>
        <div className={` mx-11 ${styles.imgg}`}>
          <img className={`customImg w-144 `} src={mainImg} alt="mainimg" />
        </div>
      </div>
    </>
  );
}

export default MainPage;
