import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="flex items-center justify-between h-16 px-6 max-w-7xl mx-auto">
        <a href="#hero" className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-slate-300 transition-all" onClick={() => setOpen(false)}>
          Huy
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
          <a href="#skill" className="text-slate-300 hover:text-cyan-400 transition-colors">Skill</a>
          <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#experience" className="text-slate-300 hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
          <a href="https://drive.google.com/file/d/1sIuwIIjKUdCED1uMMnHe42E-WHJbAgWr/view" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">Resume</a>
        </div>

        <button
          className="md:hidden cursor-pointer p-2 text-slate-300 hover:bg-zinc-900 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu-icon lucide-menu"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-cyan-500/20 backdrop-blur-md">
          <div className="flex flex-col gap-4 p-6">
            <a href="#about" onClick={() => setOpen(false)} className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#skill" onClick={() => setOpen(false)} className="text-slate-300 hover:text-cyan-400 transition-colors">Skill</a>
            <a href="#projects" onClick={() => setOpen(false)} className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" onClick={() => setOpen(false)} className="text-slate-300 hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
            <a href="https://drive.google.com/file/d/1sIuwIIjKUdCED1uMMnHe42E-WHJbAgWr/view" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="text-slate-300 hover:text-cyan-400 transition-colors">Resume</a>
          </div>
        </div>
      )}
    </nav>
  );
}
