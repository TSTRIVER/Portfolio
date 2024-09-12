import React from "react";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ContactSection from "../sections/ContactSection";
import ProjectsSection from "../sections/ProjectsSection";
import { motion } from "framer-motion";

export const Section = (props) => {
  return (
    <motion.section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
    >
      {props.children}
    </motion.section>
  );
};

const Interface = (props) => {
  const { setSection } = props;

  return (
    <>
      <div className={`flex flex-col items-center w-screen`}>
        <Section>
          <AboutSection setSection={setSection} />
        </Section>
        <Section>
          <SkillsSection />
        </Section>
        <Section>
          <ProjectsSection />
        </Section>
        <Section>
          <ContactSection />
        </Section>
      </div>
    </>
  );
};

export default Interface;
