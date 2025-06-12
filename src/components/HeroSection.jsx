import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-10">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Hi, I'm <span className="text-blue-500">Maher Nakar</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-6">
              Master Degree in SoftWare Engineer <br/>
               Full Stack Developer <br/> Data & System Analyst
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mb-8 max-w-lg"
            >
              I build exceptional digital experiences that are fast, accessible, and visually appealing.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex space-x-4"
            >
              <a 
                href="#projects" 
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-200"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-500 rounded-full overflow-hidden shadow-xl">
                <img 
                  src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" 
                  alt="Maher Nakar portrait" 
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">8+ Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}