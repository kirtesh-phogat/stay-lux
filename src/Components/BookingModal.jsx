import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Star } from "lucide-react";

const BookingModal = ({
  isOpen,
  onClose,
  hotel,
}) => {
  const navigate = useNavigate();

  const [bookingData, setBookingData] =
    useState({
      checkIn: "",
      checkOut: "",
      guests: 1,
      specialRequest: "",
    });

  if (!isOpen) return null;

  const calculateNights = () => {
    if (
      !bookingData.checkIn ||
      !bookingData.checkOut
    )
      return 0;

    const checkIn = new Date(
      bookingData.checkIn
    );

    const checkOut = new Date(
      bookingData.checkOut
    );

    const difference =
      checkOut - checkIn;

    return Math.ceil(
      difference / (1000 * 60 * 60 * 24)
    );
  };

  const nights = calculateNights();

  const pricePerNight = Number(
    hotel.price.replace(/[₹,]/g, "")
  );

  const totalPrice =
    nights > 0
      ? nights * pricePerNight
      : 0;

  const isFormValid =
    bookingData.checkIn &&
    bookingData.checkOut &&
    bookingData.guests > 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/booking-summary", {
      state: {
        hotel,
        checkIn:
          bookingData.checkIn,
        checkOut:
          bookingData.checkOut,
        guests:
          bookingData.guests,
        specialRequest:
          bookingData.specialRequest,
        nights,
        totalPrice,
      },
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-2xl rounded-3xl p-8 max-h-[90vh] overflow-y-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-4xl font-bold">
            Reserve Your Stay
          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ✕
          </button>

        </div>

        {/* Hotel Details */}

        <div className="bg-gray-50 rounded-2xl p-5 mb-8">

          <h3 className="text-2xl font-bold">
            {hotel.name}
          </h3>

          <div className="flex items-center gap-2 mt-2 text-gray-500">
            <MapPin size={16} />
            {hotel.location}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <Star
              size={16}
              fill="currentColor"
              className="text-amber-500"
            />

            <span>
              {hotel.rating}
            </span>
          </div>

          <p className="text-amber-600 text-2xl font-bold mt-3">
            {hotel.price}
            <span className="text-gray-500 text-sm">
              {" "}
              / night
            </span>
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="font-medium">
              Check In
            </label>

            <input
              type="date"
              required
              value={bookingData.checkIn}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  checkIn:
                    e.target.value,
                })
              }
              className="w-full border rounded-xl px-4 py-3 mt-2"
            />
          </div>

          <div>
            <label className="font-medium">
              Check Out
            </label>

            <input
              type="date"
              required
              value={bookingData.checkOut}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  checkOut:
                    e.target.value,
                })
              }
              className="w-full border rounded-xl px-4 py-3 mt-2"
            />
          </div>

          <div>
            <label className="font-medium">
              Guests
            </label>

            <input
              type="number"
              min="1"
              value={bookingData.guests}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  guests:
                    e.target.value,
                })
              }
              className="w-full border rounded-xl px-4 py-3 mt-2"
            />
          </div>

          <div>
            <label className="font-medium">
              Special Requests
            </label>

            <textarea
              rows="3"
              placeholder="Optional..."
              value={
                bookingData.specialRequest
              }
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  specialRequest:
                    e.target.value,
                })
              }
              className="w-full border rounded-xl px-4 py-3 mt-2 resize-none"
            />
          </div>

          {/* Summary */}

          {nights > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">

              <h4 className="font-bold text-lg mb-3">
                Booking Summary
              </h4>

              <div className="space-y-2">

                <p>
                  Nights: {nights}
                </p>

                <p>
                  Guests:{" "}
                  {
                    bookingData.guests
                  }
                </p>

                <p className="font-bold text-xl text-amber-700">
                  Total: ₹
                  {totalPrice.toLocaleString()}
                </p>

              </div>

            </div>
          )}

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-4 rounded-xl font-semibold text-white transition ${
              isFormValid
                ? "bg-amber-600 hover:bg-amber-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Book Hotel
          </button>

        </form>

      </div>

    </div>
  );
};

export default BookingModal;