"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const BrouchersHeap = ({
   brochureThumbnails,
   autoplay = false,
}: {
   brochureThumbnails: string[];
   autoplay?: boolean;
}) => {
   const [active, setActive] = useState(0);

   const handleNext = () => {
      setActive((prev) => (prev + 1) % brochureThumbnails.length);
   };

   const isActive = (index: number) => {
      return index === active;
   };

   useEffect(() => {
      if (autoplay) {
         const interval = setInterval(handleNext, 3000);
         return () => clearInterval(interval);
      }
   }, [autoplay]);

   // Generate deterministic rotation for each index
   const getRotation = (index: number) => {
      // Use a seeded pseudo-random function for SSR/client match
      // This is a simple hash based on index, but you can use a better one if needed
      const base = ((index * 9301 + 49297) % 233280) / 233280;
      return Math.floor(base * 21) - 10;
   };
   return (
      <div className="relative max-w-fit flex-1">
         <div className="relative aspect-3/4 h-60 md:h-80">
            <AnimatePresence>
               {brochureThumbnails.map((thumbnail, index) => (
                  <motion.div
                     key={index}
                     initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: getRotation(index),
                     }}
                     animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : getRotation(index),
                        zIndex: isActive(index) ? 40 : brochureThumbnails.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                     }}
                     exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: getRotation(index),
                     }}
                     transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                     }}
                     className="absolute inset-0 origin-bottom"
                  >
                     <Image
                        src={brochureThumbnails[index]}
                        alt={`Brochure ${index + 1}`}
                        width={500}
                        height={500}
                        draggable={false}
                        className="border-brand h-full w-full rounded-3xl border-2 object-cover object-center shadow-lg"
                     />
                  </motion.div>
               ))}
            </AnimatePresence>
         </div>
      </div>
   );
};
