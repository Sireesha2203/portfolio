export default function About() {
    return (
      <div className="max-w-4xl mx-auto mt-12 p-10 bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-teal-500 text-center mb-6">About Me</h1>
        
        <div className="text-gray-400 text-lg space-y-4 leading-relaxed text-justify">
          <p>
            I'm <span className="text-white font-semibold">Sireesha Jangili</span>, a passionate <span className="text-white font-semibold">Software Developer</span> with expertise in <span className="text-white font-semibold">MERN Stack</span>, <span className="text-white font-semibold">.NET</span>, and <span className="text-white font-semibold">AI-driven solutions</span>. With a solid foundation in <span className="text-white font-semibold">Data Structures & Algorithms</span>, I’m committed to solving complex problems through scalable, optimized, and innovative solutions.
          </p>
  
          <p>
            I've had the privilege to work on projects like <span className="text-white font-semibold">DocSum</span>, an AI-powered document summarization tool, and <span className="text-white font-semibold">Talent Space Platform</span>, platform for Networking and Learning. These projects reflect my ability to combine cutting-edge technology with real-world applications to deliver impactful results.
          </p>
  
          <p>
            In addition to my technical expertise, I’m recognized for my achievements, including being selected as a <span className="text-white font-semibold">Amazon ML Summer School Scholar</span>, where I stood out from over 85,000 applicants, and being awarded the <span className="text-white font-semibold">INEX Silver Medal</span> for innovation at the India International Innovation Expo. 
          </p>
  
          <p>
            I'm always looking to push the boundaries of what technology can achieve. Currently, I’m exploring the intersection of <span className="text-white font-semibold">AI</span> and <span className="text-white font-semibold">web development</span>, continuously learning new technologies, and collaborating with like-minded professionals to build the next generation of intelligent applications.
          </p>
        </div>
  
        <div className="mt-6 text-center">
          <a 
            href="https://www.linkedin.com/in/sireesha-jangili/details/certifications/"
            target="_blank"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 transition duration-300"
          >
            View My Certifications
          </a>
        </div>
      </div>
    );
  }
  