'use client'

import { useState } from "react";
import { projects } from "./works";
import ProjectModal from "./modal";

interface Project {
  title: string;
  role: string;
  year: string;
  description: string;
  modalDescription: string;
  image: string;
  tech: string[];
  liveLink: string;
  sourceLink: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 px-4" id="projects" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="text-secondary font-mono text-sm tracking-widest uppercase">02 / Projects</span>
          <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }}></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: "var(--fg)" }}>
          Selected work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: Project, i: number) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-secondary/50"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover h-44 group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg leading-snug" style={{ color: "var(--fg)" }}>
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono shrink-0 ml-2 mt-1" style={{ color: "var(--fg-muted)" }}>
                    {project.year}
                  </span>
                </div>

                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--fg-muted)" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tech.map((tech: string, idx: number) => (
                    <span key={idx} className="text-secondary text-xs font-mono bg-secondary/10 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-2 text-sm text-dark-primary bg-secondary hover:bg-secondary/80 font-semibold px-4 py-2 rounded-lg transition-colors w-fit"
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;