import { useNavigate, Link } from "react-router-dom";
import { FaTachometerAlt, FaHome, FaSignOutAlt, FaTimes } from "react-icons/fa";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className={`
        fixed md:sticky top-0 left-0 h-screen z-50
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full md:w-20 md:translate-x-0"}
        bg-[#09061a]/95 md:bg-white/5 backdrop-blur-2xl
        border-r border-white/10 flex flex-col justify-between overflow-hidden
      `}
    >
      <div>
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <h2 className={`font-black tracking-wider text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent ${!isOpen && "md:hidden"}`}>
            ADMIN
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-cyan-400 transition md:hidden"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-3">
          <Link
            to="/admin"
            className="flex items-center gap-4 px-4 py-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 font-semibold"
          >
            <FaTachometerAlt className="text-xl shrink-0" />
            <span className={`${!isOpen && "md:hidden"} transition-opacity duration-200`}>Dashboard</span>
          </Link>
          
          <Link
            to="/"
            className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white border border-transparent hover:border-white/5 transition font-semibold"
          >
            <FaHome className="text-xl shrink-0" />
            <span className={`${!isOpen && "md:hidden"} transition-opacity duration-200`}>Back to Site</span>
          </Link>
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-red-500/10 text-gray-400 hover:text-red-400 border border-transparent hover:border-red-500/20 transition font-semibold"
        >
          <FaSignOutAlt className="text-xl shrink-0" />
          <span className={`${!isOpen && "md:hidden"} transition-opacity duration-200`}>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
