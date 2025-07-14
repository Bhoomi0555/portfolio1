import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { FaPython, FaAws, FaLinux, FaGitAlt, FaDocker, FaGithub, FaHtml5, FaJs, FaReact, FaNodeJs, FaChartBar, FaJava } from 'react-icons/fa';
import { SiTypescript, SiKubernetes, SiJenkins, SiTensorflow, SiScikitlearn, SiPandas, SiTerraform, SiFlutter, SiMysql, SiMongodb, SiR } from 'react-icons/si';
import { MdSync } from 'react-icons/md';

const skillIcons: Record<string, JSX.Element> = {
  python: <FaPython className="text-3xl text-[#3776AB]" />,
  javascript: <FaJs className="text-3xl text-[#F7DF1E]" />,
  java: <FaJava className="text-3xl text-[#007396]" />,
  typescript: <SiTypescript className="text-3xl text-[#3178C6]" />,
  react: <FaReact className="text-3xl text-[#61DAFB]" />,
  html5: <FaHtml5 className="text-3xl text-[#E34F26]" />,
  nodejs: <FaNodeJs className="text-3xl text-[#339933]" />,
  docker: <FaDocker className="text-3xl text-[#2496ED]" />,
  kubernetes: <SiKubernetes className="text-3xl text-[#326CE5]" />,
  jenkins: <SiJenkins className="text-3xl text-[#D24939]" />,
  aws: <FaAws className="text-3xl text-[#FF9900]" />,
  tensorflow: <SiTensorflow className="text-3xl text-[#FF6F00]" />,
  scikitlearn: <SiScikitlearn className="text-3xl text-[#F7931E]" />,
  pandas: <SiPandas className="text-3xl text-[#150458]" />,
  terraform: <SiTerraform className="text-2xl text-[#623CE4]" />,
  git: <FaGitAlt className="text-3xl text-[#F05032]" />,
  github: <FaGithub className="text-3xl text-[#181717]" />,
  linux: <FaLinux className="text-3xl text-[#FCC624]" />,
  mysql: <SiMysql className="text-3xl text-[#4479A1]" />,
  cicd: <MdSync className="text-3xl text-[#ddc3a5]" />,
  mongodb: <SiMongodb className="text-3xl text-[#47A248]" />,
  powerbi: <FaChartBar className="text-3xl text-[#F2C811]" />,
  r: <SiR className="text-3xl text-[#276DC3]" />,
  flutter: <SiFlutter className="text-2xl text-[#02569B]" />,
};

// Helper function for highlight effect
const addHighlight = (event: MouseEvent | TouchEvent | PointerEvent) => {
  (event.currentTarget as HTMLDivElement).classList.add('highlighted-skill');
};
const removeHighlight = (event: MouseEvent | TouchEvent | PointerEvent) => {
  setTimeout(() => (event.currentTarget as HTMLDivElement).classList.remove('highlighted-skill'), 300);
};

const Skills: React.FC = () => {
  // Partition skills
  const technicalSkills = skills.filter(skill => skill.category !== 'Soft');
  const softSkills = skills.filter(skill => skill.category === 'Soft');

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#674846] to-[#201e20] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#2d2320]/60 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Technical <span className="text-[#ddc3a5]">Skills</span>
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {technicalSkills
                .filter(skill => !['TypeScript', 'Kubernetes', 'AWS', 'TensorFlow'].includes(skill.name))
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileTap={{ scale: 1.15 }}
                    className="skill-card flex flex-col items-center justify-center bg-[#674846]/40 rounded-lg p-2 mb-1 shadow transition-all cursor-pointer"
                    style={{ minHeight: '70px' }}
                    onTapStart={addHighlight}
                    onTap={removeHighlight}
                  >
                    <div className="mb-1">
                      {skill.logo && skillIcons[skill.logo]}
                    </div>
                    <span className="text-xs font-semibold text-white text-center mb-0.5">{skill.name}</span>
                  </motion.div>
                ))}
            </div>
            {/* Currently Learning Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-lg font-bold text-[#ddc3a5] mb-3 text-center">Currently Learning</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: 'Flutter', logo: skillIcons.flutter },
                  { name: 'Kubernetes', logo: skillIcons.kubernetes },
                  { name: 'TensorFlow', logo: skillIcons.tensorflow },
                  { name: 'AWS', logo: skillIcons.aws },
                ].map((item) => (
                  <motion.div
                    key={item.name}
                    whileTap={{ scale: 1.15 }}
                    className="skill-card flex flex-col items-center justify-center bg-[#232021] rounded-lg p-2 mb-1 shadow transition-all cursor-pointer"
                    style={{ minWidth: '80px', minHeight: '70px' }}
                    onTapStart={addHighlight}
                    onTap={removeHighlight}
                  >
                    <div className="mb-1 text-2xl">{item.logo}</div>
                    <span className="text-xs font-semibold text-white text-center">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          {/* Soft Skills */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#2d2320]/60 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Soft <span className="text-[#c9b491]">Skills</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileTap={{ scale: 1.15 }}
                  className="skill-card flex flex-col items-center justify-center bg-[#c9b491]/20 rounded-xl p-4 mb-2 shadow transition-all cursor-pointer"
                  onTapStart={addHighlight}
                  onTap={removeHighlight}
                >
                  <div className="mb-2 text-3xl">
                    {skill.logo}
                  </div>
                  <span className="text-base font-semibold text-white text-center mb-1">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
