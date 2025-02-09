export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-400 py-4 text-center mt-10">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sireesha Jangili. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="https://linkedin.com/in/sireesha-jangili" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="https://github.com/Sireesha2203" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="mailto:balusireesha29@gmail.com" className="hover:text-white">
            Email
          </a>
        </div>
      </footer>
    );
  }
  