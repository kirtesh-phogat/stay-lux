import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Goa",
    stays: "120+ Luxury Stays",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80",
  },
  {
    id: 2,
    name: "Manali",
    stays: "80+ Mountain Resorts",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
  },
  {
    id: 3,
    name: "Jaipur",
    stays: "100+ Heritage Hotels",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
  },
  {
    id: 4,
    name: "Udaipur",
    stays: "90+ Luxury Palaces",
    image:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=1200&q=80",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-amber-600 font-semibold uppercase tracking-[4px]">
            Explore India
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Popular Destinations
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover premium destinations featuring luxury hotels,
            curated experiences and unforgettable stays.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-3xl shadow-xl cursor-pointer"
            >
              <div className="relative h-105">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-3xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-200 mt-2">
                    {item.stays}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;