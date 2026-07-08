import { FaBars } from "react-icons/fa";

function Topbar({ toggleSidebar }) {
  return (
    <header className="h-20 border-b border-white/10 bg-white/5 backdrop-blur-xl px-6 md:px-10 flex items-center justify-between relative z-30">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
        >
          <FaBars size={20} />
        </button>
        <h1 className="text-xl md:text-2xl font-black text-white">
          Admin Console
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-white font-bold text-sm">Ansh</p>
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Creator Admin</p>
        </div>
        <img
          src="https://ui-avatars.com/api/?name=Ansh&background=0D8ABC&color=fff"
          alt="Admin Avatar"
          className="w-10 h-10 rounded-full border border-cyan-400/30"
        />
      </div>
    </header>
  );
}

export default Topbar;
