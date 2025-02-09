import Link from "next/link";
import { FaHome, FaUser, FaLaptopCode, FaGraduationCap, FaBriefcase, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="p-5 bg-gradient-to-r from-blue-400 to-teal-600 flex justify-between items-center sticky top-0 z-10 w-full shadow-lg rounded-b-lg">
      <h1 className="text-xl font-bold text-white">Portfolio</h1>
      <div className="flex space-x-6 text-white text-lg">
        <a href="#home" className="flex items-center space-x-2 hover:text-gray-200 transition duration-300 ease-in-out">
          <FaHome />
          <span>Home</span>
        </a>
        <a href="#about" className="flex items-center space-x-2 hover:text-gray-200 transition duration-300 ease-in-out">
          <FaUser />
          <span>About</span>
        </a>
        <a href="#skills" className="flex items-center space-x-2 hover:text-gray-200 transition duration-300 ease-in-out">
          <FaLaptopCode />
          <span>Skills</span>
        </a>
        <a href="#education" className="flex items-center space-x-2 hover:text-gray-200 transition duration-300 ease-in-out">
          <FaGraduationCap />
          <span>Education</span>
        </a>
        <a href="#experience" className="flex items-center space-x-2 hover:text-gray-200 transition duration-300 ease-in-out">
          <FaBriefcase />
          <span>Experience</span>
        </a>
        <a href="#projects" className="flex items-center space-x-2 hover:text-gray-200 transition duration-300 ease-in-out">
          <FaLaptopCode />
          <span>Projects</span>
        </a>
        <a href="#contact" className="flex items-center space-x-2 hover:text-gray-200 transition duration-300 ease-in-out">
          <FaPhoneAlt />
          <span>Contact</span>
        </a>
      </div>
    </nav>
  );
}
