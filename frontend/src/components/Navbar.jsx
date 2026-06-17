import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.clear();

    navigate("/", { replace: true });

    window.history.pushState(null, "", "/");
  };

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between">
      <h1 className="font-bold text-xl text-blue-600">
        EduBridge
      </h1>

      <div className="flex gap-6 items-center">
        <Link to="/home">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/opportunities">Opportunities</Link>
        <Link to="/dashboard">Dashboard</Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;