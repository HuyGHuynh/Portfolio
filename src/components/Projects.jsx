import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ClimbEd",
    description:
      "ClimbEd is an adaptive learning platform designed to support neurodivergent learners by delivering personalized and accessible study experiences. I built the frontend using React, TypeScript, and Tailwind to create fast, responsive, and highly customizable interfaces. On the backend, I developed over six RESTful API endpoints with Express and SQLite to handle authentication, progress tracking, and course content management. To elevate the platform's adaptability, I integrated the Gemini API, enabling dynamic generation of study plans and quizzes tailored to each learner's performance. This project earned Best Use of Gemini API at OwlHacks – Fall 2025, standing out among 48 competing teams.",
    technologies: ["React", "Tailwind", "TypeScript", "Express", "SQLite", "Gemini API"],
    githubLink: "https://github.com/HuyGHuynh/climbEd",
    liveLink: null,
    award: "Best Use of Gemini API",
  },
  {
    title: "Vargas Home Services Employees' Portal",
    description:
      "The Vargas Home Services Employees' Portal is a full‑stack web application built to streamline customer scheduling and internal employee management for a local service business. Working collaboratively with a team of five, I contributed to both the frontend and backend, implementing more than twelve RESTful APIs using Flask to manage scheduling workflows and optimize database interactions, which reduced query execution time by 25%. I designed and normalized a PostgreSQL database with over eleven tables to support customers, appointments, services, and financial records. To improve communication efficiency, I also integrated the Gmail API to automate booking notifications, successfully delivering over 200 alerts to employees and customers.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "PostgreSQL"],
    githubLink: "https://github.com/HuyGHuynh/vargas-home-service-app",
    liveLink: "https://www.vargashomeservice.com/",
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
            award={project.award}
          />
        ))}
      </div>
    </div>
  );
}
