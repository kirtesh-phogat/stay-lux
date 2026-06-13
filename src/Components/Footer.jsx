import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-amber-500">
              StayLux
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Discover luxury hotels, premium resorts and unforgettable
              travel experiences across the world's most beautiful destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-amber-500 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-amber-500 cursor-pointer transition">
                Hotels
              </li>

              <li className="hover:text-amber-500 cursor-pointer transition">
                Wishlist
              </li>

              <li className="hover:text-amber-500 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="text-amber-500"
                />
                <span>Gurgaon, Haryana, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-amber-500"
                />
                <span>info@staylux.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-amber-500"
                />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-slate-900 hover:bg-amber-600 transition px-4 py-3 rounded-full"
              >
                IG
              </a>

              <a
                href="#"
                className="bg-slate-900 hover:bg-amber-600 transition px-4 py-3 rounded-full"
              >
                X
              </a>

              <a
                href="#"
                className="bg-slate-900 hover:bg-amber-600 transition px-4 py-3 rounded-full"
              >
                IN
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>
            © 2026 StayLux. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-amber-500 cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-amber-500 cursor-pointer transition">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;