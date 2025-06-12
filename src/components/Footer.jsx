import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">MN</a>
            <p className="mt-2 text-gray-400">Building digital experiences that matter.</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <a href="#home" className="hover:text-blue-500 transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-blue-500 transition-colors duration-200">About</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors duration-200">Projects</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors duration-200">Skills</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors duration-200">Contact</a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 Maher Nakar. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com/mahernakar" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/maher-nakar" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}