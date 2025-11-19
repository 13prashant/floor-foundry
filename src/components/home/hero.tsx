"use client";

import { easeInOut, motion } from "motion/react";
import { Button } from "../ui/button";
import Container from "../ui/container";
import Heading from "../ui/heading";
import Link from "next/link";

export default function Hero() {
   return (
      <Container className="relative z-40 border-x border-gray-300" as="section">
         <p className="md:text-md text-brand mx-auto max-w-lg text-center text-sm font-bold tracking-tight">
            Premium Flooring & Surface Materials
         </p>

         <Heading
            as="h1"
            text="Find the Perfect Surface for Your Project"
            className="mx-auto mt-4 max-w-2xl text-center"
         />
         <h2 className="mx-auto mt-6 w-fit max-w-lg text-center text-sm font-medium tracking-tight text-balance text-gray-600 md:text-lg">
            Explore a curated range of fine stones, woods, and finishes, <br />
            <span className="font-bold">crafted to elevate every space.</span>
         </h2>

         <div className="mx-auto mt-10 flex w-fit flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            <Button>
               <Link
                  href="https://drive.google.com/drive/folders/1vwqFJpYO0muCz9kwJduAMh13T-U7OiXq"
                  target="_blank"
               >
                  Browse Products
               </Link>
            </Button>
            <Button variant="outline">Contact Today</Button>
         </div>

         <FlooringTiles />
      </Container>
   );
}

function FlooringTiles() {
   return (
      <motion.div
         initial={{
            translateX: 100,
            filter: "blur(16px)",
         }}
         animate={{
            translateX: 0,
            filter: "blur(0px)",
            transition: {
               duration: 0.5,
               ease: easeInOut,
            },
         }}
         className="absolute -right-2 bottom-0 -z-10 grid w-[70%] grid-cols-7 mask-t-from-0% mask-t-to-70% md:w-[840px] md:mask-t-to-100% md:mask-l-from-0% md:mask-l-to-110%"
      >
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="col-span-1 h-8 border-0 border-dashed border-gray-300 md:h-16"
         />
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="col-span-1 h-8 border-0 border-dashed border-gray-300 md:h-16"
         />
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="col-span-1 h-8 border-0 border-dashed border-gray-300 md:h-16"
         />
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="width-32 col-span-4 h-8 border border-r-0 border-dashed border-gray-300 md:h-16"
         />

         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="col-span-2 h-8 border border-dashed border-gray-300 md:h-16"
         />
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="col-span-2 h-8 border border-dashed border-gray-300 md:h-16"
         />
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="col-span-1 h-8 border border-dashed border-gray-300 md:h-16"
         />
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="width-32 col-span-2 h-8 border border-r-0 border-dashed border-gray-300 md:h-16"
         />

         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="col-span-1 h-8 border border-l-0 border-dashed border-gray-300 md:h-16"
         />
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="col-span-2 h-8 border border-dashed border-gray-300 md:h-16"
         />
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="col-span-3 h-8 border border-dashed border-gray-300 md:h-16"
         />
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="width-32 col-span-1 h-8 border border-r-0 border-dashed border-gray-300 md:h-16"
         />

         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="col-span-2 h-8 border border-b-0 border-dashed border-gray-300 md:h-16"
         />
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="col-span-2 h-8 border border-b-0 border-dashed border-gray-300 md:h-16"
         />
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="col-span-1 h-8 border border-b-0 border-dashed border-gray-300 md:h-16"
         />
         <motion.div
            whileHover={{
               background: "oklch(76.932% 0.082 80.998 / 0.1)",
            }}
            className="width-32 col-span-2 h-8 border border-r-0 border-b-0 border-dashed border-gray-300 md:h-16"
         />
      </motion.div>
   );
}
