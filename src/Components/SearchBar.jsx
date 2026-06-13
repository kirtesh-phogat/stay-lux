import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";

const SearchBar = () => {
  const navigate = useNavigate();

  const [destination, setDestination] =
    useState("");

  const handleSearch = () => {
    navigate(
      `/hotels?search=${destination}`
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.6,
      }}
      className="relative z-20 max-w-5xl mx-auto px-4"
    >
      <div className="-mt-14 bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white p-6">

        <div className="grid md:grid-cols-[1fr_auto] gap-4">

          {/* Destination */}

          <div>

            <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Destination
            </label>

            <div className="flex items-center gap-3 mt-2 border border-gray-200 rounded-2xl px-5 py-4 hover:border-amber-500 transition">

              <MapPin
                size={20}
                className="text-amber-600"
              />

              <input
                type="text"
                value={destination}
                onChange={(e) =>
                  setDestination(
                    e.target.value
                  )
                }
                placeholder="Where would you like to stay?"
                className="w-full outline-none bg-transparent"
              />

            </div>

          </div>

          {/* Search Button */}

          <div className="flex items-end">

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={handleSearch}
              className="h-14.5 px-8 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg"
            >
              <Search size={18} />

              Search Hotels
            </motion.button>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default SearchBar;