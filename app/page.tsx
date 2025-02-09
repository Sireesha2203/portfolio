"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; 

import About from "./about/page";
import Skills from "./skills/page";
import Education from "./education/page";
import Experience from "./exp/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  const [text, setText] = useState("Problem Solver");
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fading out
      setTimeout(() => {
        setText((prevText) =>
          prevText === "Problem Solver" ? "Full Stack Developer" : "Problem Solver"
        );
        setFadeIn(true); // Start fading in the new text
      }, 500); // Wait for fade-out to complete before changing text
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div>
      {/* Home Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-750 to-gray-700 text-white px-5 py-6 -m-5"
        id="home"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-gray-400 shadow-xl mr-0 md:mr-12 mb-6 md:mb-0"
        >
          <Image
            src="/profile.jpg" // Replace with your actual photo path
            alt="Sireesha Jangili"
            width={200}
            height={200}
            className="object-cover w-full h-full"
            priority 
          />
        </motion.div>

        {/* Content Section */}
        <div className="text-center md:text-left">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl md:text-4xl font-bold leading-tight"
          >
            Hi, I am <br />
            <span className="text-teal-500">Sireesha Jangili</span>
          </motion.h1>

          {/* Alternating Text (Problem Solver and Full Stack Developer) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: fadeIn ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl text-white-300 mt-4 max-w-xl mx-auto md:mx-0"
          >
            <span>{text}</span>
          </motion.p>

          {/* Normal Text (Passionate about Machine Learning and Cloud) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="normal-text text-lg md:text-xl text-white-300 mt-4 max-w-xl mx-auto md:mx-0"
          >
            Passionate about Machine Learning and Cloud
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 mt-6 justify-center md:justify-start items-center md:items-start"
          >
            {/* LinkedIn Icon Button */}
            <a
              href="https://linkedin.com/in/sireesha-jangili"
              className="bg-indigo-500 hover:bg-indigo-600 text-white p-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 flex justify-center items-center"
            >
              <FaLinkedin size={20} />
            </a>

            {/* LeetCode Icon Button */}
            <a
              href="https://leetcode.com/u/siri1408/" // Replace with your actual LeetCode URL
              className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 flex justify-center items-center"
            >
              <SiLeetcode size={20} /> {/* Official LeetCode Icon */}
            </a>

            {/* GitHub Icon Button */}
            <a
              href="https://github.com/Sireesha2203"
              className="bg-gray-600 hover:bg-gray-700 text-white p-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 flex justify-center items-center"
            >
              <FaGithub size={20} />
            </a>
          </motion.div>

          {/* Resume view Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8"
          >
            <a
              href="https://drive.google.com/uc?export=view&id=1uqvhOgk8SzF_OIaFH8CgJQB16i-1nL3T" // Replace with your actual resume view URL
              target="_blank"
              className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-110"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Sections */}
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
