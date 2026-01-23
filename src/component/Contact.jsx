import React from 'react'

import Contactimg from '../assets/images/contact.webp'
// import imgg from "../assets/images/skillimg.webp";


import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import { MdSubject } from "react-icons/md";


 function Contact() {
  return (
    <>
     <div className="min-h-screen  items-center justify-center bg-gradient-to-br from-[#050816] via-[#0b0f2a] to-[#090118] px-10 text-white  grid sm:grid-cols-2 pt-25" id="Contact">
      
      <div className="w-full max-w-3xl">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </span>
        </h2>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm">Name</label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#1c2434] border border-white/10 rounded-lg pl-12 pr-4 py-3
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#1c2434] border border-white/10 rounded-lg pl-12 pr-4 py-3
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 text-sm">Subject</label>
            <div className="relative">
              <MdSubject className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Select Subject"
                className="w-full bg-[#1c2434] border border-white/10 rounded-lg pl-12 pr-4 py-3
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm">Message</label>
            <div className="relative">
              <FaCommentDots className="absolute left-4 top-4 text-gray-400" />
              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full bg-[#1c2434] border border-white/10 rounded-lg pl-12 pr-4 py-3
                           text-white placeholder-gray-400 resize-none
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700
                       text-white font-semibold py-3 rounded-lg transition cursor-pointer"
          >
            <FaPaperPlane />
            Send Message
          </button>

        </form>
      </div>

      <div className={` flex justify-center items-center`}>
          <img src={Contactimg} className={`w-100  object-cover object-center`} alt="skillimg" />
        </div>
    </div>
    </>
  )
}

export default Contact