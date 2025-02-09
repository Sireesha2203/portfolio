"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-12">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-center text-blue-400 tracking-wide mb-10"
      >
        Experience
      </motion.h1>

      {/* Experience Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-3xl space-y-6"
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
            className="relative bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl"></div>

            {/* Company & Role */}
            <h2 className="text-2xl font-semibold mb-2 text-gray-200">{exp.company}</h2>
            <p className="text-gray-400">{exp.role} | {exp.location}</p>
            <p className="text-gray-400 mt-1">{exp.duration}</p>

            {/* Experience Description */}
            <p className="text-gray-300 mt-4">{exp.description}</p>

            {/* Key Contributions */}
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-3">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Experience Data (Easily Extendable)
const experienceData = [
  {
    company: "Crosspapers EdTech Private Limited",
    role: "Software Development Intern",
    location: "Hyderabad",
    duration: "April 2024 – July 2024",
    description:
      "Contributed to the development of an AI-powered document summarization system, optimizing content retrieval and scalability.",
    details: [
      "Developed an advanced document summarization system using .NET, Azure AI, and MVC.",
      "Implemented KNN with Azure AI for precise content extraction and enhanced retrieval efficiency.",
      "Integrated Generative AI (GenAI) to provide intelligent insights from document data.",
      "Followed SOLID principles to build a scalable, high-performance architecture.",
      "Collaborated in an Agile environment, participating in code reviews, sprint planning, and feature development.",
    ],
  },
];
