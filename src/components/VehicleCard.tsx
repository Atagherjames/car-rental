import React from "react";
import { motion } from "framer-motion";

type VehicleDetail = {
  icon: React.ElementType;
  text: string;
};

type Vehicle = {
  imgUrl: string;
  name: string;
  price: number;
  type: string;
  year: number;
  details: VehicleDetail[];
};

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Image & Overlays */}
      <div className="relative h-48 md:h-56">
        <img
          src={vehicle.imgUrl}
          alt={vehicle.name || "Vehicle image"}
          className="w-full h-full object-cover"
        />

        {/* 'Available Now' Tag */}
        <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
          Available Now
        </span>

        {/* Price Overlay */}
        <span className="absolute bottom-4 right-4 bg-gray-900/80 text-white text-lg font-bold px-4 py-2 rounded-lg shadow-xl backdrop-blur-sm">
          ${vehicle.price} / day
        </span>
      </div>

      {/* Details */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {vehicle.name}
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          {vehicle.type} • {vehicle.year}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-y-3 pt-3 border-t border-gray-100">
          {vehicle.details.map((detail, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-600"
            >
              <detail.icon className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">{detail.text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
