"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  { text: "Web Developer", icon: "/star.png" },
  { text: "Data Analyst", icon: "/star.png" },
  { text: "Discord Bot Developer", icon: "/star.png" },
  { text: "Webscrapping", icon: null },
];

const DesignCategories = () => {

    const duplicated = [...categories, ...categories];
    return (
        <div className="relative z-2">
            {/* Yellow banner with design categories */}
            <div className="bg-[#FEB33B] py-4 flex justify-center items-center text-3xl">
                 <ul className="flex space-x-8 text-green-900 font-medium justify-around">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicated.map((item, index) => (
              <li key={index} className="flex items-center space-x-8">
                <p>{item.text}</p>
                {item.icon && (
                  <Image src={item.icon} alt="icon" width={25} height={25} />
                )}
              </li>
            ))}
          </motion.div>
        </ul>
            </div>
            
            {/* Green inclined banner */}
            <div className="absolute inset-0 -z-10 h-full bg-green-900 transform -skew-y-2"></div>
        </div>
    );
};

export default DesignCategories;