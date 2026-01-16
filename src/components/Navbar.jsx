import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  console.log("Menu open: ", open);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/5 backdrop-blur-sm">
        <div className=" flex items-center justify-between h-14 px-4 gap-6 p-4">
        <a href="#hero" className="font-bold text-lg" onClick={() => setOpen(false)}>
          Huy
        </a>
        <div className="hidden md:flex gap-6 p-4">
          <a href="#about">About</a>
          <a href="#skill">Skill</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </div>

        {/*This is for mobile development */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu-icon lucide-menu"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
        </div>

        {open && (
          <div className="md:hidden bg-gray-900 text-gray-200 backdrop-blur-sm absolute flex flex-col top-14 left-0 w-full gap-6 p-4">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#skill" onClick={() => setOpen(false)}>Skill</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a href="#resume" onClick={() => setOpen(false)}>Resume</a>
          </div>
        )}
      </nav>
    </>
  );
}
