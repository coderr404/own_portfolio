import Quiz from "../assets/images/server.jpg";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {Link} from 'react-router-dom'

const techStack = [
  "Tailwind",
  "React JS",
  "Node JS",
  "Expresh js"
];

function MyProject() {
  return (
    <section className="bg-slate-800 text-white pt-24 min-h-screen" id ="Project">
      <h1 className="custom-my-project text-center text-4xl font-bold p-7 text-amber-700">
        My Project
      </h1>

      <div className="flex mx-10 max-[740px]:flex-col gap-6">
        {/* Image Section */}
        <div className="mx-2 group relative flex-1">
          <img
            src={Quiz}
            alt="Quiz project"
            className="w-full h-full object-cover rounded-2xl p-1"
          />

          {/* Hover Overlay */}
          <Link
            to="https://storage-web-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black/60 flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"
          >
            <FaExternalLinkAlt className="text-3xl" />
          </Link>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-100">
            Safe Submit
          </h2>

          <p className="text-gray-100 pt-7 line-clamp-3">
            SafeSubmit is a seamless form submission solution that simplifies
            how users interact with your website. Receive form submissions
            directly in your inbox — no backend needed.
          </p>

          {/* Tech Stack */}
          <div className="flex gap-3 pt-5 sm:pt-10 flex-wrap">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-amber-700 px-3 sm:px-4 py-1 sm:py-2
                           font-semibold rounded-2xl text-sm cursor-pointer hover:bg-amber-800 transition duration-200 "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-5 pb-5 flex gap-3">
            <Link
              to="https://storage-web-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 text-blue-400 px-4 py-2 rounded-md
                         text-sm hover:bg-blue-500 duration-300 hover:text-white transition"
            >
              Live
            </Link>

            <a
              href="https://github.com/coderr404/Frontend-for-storage"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-500 px-4 py-2 rounded-md text-sm
                         flex items-center gap-2 hover:bg-gray-700 duration-300 transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProject;
