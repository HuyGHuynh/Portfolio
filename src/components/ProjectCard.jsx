export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
}) {
  return (
    <div className="border border-solid border-teal-600 bg-black/10 rounded-lg w-[90%] md:w-[45%] lg:w-[30%] p-6 flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-teal-600">{title}</h3>
      <p className="text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-teal-600 text-white rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-solid border-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition-colors"
          >
            GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
