import hotels from "../Data/Hotels";
import HotelCard from "./HotelCard";

const FeaturedHotels = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-amber-600 uppercase tracking-[4px] font-semibold">
            Luxury Collection
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Featured Hotels
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedHotels;