import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-tahiti-400 text-center py-12 px-8 rounded-xl shadow-lg max-w-4xl mx-auto mt-12">
      <h1 className="text-4xl font-bold text-white mb-6 animate__animated animate__fadeIn">Let’s Connect!</h1>
      <p className="text-xl text-gray-100 mb-8 animate__animated animate__fadeIn animate__delay-1s">
        I’m always open to discussing new opportunities, collaborations, or even just a friendly chat about technology and innovation.
      </p>

      <div className="mt-8 animate__animated animate__fadeIn animate__delay-2s">
        <h2 className="text-3xl font-semibold text-white mb-6">Feel free to reach out!</h2>
        
        <div className="flex justify-center space-x-10 text-white">
          <div className="bg-blue-600 p-5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <a href="mailto:balusireesha29@gmail.com" className="flex items-center space-x-3">
              <FaEnvelope className="text-3xl" />
              <span className="text-lg">Email</span>
            </a>
          </div>

          <div className="bg-blue-800 p-5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <a href="https://linkedin.com/in/sireesha-jangili" className="flex items-center space-x-3">
              <FaLinkedin className="text-3xl" />
              <span className="text-lg">LinkedIn</span>
            </a>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <a href="https://github.com/Sireesha2203" className="flex items-center space-x-3">
              <FaGithub className="text-3xl" />
              <span className="text-lg">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 animate__animated animate__fadeIn animate__delay-3s">
        <p className="text-gray-100 text-lg">
          I’m excited to connect with like-minded professionals and collaborate on impactful projects. Looking forward to hearing from you!
        </p>
      </div>
    </div>
  );
}
