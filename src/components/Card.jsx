export default function Card({ icon, label }) {
  return (
    <div className="border border-cyan-500/30 bg-zinc-900 rounded-lg w-35 h-20 flex items-center justify-center gap-4 hover:border-cyan-400/50 hover:bg-zinc-800 transition-all">
      <img src={icon} alt={label} className="w-8 h-8" />
      <p className="text-slate-200">{label}</p>
    </div>
  );
}
