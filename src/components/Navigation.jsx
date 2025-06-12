import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navigation({ isMenuOpen, setIsMenuOpen, isTop }) {
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isTop ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-500">MN</a>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-gray-800"
          >
            <FaBars className="text-xl" />
          </button>
        </div>
        <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </nav>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="hover:text-blue-500 transition-colors duration-200">
      {children}
    </a>
  );
}

function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: isOpen ? 1 : 0,
        height: isOpen ? 'auto' : 0
      }}
      transition={{ duration: 0.3 }}
      className={`md:hidden overflow-hidden ${isOpen ? 'mt-4' : ''}`}
    >
      <div className="space-y-2 py-2">
        <MobileNavLink href="#home" setIsOpen={setIsOpen}>Home</MobileNavLink>
        <MobileNavLink href="#about" setIsOpen={setIsOpen}>About</MobileNavLink>
        <MobileNavLink href="#projects" setIsOpen={setIsOpen}>Projects</MobileNavLink>
        <MobileNavLink href="#skills" setIsOpen={setIsOpen}>Skills</MobileNavLink>
        <MobileNavLink href="#contact" setIsOpen={setIsOpen}>Contact</MobileNavLink>
      </div>
    </motion.div>
  );
}

function MobileNavLink({ href, children, setIsOpen }) {
  return (
    <a 
      href={href} 
      onClick={() => setIsOpen(false)}
      className="block py-2 hover:text-blue-500 transition-colors duration-200"
    >
      {children}
    </a>
  );
}