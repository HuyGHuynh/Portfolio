export default function Navbar() {
    return <nav className="fixed top-0 left-0 w-full z-50 bg-black/5 backdrop-blur-sm overflow-hidden flex items-center justify-between px-4">
        <a href="#hero" className="font-bold text-lg">Huy</a>
        <div className="flex gap-6 p-4">
            <a href="#about">About</a>
            <a href="#skill">Skill</a>
            <a href="#project">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <a href="#resume">Resume</a>
        </div>
    </nav>
}