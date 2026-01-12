export default function ExperienceCard({
  title,
  descriptions,
  location,
  organization,
  dateRange,
}) {
  return (
    <div className="border border-solid border-teal-600 bg-black/10 rounded-lg w-[60%]">
      <div>
        <h1 className="text-center">{title}</h1>
        <h1>{dateRange}</h1>
      </div>
      <div>
        <h2>{organization}</h2>
        <h2>{location}</h2>
      </div>
      <ul>
        {descriptions.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </div>
  );
}
