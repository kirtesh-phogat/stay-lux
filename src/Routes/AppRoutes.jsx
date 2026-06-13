import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Hotels from "../Pages/Hotels";
import Login from "../Pages/Login";
import HotelDetails from "../Pages/HotelDetails";
import Wishlist from "../Pages/Wishlist";
import Signup from "../Pages/SignUp";
import BookingSummary from "../Pages/BookingSummary";
import BookingSuccess from "../Pages/BookingSuccess";
import MyBookings from "../Pages/MyBookings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Signup />} />
      <Route path="/hotel/:id" element={<HotelDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/booking-summary" element={<BookingSummary />} />
      <Route path="/booking-success" element={<BookingSuccess />} />
      <Route path="/my-bookings" element={<MyBookings />} />
    </Routes>
  );
}

export default AppRoutes;