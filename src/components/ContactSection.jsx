import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert('Message sent successfully!');
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Get In <span className="text-blue-500">Touch</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </motion.p>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Send Message <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:w-1/2"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-10 p-3 rounded-full mr-4 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-600">Aleppo, Syria</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-10 p-3 rounded-full mr-4 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">eng.mahernakar@Gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-10 p-3 rounded-full mr-4 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">(+963) 937 490046</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200 text-gray-700">
                    <FaGithub />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200 text-gray-700">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200 text-gray-700">
                    <FaTwitter />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200 text-gray-700">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}