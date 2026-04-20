import React, { useEffect } from "react";

export interface Project {
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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-dark-primary border border-white-primary/10 rounded-2xl max-w-4xl w-full relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white-primary/40 hover:text-white-primary text-2xl leading-none transition-colors"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover md:rounded-l-2xl max-h-72 md:max-h-full"
            />
          </div>

          {/* Content */}
          <div className="p-7 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-secondary font-mono text-xs tracking-widest uppercase">{project.role}</span>
                <span className="text-white-primary/20 text-xs">•</span>
                <span className="text-white-primary/30 font-mono text-xs">{project.year}</span>
              </div>
              <h2 className="text-2xl font-bold text-white-primary">{project.title}</h2>
            </div>

            <p className="text-white-primary/60 text-sm leading-relaxed flex-1">
              {project.modalDescription.split("\n").map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-secondary text-xs font-mono bg-secondary/10 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap pt-2 border-t border-white-primary/10">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-dark-primary text-sm font-semibold px-5 py-2 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                See Live →
              </a>
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white-primary/20 text-white-primary/60 text-sm px-5 py-2 rounded-lg hover:border-white-primary/50 hover:text-white-primary transition-colors"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;