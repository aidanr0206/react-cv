import React, { useState } from "react";
import { FaBars, FaGithub, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import AR from "../assets/AR.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-slate-800 text-gray-300">
      <div className="hover:cursor-pointer">
        <Link to="home" smooth={true} duration={500}>
          <img src={AR} alt="Initials Logo" width="100px"></img>
        </Link>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li className="hover:text-purple-500 duration-300">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-purple-500 duration-300">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-purple-500 duration-300">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        {/* <li className="hover:text-purple-500 duration-300">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li> */}
        <li className="hover:text-purple-500 duration-300">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger icon */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-slate-800 flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={400}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* socials */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* LinkedIn */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="//www.linkedin.com/in/aidan-rheeder-baa95126b" target="_blank" rel="noreferrer">
              LinkedIn <FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>

          {/* GitHub */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/aidanr0206" target="_blank" rel="noreferrer">
              GitHub <FaGithub size={30}></FaGithub>
            </a>
          </li>
          
          {/* Instagram */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d62976]">
            <a className="flex justify-between items-center w-full text-gray-300" href="//www.instagram.com/aidan_rheeder/" target="_blank" rel="noreferrer">
              Instagram <FaInstagram size={30}></FaInstagram>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
