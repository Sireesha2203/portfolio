"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-12">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-gray-200 text-center mb-10"
      >
        Education
      </motion.h1>

      {/* Education Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-3xl space-y-6"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
            className="relative bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl"></div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-200">{edu.degree}</h2>
            <p className="text-gray-400">{edu.institution} | {edu.year}</p>
            {edu.branch && <p className="text-gray-400 mt-2">Branch: {edu.branch}</p>}
            {edu.GPA ? <p className="text-gray-400 mt-2">GPA: {edu.GPA}</p> : <p className="text-gray-400 mt-2">Percentage: {edu.Percentage}</p>}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Education data for cleaner structure
const educationData = [
  {
    degree: "Bachelor of Technology",
    institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
    year: "2021 - 2025",
    branch: "Computer Science and Engineering",
    GPA: "8.3",
  },
  {
    degree: "Board of Intermediate Education",
    institution: "Abhyaas Junior College",
    year: "2018 - 2020",
    Percentage: "95.7%",
  },
  {
    degree: "Board of Secondary Education",
    institution: "Siddhartha High School",
    year: "2018",
    GPA: "10",
  },
];
