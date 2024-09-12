import React from "react";
import { Section } from "../components/Interface";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Data Structures and Algorithms",
    level: 90,
  },
  {
    title: "C & C++",
    level: 85
  },
  {
    title: "Javascript",
    level: 80
  },
  {
    title: "MERN Stack",
    level: 80,
  },
  {
    title: "GraphQL",
    level: 70,
  },
  {
    title: "React Three Fiber",
    level: 40,
  },
];
const languages = [
  {
    title: "Git / Github",
    level: 85,
  },
  {
    title: "Blender 3D",
    level: 50,
  }
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold text-bgColor1">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-white"
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, delay: 1 + index * 0.2 },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className={`h-full rounded-full ${
                    skill.level > 80
                      ? "bg-green-500"
                      : skill.level > 50 && skill.level <= 80
                      ? "bg-orange-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${skill.level}%` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: { duration: 1, delay: 1 + index * 0.2 },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10 text-bgColor1">Tools</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <h3 className="text-xl font-bold text-white">{lng.title}</h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className={`h-full rounded-full ${
                      lng.level > 80
                        ? "bg-green-500"
                        : lng.level > 50 && lng.level <= 80
                        ? "bg-orange-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${lng.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: { duration: 1, delay: 2 + index * 0.2 },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default SkillsSection;
