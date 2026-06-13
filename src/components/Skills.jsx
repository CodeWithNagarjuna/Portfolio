import {
  FaReact,
  FaJs,
  FaJava,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { icon: <FaReact size={32} />, name: "React" },
  { icon: <FaJs size={32} />, name: "JavaScript" },
  { icon: <SiTailwindcss size={32} />, name: "Tailwind CSS" },
  { icon: <FaJava size={32} />, name: "Java" },
  { icon: <SiSpringboot size={32} />, name: "Spring Boot" },
  { icon: <FaNodeJs size={32} />, name: "Node.js" },
  { icon: <SiMysql size={32} />, name: "MySQL" },
  { icon: <SiMongodb size={32} />, name: "MongoDB" },
  { icon: <FaGitAlt size={32} />, name: "Git" },
  { icon: <FaGithub size={32} />, name: "GitHub" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        SKILLS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card glass rounded-2xl p-6 flex flex-col items-center justify-center gap-4"
          >
            <div className="text-white">
              {skill.icon}
            </div>

            <h3 className="text-lg font-medium">
              {skill.name}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}