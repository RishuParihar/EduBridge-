import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      {/* Hero Section */}
      <section className="relative text-center py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🎓 SDG 4 • Quality Education
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Welcome to{" "}
            <span className="text-blue-700">
              EduBridge
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the education gap through free study resources,
            previous year papers, career opportunities, and a collaborative
            student community.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <Link
              to="/resources"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Explore Resources
            </Link>

            <Link
              to="/opportunities"
              className="bg-white border border-blue-200 text-blue-700 px-8 py-4 rounded-xl font-semibold shadow hover:bg-blue-50 transition"
            >
              View Opportunities
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">

            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-md">
              <h3 className="text-3xl font-bold text-blue-700">
                500+
              </h3>
              <p className="text-gray-600">
                Resources
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-md">
              <h3 className="text-3xl font-bold text-purple-700">
                1K+
              </h3>
              <p className="text-gray-600">
                Students
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-md">
              <h3 className="text-3xl font-bold text-green-700">
                50+
              </h3>
              <p className="text-gray-600">
                Opportunities
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white hover:border-blue-200 transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-2xl text-3xl mb-5">
              📚
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Free Notes
            </h2>

            <p className="mt-3 text-gray-600">
              Access quality study notes, academic resources and learning
              materials shared by students and educators.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white hover:border-blue-200 transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center bg-purple-100 rounded-2xl text-3xl mb-5">
              📝
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Previous Papers
            </h2>

            <p className="mt-3 text-gray-600">
              Practice smarter with previous year question papers and exam
              preparation resources.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white hover:border-blue-200 transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-2xl text-3xl mb-5">
              👨‍🎓
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Student Community
            </h2>

            <p className="mt-3 text-gray-600">
              Connect with learners, share resources, collaborate and grow
              together through community learning.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose EduBridge */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Why Choose EduBridge?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center">
              <div className="text-5xl mb-4">
                🎯
              </div>

              <h3 className="font-bold text-xl text-gray-800">
                Focused Learning
              </h3>

              <p className="text-gray-600 mt-3">
                Curated educational resources to help students achieve
                academic excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">
                🤝
              </div>

              <h3 className="font-bold text-xl text-gray-800">
                Community Driven
              </h3>

              <p className="text-gray-600 mt-3">
                Learn, share and collaborate with students from different
                backgrounds and disciplines.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">
                🚀
              </div>

              <h3 className="font-bold text-xl text-gray-800">
                Career Ready
              </h3>

              <p className="text-gray-600 mt-3">
                Discover internships, hackathons, certifications and career
                opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;