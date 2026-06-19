import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050816] text-white">

      <h1 className="text-7xl font-black text-cyan-400">
        404
      </h1>

      <p className="text-gray-400 mt-4 text-lg">
        Page Not Found
      </p>

      <Link
        to="/"
        className="
          mt-8
          px-8
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-purple-500
          font-bold
        "
      >
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;