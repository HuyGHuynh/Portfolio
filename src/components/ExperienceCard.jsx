export default function ExperienceCard({
  title,
  descriptions,
  location,
  organization,
  dateRange,
}) {
  return (
    <div className="border border-cyan-500/30 bg-zinc-900 rounded-lg w-[90%] md:w-[70%] lg:w-[60%] p-6 hover:border-cyan-400/50 hover:bg-zinc-850 transition-all">
      <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">{title}</h3>
          <p className="text-base font-medium text-slate-200">{organization}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-slate-300">{dateRange}</p>
          <p className="text-sm text-slate-400">{location}</p>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 ml-2">
        {descriptions.map((description, index) => (
          <li key={index} className="text-base leading-relaxed text-slate-300">
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
}
