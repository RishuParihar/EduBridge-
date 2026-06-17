function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">

      <div className="max-w-6xl mx-auto p-8">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-gray-800">
            Student Dashboard
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Track your contributions, downloads and community engagement.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border border-gray-100 hover:-translate-y-1">
            <div className="text-4xl mb-3">📚</div>

            <h2 className="font-bold text-xl text-gray-800">
              Resources Uploaded
            </h2>

            <p className="text-4xl font-bold text-emerald-600 mt-4">
              12
            </p>
          </div>

          <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border border-gray-100 hover:-translate-y-1">
            <div className="text-4xl mb-3">⬇️</div>

            <h2 className="font-bold text-xl text-gray-800">
              Downloads
            </h2>

            <p className="text-4xl font-bold text-blue-600 mt-4">
              57
            </p>
          </div>

          <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border border-gray-100 hover:-translate-y-1">
            <div className="text-4xl mb-3">👥</div>

            <h2 className="font-bold text-xl text-gray-800">
              Active Users
            </h2>

            <p className="text-4xl font-bold text-purple-600 mt-4">
              350+
            </p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quick Actions
          </h2>

          <div className="flex flex-wrap gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl transition">
              Upload Resource
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition">
              Browse Resources
            </button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl transition">
              View Opportunities
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;