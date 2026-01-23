import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faPersonHarassing,
  faHandsHoldingCircle,
  faFileSignature,
  faBars,
  faXmark 
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { to: "/", label: "Home", icon: faHouseChimney },
  { to: "#About",  label: "About", icon: faPersonHarassing },
  { to: "#Project", label: "Project", icon: faHandsHoldingCircle },
  { to: "#Contact", label: "Contact", icon: faFileSignature },
];

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  // const hedeMenu =()=>{

  // }


  return (
    <>
      <nav
        className={`${
          showMenu ? "web_menu" : "mobile_menu"
        } flex gap-5 items-center `}
      >
        {navLinks.map(({ to, label, icon }) => (
          
          <a
            key={label}
            href={to}
            className="text-slate-200 p-2 flex items-center gap-2 font-bold text-1xl cursor-pointer hover:bg-sky-700 duration-500 w-full rounded-2xl"
          >
            <FontAwesomeIcon icon={icon} inverse /> {label}

          
            <hr />
          </a>
        ))
        }

        <div className="custom_login flex gap-3 mb-2">
          <Link
            to="/Login"
            className="text-amber-50 bg-sky-600 rounded-xl py-2 px-4 font-bold hover:bg-sky-700 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/SignUp"
            className=" border rounded-xl py-2 px-4 font-bold  border-white text-white
hover:bg-blue-400 hover:border-blue-500
transition duration-300  hover:text-slate-900"
          >
            SignUp
          </Link>
        </div>
      </nav>

      <FontAwesomeIcon
  onClick={toggleMenu}
  icon={showMenu ?  faBars:faXmark }
  size="2xl"
  className="custum_hamburger md:hidden cursor-pointer text-amber-50"
/>

    </>
  );
}

export default Nav;
