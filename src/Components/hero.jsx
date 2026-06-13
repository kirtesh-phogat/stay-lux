import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-center">
      
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-amber-400 uppercase tracking-[5px] font-semibold mb-4"
        >
          Curated Luxury Stays
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Find Your
          <span className="block text-amber-400">
            Perfect Escape
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          Discover handpicked luxury hotels, premium resorts, and
          unforgettable experiences across the world's most stunning
          destinations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/hotels"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Explore Hotels
            </Link>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 transition"
          >
            Watch Experience
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
        >
          <div>
            <h3 className="text-3xl font-bold text-white">500+</h3>
            <p className="text-gray-300">Luxury Hotels</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">50+</h3>
            <p className="text-gray-300">Destinations</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">25k+</h3>
            <p className="text-gray-300">Happy Guests</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;