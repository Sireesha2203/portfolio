"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#121a2d] to-[#0a0f1e] text-white px-6 py-12">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-transparent rounded-full w-[80vw] h-[80vh] blur-3xl"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-10"
      >
        Projects
      </motion.h1>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, ease: "easeInOut" } },
        }}
        className="w-full max-w-5xl grid md:grid-cols-2 gap-10"
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

// Project Card Component with Smooth Hover Effects
interface Project {
  title: string;
  description: string;
  tech: string;
  github?: string;
  live?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
      }}
      whileHover={{ scale: 1.03, transition: { duration: 0.4, ease: "easeOut" } }}
      className="relative bg-gradient-to-b from-[#192233] to-[#0f172a] p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 hover:shadow-cyan-500/50 transition duration-300"
    >
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-xl"></div>

      {/* Project Title */}
      <h2 className="text-2xl font-bold text-cyan-300">{project.title}</h2>

      {/* Detailed Description */}
      <p className="text-gray-300 mt-3">{project.description}</p>

      {/* Tech Stack */}
      <p className="text-sm text-gray-400 mt-3">
        <span className="font-semibold text-gray-200">Tech Stack:</span> {project.tech}
      </p>

      {/* Links */}
      <div className="mt-4 flex space-x-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white transition duration-300 flex items-center space-x-1"
          >
            <FaGithub size={20} /> <span>GitHub</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-white transition duration-300 flex items-center space-x-1"
          >
            <FaExternalLinkAlt size={20} /> <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

// Projects Data (With Detailed Descriptions)
const projectsData = [
  {
    title: "DocSum",
    description:
      "An AI-powered document summarization tool that uses GenAI, Azure AI, and KNN-based retrieval techniques. "
      + "Processes large PDFs, extracts meaningful summaries, and includes an AI-driven chatbot for enhanced user interaction. "
      + "Built using Flask and .NET, ensuring high performance and scalability.",
    tech: "Flask, .NET, React.js, Azure Blob Storage, KNN, GenAI",
    github: "https://github.com/Sireesha2203/DocSum",
  },
  {
    title: "Talent Space Platform",
    description:
      "A career networking platform integrating AI-driven resume parsing and secure tokenization. "
      + "Enables users to create profiles, connect with recruiters, and receive AI-based job recommendations. "
      + "Utilizes Generative AI for intelligent career matching and UUID4 for enhanced authentication security.",
    tech: "ReactJS, NodeJS, MongoDB, ExpressJS, GenAI, UUID4",
    github: "https://github.com/Sireesha2203/talent_space",
  },
  {
    title: "Personalized Design Predictor",
    description:
      "An AI-powered fashion recommendation system that suggests personalized color combinations. "
      + "Uses K-Nearest Neighbors (KNN) and deep learning models to analyze past fashion trends and user preferences. "
      + "Aims to help designers and brands create more personalized clothing choices for customers.",
    tech: "Python, KNN, Deep Learning",
    github: "https://github.com/Sireesha2203/Personalized-Designer",
  },
  {
    title: "Lakshmana-Rekha",
    description:
      "A real-time women’s safety application with live location tracking and emergency alerts. "
      + "Users can set predefined safe zones and automatically notify emergency contacts in case of danger. "
      + "Integrated with Google Maps API for real-time navigation and AI-based unsafe location predictions.",
    tech: "MERN Stack, Google Maps API, Real-time Location Tracking, AI-based Safety Predictions",
    github: "https://github.com/Sireesha2203/lakshmana-rekha",
  },
];
