export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-black bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
          YNR
        </h1>

        <div className="flex gap-8 font-semibold">
          <a href="#about" className="hover:text-blue-400 transition">
            ABOUT
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            PROJECTS
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            SKILLS
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            CONTACT
          </a>
        </div>

      </div>
    </nav>
  );
}