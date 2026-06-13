import womenTravel from "../Assests/Projects/women-travel.jpg";
import aiLoan from "../Assests/Projects/ai-loan.jpg";
import startup from "../Assests/Projects/startup.jpg";

const projects = [
  {
    title: "Women Safety Travel App",
    image: womenTravel,
    desc: "🚧 Currently Building - AI-powered safety platform helping women travelers stay secure through emergency assistance, verified guardians, safe route recommendations and real-time support.",
   tech: "AI-powered travel safety platform helping solo women travelersaccess verified local guardians, emergency support, and safe route recommendations."
  },
  {
    title: "AI Education Loan Advisor",
    image: aiLoan,
    desc: "An intelligent platform that helps students discover, compare and understand education loan options based on their academic profile, financial requirements and future career goals. Designed to simplify the loan decision-making process through personalized recommendations.",
    tech: "I enjoy validating startup ideas, understanding user problems,and building products that solve real-world challenges."
  },
  {
    title: "Startup Validation Platform",
    image: startup,
    desc: "A platform designed to help founders validate startup ideas before investing significant time and money. It focuses on problem validation, customer feedback collection, market research insights and early-stage product demand analysis.",
   tech: "• AI-powered idea analysis, Customer interview templates,Competitor research assistanceMarket demand scoring and Problem-solution validation reports" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >
     <h2 className="text-5xl font-bold text-center mb-6">
  FEATURED PROJECTS
</h2>

<p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
  Building solutions that address real-world challenges through
  technology, innovation and user-focused design.
</p>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass rounded-3xl overflow-hidden grid lg:grid-cols-2 gap-10 p-8 hover:scale-[1.02] transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-2xl"
            />

            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.desc}
              </p>

              <p className="text-blue-400 mb-8">
                {project.tech}
              </p>

              <div className="flex gap-4">
                <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
                  GitHub
                </button>

                <button className="border border-white px-6 py-3 rounded-full">
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}