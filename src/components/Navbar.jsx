import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-teal-100/80 backdrop-blur-md border-b border-teal-600/20">
      <div className="flex items-center justify-between h-16 px-6 max-w-7xl mx-auto">
        <a href="#hero" className="font-bold text-xl hover:text-teal-600 transition-colors" onClick={() => setOpen(false)}>
          Huy
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-teal-600 transition-colors">About</a>
          <a href="#skill" className="hover:text-teal-600 transition-colors">Skill</a>
          <a href="#projects" className="hover:text-teal-600 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-teal-600 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-teal-600 transition-colors">Contact</a>
          <a href="https://drive.google.com/file/d/1sIuwIIjKUdCED1uMMnHe42E-WHJbAgWr/view" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">Resume</a>
        </div>

        <button
          className="md:hidden cursor-pointer p-2 hover:bg-teal-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
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
        <div className="md:hidden bg-teal-100 border-t border-teal-600/20 backdrop-blur-md">
          <div className="flex flex-col gap-4 p-6">
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-teal-600 transition-colors">About</a>
            <a href="#skill" onClick={() => setOpen(false)} className="hover:text-teal-600 transition-colors">Skill</a>
            <a href="#projects" onClick={() => setOpen(false)} className="hover:text-teal-600 transition-colors">Projects</a>
            <a href="#experience" onClick={() => setOpen(false)} className="hover:text-teal-600 transition-colors">Experience</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-teal-600 transition-colors">Contact</a>
            <a href="https://drive.google.com/file/d/1sIuwIIjKUdCED1uMMnHe42E-WHJbAgWr/view" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="hover:text-teal-600 transition-colors">Resume</a>
          </div>
        </div>
      )}
    </nav>
  );
}
