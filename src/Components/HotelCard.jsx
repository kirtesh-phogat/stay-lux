import { motion } from "framer-motion";
import { Star, MapPin, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const [liked, setLiked] = useState(() => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    return wishlist.some(
      (item) => item.id === hotel.id
    );
  });

  const handleWishlist = () => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(
      (item) => item.id === hotel.id
    );

    if (exists) {
      const updated = wishlist.filter(
        (item) => item.id !== hotel.id
      );

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updated)
      );

      setLiked(false);
    } else {
      wishlist.push(hotel);

      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
      );

      setLiked(true);
    }
  };

  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

        {/* Featured Badge */}
        <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Featured
        </div>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          <Heart
            size={18}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-gray-700"
            }
          />
        </button>

        {/* Rating */}
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
          <Star
            size={14}
            fill="currentColor"
            className="text-amber-500"
          />

          <span className="font-semibold text-sm">
            {hotel.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-gray-900 truncate">
          {hotel.name}
        </h3>

        <div className="flex items-center gap-2 text-gray-500 mt-2">
          <MapPin size={16} />
          <span>{hotel.location}</span>
        </div>

        {/* Price Section */}
        <div className="mt-6 border-t border-gray-100 pt-5">

          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-3xl font-bold text-amber-600">
                {hotel.price}
              </p>

              <p className="text-sm text-gray-500">
                per night
              </p>
            </div>

            <span className="text-sm text-gray-400">
              Luxury Stay
            </span>
          </div>

          <button
            onClick={() =>
              navigate(`/hotel/${hotel.id}`)
            }
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            View Details
          </button>

        </div>

      </div>
    </motion.div>
  );
};

export default HotelCard;