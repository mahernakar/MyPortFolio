import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
          >
            <img 
              src="./img/me.jpg" 
              alt="About me" 
              className="rounded-lg shadow-lg w-full max-w-xs" 
              loading="lazy" 
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-2/3 md:pl-12"
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="mb-6">
              I'm a passionate full-stack developer with expertise in JavaScript, React, Node.js, and modern web technologies. 
              I specialize in creating responsive, user-friendly applications that solve real-world problems.
            </p>
            <p className="mb-6">
              With a background in computer science and 8+ years of professional experience, I've worked with startups 
              and established companies to deliver high-quality digital products.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="font-semibold">Name: <span className="font-normal">Maher Nakar</span></p>
                <p className="font-semibold">Email: <span className="font-normal">eng.mahernakar@Gmail.com</span></p>
              </div>
              <div>
                <p className="font-semibold">Experience: <span className="font-normal">8+ Years</span></p>
                <p className="font-semibold">Location: <span className="font-normal">Aleppo, Syria</span></p>
              </div>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Download CV <FaDownload className="ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}