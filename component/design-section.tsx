"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  { text: "Web Developer", icon: "/star.png" },
  { text: "Data Analyst", icon: "/star.png" },
  { text: "Discord Bot Developer", icon: "/star.png" },
  { text: "Webscrapping", icon: "/star.png"},
];

const DesignCategories = () => {
  const duplicated = [...categories, ...categories,...categories];

  return (
    <div className="relative overflow-hidden h-20">
      {/* Bande jaune */}
      <div className="relative z-10 bg-[#FEB33B] h-full flex items-center text-2xl whitespace-nowrap text-green-900 font-medium">
        <motion.div
          className="flex space-x-12 px-6"
          animate={{ x: ["%", "-80%"] }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicated.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 min-w-fit"
            >
              <p>{item.text}</p>
              {item.icon && (
                <Image
                  src={item.icon}
                  alt="icon"
                  width={25}
                  height={25}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bande verte inclinée */}
      <div className="absolute inset-0 -z-10 h-full bg-green-900 transform -skew-y-2" />
    </div>
  );
};

export default DesignCategories;
