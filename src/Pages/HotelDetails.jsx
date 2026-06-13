import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Star,
  Wifi,
  Dumbbell,
  Utensils,
  Waves,
  Car,
  Coffee,
} from "lucide-react";

import hotels from "../Data/Hotels";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HotelCard from "../Components/HotelCard";
import BookingModal from "../Components/BookingModal";

const HotelDetails = () => {
  const { id } = useParams();

  const [showBookingModal, setShowBookingModal] =
  useState(false);

  const hotel = hotels.find(
    (hotel) => hotel.id === Number(id)
  );

  const similarHotels = hotels.filter(
    (item) => item.id !== Number(id)
  );

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Hotel Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen">

        {/* Hero Gallery */}
        <section className="max-w-7xl mx-auto px-6 pt-10">

          <div className="grid lg:grid-cols-3 gap-4">

            <div className="lg:col-span-2">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-125 object-cover rounded-3xl"
              />
            </div>

            <div className="grid grid-rows-2 gap-4">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-60.5 object-cover rounded-3xl"
              />

              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-60.5 object-cover rounded-3xl"
              />
            </div>

          </div>

        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left Side */}
            <div className="lg:col-span-2">

              <h1 className="text-5xl font-bold">
                {hotel.name}
              </h1>

              <div className="flex items-center gap-2 mt-4 text-gray-500">
                <MapPin size={18} />
                <span>{hotel.location}</span>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <Star
                  size={18}
                  fill="currentColor"
                  className="text-amber-500"
                />

                <span className="font-semibold">
                  {hotel.rating}
                </span>

                <span className="text-gray-500">
                  Exceptional Stay
                </span>
              </div>

              {/* About */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-5">
                  About This Property
                </h2>

                <p className="text-gray-600 leading-8">
                  {hotel.description}
                </p>
              </div>

              {/* Amenities Icons */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-8">
                  Popular Amenities
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

                  <div className="bg-white p-5 rounded-2xl shadow">
                    <Wifi className="text-amber-600 mb-3" />
                    Free WiFi
                  </div>

                  <div className="bg-white p-5 rounded-2xl shadow">
                    <Dumbbell className="text-amber-600 mb-3" />
                    Fitness Center
                  </div>

                  <div className="bg-white p-5 rounded-2xl shadow">
                    <Utensils className="text-amber-600 mb-3" />
                    Restaurant
                  </div>

                  <div className="bg-white p-5 rounded-2xl shadow">
                    <Waves className="text-amber-600 mb-3" />
                    Swimming Pool
                  </div>

                </div>
              </div>

              {/* Facilities */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-8">
                  Hotel Facilities
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {hotel.amenities.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-xl border"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Booking Card */}
<div>
  <div className="sticky top-28 bg-white rounded-3xl shadow-xl border p-8">

    <p className="text-gray-500 uppercase tracking-wider text-sm">
      Starting From
    </p>

    <h2 className="text-5xl font-bold text-amber-600 mt-2">
      {hotel.price}
    </h2>

    <p className="text-gray-500 mt-2">
      per night
    </p>

    <div className="flex items-center gap-2 mt-5">
      <Star
        size={18}
        fill="currentColor"
        className="text-amber-500"
      />

      <span className="font-semibold">
        {hotel.rating}
      </span>

      <span className="text-gray-500">
        Guest Rating
      </span>
    </div>

    <button
      onClick={() =>
        setShowBookingModal(true)
      }
      className="w-full mt-8 bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-semibold transition"
    >
      Reserve Now
    </button>

    <div className="mt-8 border-t pt-6 space-y-4 text-gray-600">

      <div className="flex items-center gap-3">
        <Car size={18} />
        Free Parking
      </div>

      <div className="flex items-center gap-3">
        <Coffee size={18} />
        Complimentary Breakfast
      </div>

      <div className="flex items-center gap-3">
        <Wifi size={18} />
        High-Speed WiFi
      </div>

    </div>

  </div>
</div>

          </div>

          {/* Similar Hotels */}
          <section className="mt-24">

            <h2 className="text-4xl font-bold mb-10">
              Similar Hotels
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarHotels.slice(0, 3).map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                />
              ))}
            </div>

          </section>

        </section>

      </main>

      <BookingModal
  isOpen={showBookingModal}
  onClose={() =>
    setShowBookingModal(false)
  }
  hotel={hotel}
/>

      <Footer />
    </>
  );
};

export default HotelDetails;