import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../App';
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with payment integration and inventory management.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Productivity application for teams to collaborate on projects.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "Blog Website",
    description: "an interactive blog website with a clean layout,  and responsive design for optimal viewing on all devices. Include featured posts",
    tags: ["React JS", "CSS", "HTML"],
    image: "./img/blog.jpg"
  },
  {
    id: 4,
    title: "Portfolio Website ",
    description: "A sleek and modern portfolio showcasing creative work with elegance and clarity. Fully responsive design ensures a seamless experience across all devices.",
    tags: ["React JS", "CSS", "Angular"],
    image: "https://picsum.photos/600/400?random=4"
  },
  {
    id: 5,
    title: "N8N automation workflows",
    description: "Designing and deploying powerful n8n automation workflows to streamline tasks and integrate apps effortlessly. Custom workflows tailored to boost productivity and reduce manual effort.",
    tags: ["N8N Automation" , "Docker"],
    image: "./img/n8n1.jpg"
  },
 
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { theme } = useContext(ThemeContext);
  return (
    <section id="projects"  className={`py-20 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}`} ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-4"
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          Here are some of my recent projects. Each one was carefully crafted to solve specific problems and deliver exceptional user experiences.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-flex items-center border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-200"
          >
            View All Projects <FaArrowUp className="ml-2 transform rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView }) {
  const { theme } = useContext(ThemeContext);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className={`group relative ${theme === 'light' ? 'bg-white' : 'bg-gray-700'} rounded-lg overflow-hidden shadow-lg`}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          loading="lazy" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-blue-500 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center p-6 text-white">
          <h3 className="text-xl font-bold mb-4">{project.title}</h3>
          <p className="mb-6">{project.description}</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#" 
              className="inline-block bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              View Demo
            </a>
            <a 
              href="#" 
              className="inline-block border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-500 transition-colors duration-200"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}