const stats = [
  {
    number: "10+",
    label: "Projects",
  },
  {
    number: "15+",
    label: "Technologies",
  },
  {
    number: "1+",
    label: "Years Learning",
  },
  {
    number: "100%",
    label: "Passion",
  },
];

export default function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      <div className="grid md:grid-cols-4 gap-6">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-3xl p-8 text-center"
          >
            <h2 className="text-5xl font-bold">
              {stat.number}
            </h2>

            <p className="text-gray-400 mt-3">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}