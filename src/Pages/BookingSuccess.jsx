import { useLocation, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const BookingSuccess = () => {
  const location = useLocation();

  const booking = location.state;

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Booking Not Found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-[80vh] flex items-center justify-center px-6">

        <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-10 text-center">

          <div className="text-7xl mb-5">
            🎉
          </div>

          <h1 className="text-5xl font-bold">
            Booking Confirmed
          </h1>

          <p className="text-gray-500 mt-4">
            Your reservation has been
            successfully completed.
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 mt-10 text-left">

            <p>
              <strong>
                Booking ID:
              </strong>{" "}
              {booking.bookingId}
            </p>

            <p>
              <strong>Hotel:</strong>{" "}
              {booking.hotel.name}
            </p>

            <p>
              <strong>
                Location:
              </strong>{" "}
              {booking.hotel.location}
            </p>

            <p>
              <strong>
                Check In:
              </strong>{" "}
              {booking.checkIn}
            </p>

            <p>
              <strong>
                Check Out:
              </strong>{" "}
              {booking.checkOut}
            </p>

            <p>
              <strong>Guests:</strong>{" "}
              {booking.guests}
            </p>

            <p>
              <strong>Total:</strong>{" "}
              ₹
              {booking.totalPrice.toLocaleString()}
            </p>

          </div>

          <Link
            to="/hotels"
            className="inline-block mt-8 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold"
          >
            Explore More Hotels
          </Link>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default BookingSuccess;