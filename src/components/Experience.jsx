import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Computer Science and Math Tutor",
    organization: "Stockton University",
    location: "Galloway, NJ",
    dateRange: "Sep 2025 – Present",
    descriptions: [
      "Tutored over 20 students across programming and mathematics courses, providing support to strengthen problem‑solving skills.",
      "Helped students develop problem‑solving strategies and personalized study plans, improving course grades by an average of 20%.",
      "Reviewed student code and provided feedback on readability, structure, and best programming practices.",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    organization: "Stockton University",
    location: "Galloway, NJ",
    dateRange: "Feb 2025 – Present",
    descriptions: [
      "Developed Python automation tools to process over 300k+ medical concepts, reducing manual data extraction time by 80%.",
      "Optimized graph data structures to build medical terminology networks and perform traversal for identifying relationships between clinical concepts.",
      "Built backend components leveraging medical terminologies to improve accuracy across healthcare data systems.",
    ],
  },
];

export default function Experience() {
  return (
    <div
      id="experience"
      className="bg-zinc-950 py-20 border-t border-cyan-500/20 px-4"
    >
      <h1 className="text-center font-bold text-4xl pb-16 text-slate-100">Experience</h1>
      <div className="flex flex-col items-center gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            descriptions={exp.descriptions}
            location={exp.location}
            organization={exp.organization}
            dateRange={exp.dateRange}
          />
        ))}
      </div>
    </div>
  );
}
