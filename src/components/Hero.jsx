import profile from "../assets/Profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-8 pt-20 pb-12 flex flex-col lg:flex-row items-center justify-between gap-12"
    >
      {/* Left Side */}
      <div className="flex-1">
        <p className="text-gray-400 tracking-[10px] uppercase mb-6">
          Software Engineer
        </p>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-4">
          <span className="bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
            NAGARJUNA
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
            REDDY
          </span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Full Stack Developer
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-10">
          Building scalable web applications, solving real-world problems,
          and creating impactful digital experiences using React, Java,
          Spring Boot and modern technologies.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="#projects">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center">
        <img
          src={profile}
          alt="Nagarjuna Reddy"
          className="w-[350px] md:w-[500px] rounded-full border-4 border-gray-700 object-cover"
        />
      </div>
    </section>
  );
}