import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://yourportfolio.com",
  },
  {
    title: "Task Management App",
    description:
      "A full-stack task management application with user authentication, real-time updates, and intuitive UI.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/yourusername/task-manager",
    liveLink: "https://yourtaskapp.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that fetches real-time weather data and displays forecasts with beautiful visualizations.",
    technologies: ["JavaScript", "API Integration", "CSS"],
    githubLink: "https://github.com/yourusername/weather-app",
    liveLink: null,
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-zinc-900 py-20 border-t border-cyan-500/20"
    >
      <h1 className="text-center font-bold text-4xl pb-16 text-slate-100">Projects</h1>
      <div className="flex flex-wrap justify-center gap-6 max-w-[90%] mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
}
