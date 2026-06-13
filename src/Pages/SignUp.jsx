import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Account Created Successfully");

    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

        <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl">

          <h1 className="text-4xl font-bold text-center mb-3">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Join StayLux today
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-amber-600 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Signup;