const opportunities = [
  {
    title: "Google Summer of Code",
    type: "Open Source",
    deadline: "30 Apr 2025",
    status: "Open",
    description:
      "Work with open-source organizations and receive a stipend.",
  },
  {
    title: "Microsoft Learn Student Ambassadors",
    type: "Student Program",
    deadline: "15 May 2025",
    status: "Open",
    description:
      "Build leadership and technical skills through Microsoft.",
  },
  {
    title: "Internshala Internships",
    type: "Internship",
    deadline: "Ongoing",
    status: "Open",
    description:
      "Find internships across multiple domains and companies.",
  },
  {
    title: "Smart India Hackathon",
    type: "Hackathon",
    deadline: "20 Jun 2025",
    status: "Open",
    description:
      "India's largest innovation and problem-solving hackathon.",
  },
  {
    title: "Google AI Internship",
    type: "AI Internship",
    deadline: "10 Jul 2025",
    status: "Open",
    description:
      "Research and development internship in Artificial Intelligence.",
  },
  {
    title: "Kaggle Competitions",
    type: "AI / Data Science",
    deadline: "Ongoing",
    status: "Open",
    description:
      "Participate in real-world machine learning competitions.",
  },
  {
    title: "AWS Educate",
    type: "Certification",
    deadline: "Ongoing",
    status: "Open",
    description:
      "Learn cloud computing and earn AWS certifications.",
  },
  {
    title: "NVIDIA Deep Learning Institute",
    type: "AI Certification",
    deadline: "Ongoing",
    status: "Open",
    description:
      "Industry-level AI and Deep Learning training programs.",
  },
  {
    title: "Google Developer Student Clubs",
    type: "Community",
    deadline: "Semester Based",
    status: "Open",
    description:
      "Join tech communities and organize campus events.",
  },
];

function Opportunities() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">

      <div className="max-w-7xl mx-auto p-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">
            Opportunities Hub
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Discover internships, hackathons, scholarships,
            certifications and AI opportunities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-gray-500">Total Opportunities</h3>
            <p className="text-4xl font-bold text-purple-600 mt-2">
              20+
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-gray-500">Open Applications</h3>
            <p className="text-4xl font-bold text-green-600 mt-2">
              15
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-gray-500">AI Opportunities</h3>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              5+
            </p>
          </div>

        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search opportunities..."
          className="w-full p-4 rounded-2xl border border-gray-200 bg-white shadow-sm mb-8 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
            All
          </button>

          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            Internship
          </button>

          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
            AI
          </button>

          <button className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
            Hackathons
          </button>

          <button className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
            Certifications
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 transition duration-300 hover:shadow-purple-200 hover:shadow-xl"
            >

              {/* Save Button */}
              <div className="flex justify-between items-start">
                <span className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
                  {item.type}
                </span>

                <button className="text-xl">
                  🤍
                </button>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mt-4">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-3">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-5">
                <span className="text-sm text-gray-500">
                  📅 {item.deadline}
                </span>

                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  {item.status}
                </span>
              </div>

              <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-medium transition">
                Apply Now →
              </button>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Opportunities;