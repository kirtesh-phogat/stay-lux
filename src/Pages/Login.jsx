import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: formData.name,
        email: formData.email,
      })
    );

    alert("Login Successful");

    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">

        <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-3">
              Sign in to your StayLux account
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500"
            />

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Sign In
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Login;