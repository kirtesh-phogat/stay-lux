import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state;

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Booking Not Found
        </h1>
      </div>
    );
  }

  const {
    hotel,
    checkIn,
    checkOut,
    guests,
    nights,
    totalPrice,
    specialRequest,
  } = booking;

  const handleConfirmReservation = () => {
    const bookingDetails = {
      bookingId:
        "STX" +
        Math.floor(
          100000 + Math.random() * 900000
        ),
      hotel,
      checkIn,
      checkOut,
      guests,
      nights,
      totalPrice,
      specialRequest,
      bookedAt: new Date().toISOString(),
    };

    const bookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    bookings.push(bookingDetails);

    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );

    navigate("/booking-success", {
      state: bookingDetails,
    });
  };

  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">

            <h1 className="text-4xl font-bold mb-2">
              Booking Summary
            </h1>

            <p className="text-gray-500 mb-8">
              Review your reservation details.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <h3 className="font-semibold text-gray-500">
                  Hotel
                </h3>

                <p className="text-xl font-bold">
                  {hotel.name}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-500">
                  Location
                </h3>

                <p>{hotel.location}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-500">
                  Check In
                </h3>

                <p>{checkIn}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-500">
                  Check Out
                </h3>

                <p>{checkOut}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-500">
                  Guests
                </h3>

                <p>{guests}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-500">
                  Nights
                </h3>

                <p>{nights}</p>
              </div>

            </div>

            {specialRequest && (
              <div className="mt-8">

                <h3 className="font-semibold text-gray-500">
                  Special Requests
                </h3>

                <p className="mt-2">
                  {specialRequest}
                </p>

              </div>
            )}

            <div className="mt-10 border-t pt-6">

              <div className="flex justify-between items-center">

                <span className="text-2xl font-bold">
                  Total Amount
                </span>

                <span className="text-4xl font-bold text-amber-600">
                  ₹{totalPrice.toLocaleString()}
                </span>

              </div>

            </div>

            <button
              onClick={
                handleConfirmReservation
              }
              className="w-full mt-8 bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-semibold"
            >
              Confirm Reservation
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default BookingSummary;