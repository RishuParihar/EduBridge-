const resources = [
  { title: "DBMS Notes", subject: "Computer Science" },
  { title: "Operating System", subject: "Computer Science" },
  { title: "Computer Networks", subject: "Computer Science" },
  { title: "Digital Electronics", subject: "Electronics Engineering" },
  { title: "Signals & Systems", subject: "Electronics Engineering" },
  { title: "Engineering Mathematics", subject: "Mathematics" },
  { title: "Thermodynamics", subject: "Mechanical Engineering" },
  { title: "Strength of Materials", subject: "Mechanical Engineering" },
  { title: "Electrical Machines", subject: "Electrical Engineering" },
  { title: "Data Structures", subject: "Programming" },
  { title: "Artificial Intelligence", subject: "AI & Machine Learning" },
  { title: "Machine Learning Basics", subject: "AI & Data Science" },
  { title: "Deep Learning Fundamentals", subject: "Artificial Intelligence" },
  { title: "Natural Language Processing", subject: "Generative AI" },
];

function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto p-8">

        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-800">
            Study Resources
          </h1>

          <p className="text-gray-500 mt-2">
            Access free notes, papers and study materials.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search Resources..."
          className="w-full bg-white border border-gray-200 p-4 rounded-xl mb-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <div className="grid md:grid-cols-3 gap-6">

          {resources.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-6
                border-l-4
                border-sky-500
                shadow-sm
                transition-all
                duration-300
                hover:shadow-sky-100
                hover:shadow-xl
              "
            >
              <span className="inline-block bg-sky-100 text-sky-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
                {item.subject}
              </span>

              <h2 className="font-bold text-xl text-gray-800">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-3">
                Study material available for students.
              </p>

              <button
                className="
                  mt-5
                  bg-sky-600
                  text-white
                  px-5
                  py-2
                  rounded-lg
                  transition-all
                  duration-300
                  hover:px-7
                "
              >
                Download →
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>
export default Resources;