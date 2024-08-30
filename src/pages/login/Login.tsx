import { useState, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminContext from "../context/AdminContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setIsAuthenticated } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      toast.error("Please fill in all fields.");
      return;
    }
    if (email !== "" && password !== "") {
      toast.success("Login success");
      setIsAuthenticated(true);
      navigate("clients-table");
    }
    // Here you would typically handle the login logic
    console.log("Login attempted with:", { email, password });
  };

  return (
    <div className="flex justify-center min-h-screen items-center w-full">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-5">
        <h2 className="text-2xl mb-6 text-center font-bold text-gray-800">
          Authenticate to access the dashboard
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
