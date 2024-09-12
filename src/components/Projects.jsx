import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "AuralLink.io",
    url: "https://github.com/TSTRIVER/AuralLink_2.0_io",
    image: "projects/aurallink.png",
    description: "WebRTC P2P Voice Communication with Maximum Security and Minimal Latency", 
  },
  {
    title: "Blinkit Clone",
    url: "https://drive.google.com/file/d/1HX7VdMLNzRP0DlmnXtn8HZ0rblqsC5Fv/view",
    image: "projects/grocery.png",
    description: "A Comprehensive E-Commerce Platform for Grocery Purchases.",
  },
  {
    title: "College Chatbot",
    url: "https://github.com/TSTRIVER/iQuestIIITB_Bot",
    image: "projects/chatbot.png",
    description: "A Chatbot to Answer Queries Related to IIIT Bhopal",
  },
  {
    title: "Collabo Noter",
    url: "https://github.com/TSTRIVER/Collabo_Noter",
    image: "projects/collab.jpg",
    description: "A Collaborative Note-Taking Platform with Real-Time Updates",
  },
  {
    title: "Leafmate",
    url: "https://github.com/TSTRIVER/AuralLink_2.0_io",
    image: "projects/weatherl.png",
    description: "A Visualization Tool Displaying Real-Time Weather Of Up To 30 Cities on a Map",
  }
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};