import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../services/api"; // Import API calls
import { AuthContext } from "../App";
import deadgun from "../assets/deadgun.jpeg";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Toggle Login/Signup
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Toggle Login/Signup
  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ username: "", password: "" }); // Reset form
  };

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login API Call
        const response = await login(formData);
        alert(response.data.message);
      } else {
        // Signup API Call
        const response = await signup(formData);
        alert(response.data.message);
      }
      setIsLoggedIn(true); // Set authenticated state to true
      navigate("/"); // Redirect to home
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#8b1918] px-4">
      {/* Left Section with Image */}
      <div className="hidden md:flex items-center justify-center w-1/2 bg-black">
        <img src={deadgun} alt="Deadpool with Guns" className="w-full h-auto object-cover" />
      </div>

      {/* Right Section with Form */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 mx-4 md:mx-16 p-8 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform ">
        <h2 className="text-4xl font-bold text-red-600 mb-6 drop-shadow-lg">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-600 transition duration-200"
              placeholder="Enter your username"
            />
          </div>
          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-600 transition duration-200"
              placeholder="Enter your password"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 hover:shadow-lg transition-all duration-200"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-700">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={handleToggle}
            className="text-red-600 font-bold hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
