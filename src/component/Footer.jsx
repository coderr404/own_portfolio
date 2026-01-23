import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {

    const socials = [
  {
    icon: <FaLinkedinIn />,
    linkk: "https://www.linkedin.com/feed/",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: <FaGithub />,
    linkk: "https://github.com/coderr404/javaScript_Project",
    color: "bg-gray-700 hover:bg-gray-600",
  },
  {
    icon: <FaFacebookF />,
    linkk: "https://www.facebook.com/profile.php?id=100035105919164",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    icon: <FaInstagram />,
    linkk: "https://www.facebook.com/profile.php?id=100035105919164",
    color: "bg-gradient-to-tr from-pink-500 to-yellow-500",
  },
];


   



  return (
    <section className="bg-gradient-to-b from-[#050816] to-[#02040f] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stay Connected 🚀
          </h2>

          <p className="text-gray-400 mb-6">
            Subscribe to get updates, tips, and resources directly to your inbox.
          </p>

          {/* Email Input */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 px-5 py-3 rounded-full
                         bg-transparent border border-gray-600
                         placeholder-gray-400 focus:outline-none
                         focus:border-blue-500"
            />

            <button
              className="bg-blue-600 hover:bg-blue-700
                         px-8 py-3 rounded-full font-semibold
                         transition cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>


<div className="flex gap-4">
  {socials.map((item, index) => (
    <a className={`w-12 h-12 flex items-center justify-center
//                   rounded-full text-xl text-white
//                   transition ${item.color}  cursor-pointer`}
      key={index}
      href={item.linkk}
      target="_blank"
    >
      {item.icon}
    </a>
  ))}
</div>


        {/* Social Icons */}
        {/* <div className="flex gap-4">
          <SocialIcon color="bg-blue-600 hover:bg-blue-700"
          >
            <FaLinkedinIn />
          </SocialIcon>

          <SocialIcon color="bg-blue-600 hover:bg-blue-700">
            <FaGithub />
          </SocialIcon>

          <SocialIcon color="bg-blue-500 hover:bg-blue-600">
            <FaFacebookF />
          </SocialIcon>

          <SocialIcon color="bg-gradient-to-tr from-pink-500 to-yellow-500">
            <FaInstagram />
          </SocialIcon>
        </div> */}
      </div>

      {/* Footer */}
      <p className="text-center text-gray-500 text-sm mt-14">
        © 2026 Rahul Mahto Portfolio. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;

/* Reusable Icon Component */
// function SocialIcon({ children, color }) {
//   return (
//     <a
//       href={linkk}
//       className={`w-12 h-12 flex items-center justify-center
//                   rounded-full text-xl text-white
//                   transition ${color}`}
//     >
//       {children}
//     </a>
//   );
// }
