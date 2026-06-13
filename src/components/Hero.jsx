import profile from "../assets/profile.png";

export default function Hero() {
}
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-between gap-12 px-8 pt-32 pb-8 max-w-7xl mx-auto"
    >

      <div className="max-w-3xl">

        <p className="text-gray-400 tracking-[8px] uppercase mb-4">
          Software Engineer
        </p>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-500 bg-clip-text text-transparent">
  NAGARJUNA
  <br />
  REDDY
</h1>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-300">
          Full Stack Developer
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
          Building scalable web applications, solving real-world problems,
          and creating impactful digital experiences using React, Java,
          Spring Boot and modern technologies.
        </p>

        <div className="flex flex-wrap gap-4">

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

      <div className="flex justify-center">
        <img
          src={profile}
          alt="Nagarjuna Reddy"
          className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full object-cover border-4 border-white/10 shadow-2xl"
        />
      </div>

    </section>
  );
}