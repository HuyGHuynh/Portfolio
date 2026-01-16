export default function ExperienceCard({
  title,
  descriptions,
  location,
  organization,
  dateRange,
}) {
  return (
    <div className="border border-solid border-teal-600 bg-black/10 rounded-lg w-[90%] md:w-[70%] lg:w-[60%] p-6">
      <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
        <div>
          <h3 className="text-2xl font-semibold text-teal-600">{title}</h3>
          <p className="text-lg font-medium">{organization}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">{dateRange}</p>
          <p className="text-sm">{location}</p>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 ml-2">
        {descriptions.map((description, index) => (
          <li key={index} className="text-sm leading-relaxed">
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
}
