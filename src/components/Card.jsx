export default function Card({ icon, label }) {
  return (
    <div className="border border-solid border-teal-600 bg-black/10 rounded-lg w-35 h-20 flex items-center justify-center gap-4">
      <img src={icon} alt={label} className="w-8 h-8" />
      <p>{label}</p>
    </div>
  );
}
