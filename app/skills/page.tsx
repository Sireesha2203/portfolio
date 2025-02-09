import { FaPython, FaReact, FaNodeJs, FaDatabase, FaCogs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiDocker, SiJavascript, SiCplusplus, SiMysql, SiExpress } from 'react-icons/si';

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-2xl">
      <h1 className="text-4xl font-bold text-gray-200 text-center mb-10">Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Python Card */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <FaPython className="mr-4 text-4xl" /> Python
          </div>
        </div>

        {/* C++ Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <SiCplusplus className="mr-4 text-4xl" /> C/C++
          </div>
        </div>

         {/* DSA Card */}
         <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <FaCogs className="mr-4 text-4xl" /> DSA
          </div>
        </div>

        {/* ReactJS Card */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <FaReact className="mr-4 text-4xl" /> ReactJS
          </div>
        </div>

        {/* Node.js Card */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <FaNodeJs className="mr-4 text-4xl" /> Node.js
          </div>
        </div>

        {/* ExpressJS Card */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <SiExpress className="mr-4 text-4xl" /> ExpressJS
          </div>
        </div>

        {/* MongoDB Card */}
        <div className="bg-gradient-to-r from-green-800 to-green-900 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <SiMongodb className="mr-4 text-4xl" /> MongoDB
          </div>
        </div>

        {/* SQL Card */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <FaDatabase className="mr-4 text-4xl" /> SQL
          </div>
        </div>

        {/* MySQL Card */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <SiMysql className="mr-4 text-4xl" /> MySQL
          </div>
        </div>

        {/* Java Card */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <SiJavascript className="mr-4 text-4xl" /> Java
          </div>
        </div>

       {/* Docker Card */}
       <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <SiDocker className="mr-4 text-4xl" /> Docker
          </div>
        </div>

        {/* HTML Card */}
        <div className="bg-gradient-to-r from-red-500 to-red-700 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <FaHtml5 className="mr-4 text-4xl" /> HTML
          </div>
        </div>

        {/* CSS Card */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <FaCss3Alt className="mr-4 text-4xl" /> CSS
          </div>
        </div>

        {/* C# Card */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-7 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white text-xl font-semibold flex items-center">
            <FaCogs className="mr-4 text-4xl" /> C#
          </div>
        </div>
      </div>
    </div>
  );
}
