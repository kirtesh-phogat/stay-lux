import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    setBookings(savedBookings);
  }, []);

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16 min-h-screen">

        <div className="mb-12">
          <p className="text-amber-600 uppercase tracking-[4px] font-semibold">
            StayLux
          </p>

          <h1 className="text-5xl font-bold mt-3">
            My Bookings
          </h1>

          <p className="text-gray-500 mt-4">
            View and manage all your hotel reservations.
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

            <h2 className="text-3xl font-bold">
              No Bookings Yet
            </h2>

            <p className="text-gray-500 mt-3">
              Start exploring luxury stays.
            </p>

            <Link
              to="/hotels"
              className="inline-block mt-6 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-xl"
            >
              Explore Hotels
            </Link>

          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">

            {bookings.map(
              (booking, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden"
                >

                  <img
                    src={
                      booking.hotel.image
                    }
                    alt={
                      booking.hotel.name
                    }
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">

                    <div className="flex justify-between items-start">

                      <div>
                        <h2 className="text-2xl font-bold">
                          {
                            booking.hotel
                              .name
                          }
                        </h2>

                        <p className="text-gray-500 mt-1">
                          {
                            booking.hotel
                              .location
                          }
                        </p>
                      </div>

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        Confirmed
                      </span>

                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">

                      <div>
                        <p className="text-gray-500 text-sm">
                          Booking ID
                        </p>

                        <p className="font-semibold">
                          {
                            booking.bookingId
                          }
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500 text-sm">
                          Guests
                        </p>

                        <p className="font-semibold">
                          {
                            booking.guests
                          }
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500 text-sm">
                          Check In
                        </p>

                        <p className="font-semibold">
                          {
                            booking.checkIn
                          }
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500 text-sm">
                          Check Out
                        </p>

                        <p className="font-semibold">
                          {
                            booking.checkOut
                          }
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500 text-sm">
                          Nights
                        </p>

                        <p className="font-semibold">
                          {
                            booking.nights
                          }
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500 text-sm">
                          Total
                        </p>

                        <p className="font-bold text-amber-600">
                          ₹
                          {booking.totalPrice.toLocaleString()}
                        </p>
                      </div>

                    </div>

                    <div className="mt-8 flex gap-3">

                      <Link
                        to={`/hotel/${booking.hotel.id}`}
                        className="flex-1 text-center bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-medium"
                      >
                        View Hotel
                      </Link>

                      <button
                        className="px-5 border rounded-xl hover:bg-gray-100"
                      >
                        Invoice
                      </button>

                    </div>

                  </div>

                </div>
              )
            )}

          </div>
        )}

      </section>

      <Footer />
    </>
  );
};

export default MyBookings;