import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HotelCard from "../Components/HotelCard";

import hotels from "../Data/Hotels";

const Hotels = () => {
  const [searchParams] = useSearchParams();

  const homeSearch =
    searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] =
    useState(homeSearch);

  const [selectedLocation, setSelectedLocation] =
    useState("All");

  const [selectedRating, setSelectedRating] =
    useState("All");

  const locations = [
    "All",
    ...new Set(
      hotels.map((hotel) => hotel.location)
    ),
  ];

  const filteredHotels = hotels.filter(
    (hotel) => {
      const searchMatch =
        hotel.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        hotel.location
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const locationMatch =
        selectedLocation === "All" ||
        hotel.location ===
          selectedLocation;

      const ratingMatch =
        selectedRating === "All" ||
        hotel.rating >=
          Number(selectedRating);

      return (
        searchMatch &&
        locationMatch &&
        ratingMatch
      );
    }
  );

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* Heading */}

        <div className="text-center mb-12">

          <p className="text-amber-600 uppercase tracking-[4px] font-semibold">
            Premium Collection
          </p>

          <h1 className="text-5xl font-bold mt-3">
            Explore Luxury Hotels
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover handpicked luxury stays and
            unforgettable experiences across
            India's most beautiful destinations.
          </p>

        </div>

        {/* Filters */}

        <div className="bg-white shadow-lg rounded-3xl p-6 mb-12">

          <div className="grid md:grid-cols-3 gap-4">

            {/* Search */}

            <input
              type="text"
              placeholder="Search by hotel or location..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500"
            />

            {/* Location */}

            <select
              value={selectedLocation}
              onChange={(e) =>
                setSelectedLocation(
                  e.target.value
                )
              }
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500"
            >
              {locations.map(
                (location) => (
                  <option
                    key={location}
                    value={location}
                  >
                    {location}
                  </option>
                )
              )}
            </select>

            {/* Rating */}

            <select
              value={selectedRating}
              onChange={(e) =>
                setSelectedRating(
                  e.target.value
                )
              }
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500"
            >
              <option value="All">
                All Ratings
              </option>

              <option value="4.5">
                4.5+ Rating
              </option>

              <option value="4.8">
                4.8+ Rating
              </option>

              <option value="4.9">
                4.9 Rating
              </option>
            </select>

          </div>

        </div>

        {/* Results */}

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl font-semibold">
            Available Hotels
          </h2>

          <p className="text-gray-500">
            {filteredHotels.length} Hotel
            {filteredHotels.length !== 1
              ? "s"
              : ""}
            {" "}Found
          </p>

        </div>

        {/* Hotel Grid */}

        {filteredHotels.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredHotels.map(
              (hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                />
              )
            )}

          </div>
        ) : (
          <div className="bg-gray-50 rounded-3xl py-20 text-center">

            <h3 className="text-3xl font-bold">
              No Hotels Found
            </h3>

            <p className="text-gray-500 mt-3">
              Try changing your search or
              filters.
            </p>

          </div>
        )}

      </section>

      <Footer />
    </>
  );
};

export default Hotels;