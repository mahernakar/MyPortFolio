import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const skills = [
  { name: "JavaScript", icon: <FaGithub />, level: 90 },
  { name: "React", icon: <FaGithub />, level: 85 },
  { name: "Node.js", icon: <FaGithub />, level: 80 },
  { name: "Mysql", icon: <FaGithub />, level: 80 },
  { name: "HTML5", icon: <FaGithub />, level: 95 },
  { name: "N8N", icon: <FaGithub />, level: 90 },
  { name: "Angular", icon: <FaGithub />, level: 80 },
  { name: "Python", icon: <FaGithub />, level: 80 },
  { name: "C#", icon: <FaGithub />, level: 80 },
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-4"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          I've worked with a variety of technologies in the web development world. Here are my core competencies.
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-500 bg-opacity-10 rounded-full text-blue-500 text-2xl">
                {skill.icon}
              </div>
              <h3 className="font-semibold">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}