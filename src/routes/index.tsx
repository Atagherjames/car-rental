import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { motion } from "framer-motion";
import VehicleCard from "../components/VehicleCard";
import { FaGasPump, FaCogs, FaUsers } from "react-icons/fa";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

function HomePage() {
  const vehicles = [
    {
      imgUrl: "/car_image1.webp",
      name: "Lamborghini Huracán",
      price: 1250,
      type: "Supercar",
      year: 2024,
      details: [
        { icon: FaGasPump, text: "Petrol" },
        { icon: FaCogs, text: "Automatic" },
        { icon: FaUsers, text: "2 Seats" },
      ],
    },
    {
      imgUrl: "/car_image2.webp",
      name: "Range Rover Sport",
      price: 850,
      type: "SUV",
      year: 2023,
      details: [
        { icon: FaGasPump, text: "Diesel" },
        { icon: FaCogs, text: "Automatic" },
        { icon: FaUsers, text: "5 Seats" },
      ],
    },
    {
      imgUrl: "/car_image3.png",
      name: "Tesla Model S",
      price: 650,
      type: "Electric",
      year: 2024,
      details: [
        { icon: FaGasPump, text: "Electric" },
        { icon: FaCogs, text: "Auto Drive" },
        { icon: FaUsers, text: "5 Seats" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FBFF]">
      {/* 🌟 Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center pt-16 pb-10 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-10"
        >
          Luxury cars on <span className="text-[#1E63E9]">Rent</span>
        </motion.h1>

        {/* 🔍 Search Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white shadow-lg rounded-2xl md:rounded-full flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 px-6 py-6 w-[90%] md:w-[75%] lg:w-[65%] justify-between transition-all"
        >
          {/* Pickup Location */}
          <div className="flex flex-col text-left w-full md:w-auto">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Pickup Location
            </label>
            <select
              className="text-sm text-gray-500 bg-transparent outline-none border border-gray-200 md:border-none rounded-md md:rounded-none px-3 py-2 md:px-0 md:py-0"
              defaultValue=""
            >
              <option value="">Please select location</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
              <option value="portharcourt">Port Harcourt</option>
              <option value="enugu">Enugu</option>
              <option value="ibadan">Ibadan</option>
            </select>
          </div>

          {/* Pick-up Date */}
          <div className="flex flex-col text-left w-full md:w-auto">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Pick-up Date
            </label>
            <input
              type="date"
              className="text-sm text-gray-600 bg-transparent outline-none border border-gray-200 md:border-none rounded-md md:rounded-none px-3 py-2 md:px-0 md:py-0"
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col text-left w-full md:w-auto">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Return Date
            </label>
            <input
              type="date"
              className="text-sm text-gray-600 bg-transparent outline-none border border-gray-200 md:border-none rounded-md md:rounded-none px-3 py-2 md:px-0 md:py-0"
            />
          </div>

          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#1E63E9] hover:bg-blue-700 text-white text-sm font-semibold rounded-full px-6 py-3 flex items-center justify-center gap-2 whitespace-nowrap transition w-full md:w-auto mt-2 md:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
            Search
          </motion.button>
        </motion.div>

        {/* 🚘 Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <img
            src="/main_car.png"
            alt="Luxury Car"
            className="w-[90%] md:w-[75%] lg:w-[60%] object-contain"
          />
        </motion.div>
      </motion.section>

      {/* 🚗 Featured Vehicles Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }} // ✅ re-animates when back in view
        className="py-20 px-6 md:px-12 lg:px-20 bg-white text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center"
        >
          Featured <span className="text-[#1E63E9]">Vehicles</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-600 mb-12 text-sm md:text-base max-w-2xl mx-auto"
        >
          Explore our selection of premium vehicles available for your next adventure.
        </motion.p>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ amount: 0.3, once: false }} // ✅ triggers repeatedly
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default HomePage;
