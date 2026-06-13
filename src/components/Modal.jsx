export default function ProjectModal({
  project,
  onClose,
}) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="glass max-w-4xl w-full rounded-3xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl w-full h-[350px] object-cover"
        />

        <h2 className="text-4xl font-bold mt-6">
          {project.title}
        </h2>

        <p className="text-gray-400 mt-4">
          {project.description}
        </p>

        <div className="mt-6">
          <h3 className="font-bold mb-3">
            Tech Stack
          </h3>

          <div className="flex gap-3 flex-wrap">
            {project.tech.map((item) => (
              <span
                key={item}
                className="border border-gray-700 px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-8 border border-white px-6 py-3 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}