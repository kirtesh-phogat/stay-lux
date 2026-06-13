import { Hotel, ShieldCheck, Headphones, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Hotel size={36} />,
    title: "Luxury Hotels",
    desc: "Handpicked premium stays.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Secure Booking",
    desc: "Safe and trusted reservations.",
  },
  {
    icon: <BadgeCheck size={36} />,
    title: "Best Price",
    desc: "Competitive rates guaranteed.",
  },
  {
    icon: <Headphones size={36} />,
    title: "24/7 Support",
    desc: "Always here to help.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-amber-600 uppercase tracking-[4px] font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Why Travelers Love StayLux
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-lg text-center"
            >
              <div className="flex justify-center text-amber-600 mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;