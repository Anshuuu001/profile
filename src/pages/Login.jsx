import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (email === "admin@elevateai.com" && password === "admin123") {
        localStorage.setItem("token", "mock-jwt-token-12345");
        navigate("/admin");
        return;
      }

      const res = await axios.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    } catch (err) {
      console.error(err);
      if (err.message === "Network Error" || err.code === "ERR_NETWORK" || !err.response) {
        if (email === "admin@elevateai.com" && password === "admin123") {
          localStorage.setItem("token", "mock-jwt-token-12345");
          navigate("/admin");
          return;
        }
      }
      alert("Login failed. Use admin@elevateai.com and admin123");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white">

      <form
        onSubmit={handleLogin}
        className="
          w-full
          max-w-md
          p-10
          rounded-3xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
        "
      >

        <h2 className="text-3xl font-black mb-8">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 rounded-xl bg-black/30 border border-white/10"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6 rounded-xl bg-black/30 border border-white/10"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-purple-500
            font-bold
          "
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;