import React from "react";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "../components/Projects";

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <div className="flex w-full h-full gap-8 items-center justify-center">
      <button
        className="hover:text-indigo-600 transition-colors"
        onClick={previousProject}
      >
        ← Previous
      </button>
      <h2 className="text-5xl font-bold">Projects</h2>
      <button
        className="hover:text-indigo-600 transition-colors"
        onClick={nextProject}
      >
        Next →
      </button>
    </div>
  );
};

export default ProjectsSection;
