export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
  award,
}) {
  return (
    <div className="border border-cyan-500/30 bg-zinc-900 rounded-lg w-[90%] md:w-[48%] lg:w-[45%] p-6 flex flex-col gap-4 hover:border-cyan-400/50 hover:bg-zinc-850 transition-all">
      <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">{title}</h3>
      {award && (
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg border-2 border-cyan-400 w-fit">
          🏆 {award}
        </div>
      )}
      <p className="text-base text-slate-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-xs"
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
            className="px-4 py-2 border border-cyan-500/50 text-cyan-400 text-sm rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-colors"
          >
            GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-cyan-500 text-black text-sm rounded-lg hover:bg-cyan-400 transition-colors font-medium"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
