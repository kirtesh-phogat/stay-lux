import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HotelCard from "../Components/HotelCard";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    loadWishlist();

    window.addEventListener("storage", loadWishlist);

    return () => {
      window.removeEventListener("storage", loadWishlist);
    };
  }, []);

  const loadWishlist = () => {
    const data =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(data);
  };

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16 min-h-screen">
        
        <div className="mb-12">
          <p className="text-amber-600 uppercase tracking-[4px] font-semibold">
            Saved Collection
          </p>

          <h1 className="text-5xl font-bold mt-2">
            My Wishlist
          </h1>

          <p className="text-gray-500 mt-3">
            Your favorite luxury stays in one place.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-gray-50 rounded-3xl p-16 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              ❤️ No Hotels Saved Yet
            </h2>

            <p className="text-gray-500">
              Start exploring and add hotels to your wishlist.
            </p>
          </div>
        ) : (
          <>
            <p className="mb-8 text-gray-500">
              {wishlist.length} hotel
              {wishlist.length > 1 ? "s" : ""} saved
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {wishlist.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                />
              ))}
            </div>
          </>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Wishlist;