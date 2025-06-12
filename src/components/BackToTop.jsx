import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop({ isTop }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${isTop ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
    >
      <FaArrowUp />
    </button>
  );
}