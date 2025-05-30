"use client";

import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useMemo, useRef } from "react";

const categories = [
  { text: "Web Developer", icon: "/star.png" },
  { text: "Data Analyst", icon: "/star.png" },
  { text: "Discord Bot Developer", icon: "/star.png" },
  { text: "Webscrapping", icon: null },
];

export default function DesignCategories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    const container = containerRef.current;
    if (container) {
      const width = container.scrollWidth / 2;
      const currentX = x.get();
      const newX = (currentX - delta * 0.05) % -width;
      x.set(newX);
    }
  });

  const duplicated = useMemo(() => [...categories, ...categories], []);

  return (
    <div className="relative overflow-hidden h-20">
      {/* Bande jaune */}
      <div className="relative z-10 bg-[#FEB33B] h-full flex items-center text-2xl whitespace-nowrap text-green-900 font-medium">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex space-x-12 px-6"
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
}
