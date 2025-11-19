"use client";

import Container from "../ui/container";
import Heading from "../ui/heading";
import Tiles from "../ui/tiles";
import { cn } from "@/lib/utils";
import { BrouchersHeap } from "./brouchers-heap";
import { brochureThumbnails } from "./helpers";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Brochures() {
   return (
      <section className="border-t border-gray-300">
         <Container className="relative border-x border-gray-300 p-0 md:p-0">
            <div
               className={cn(
                  "relative z-40 size-full bg-white px-4 py-20 shadow-2xl transition-transform md:py-32",
                  "translate-x-3 translate-y-3 hover:translate-x-2 hover:translate-y-2",
                  "md:translate-x-6 md:translate-y-6 md:hover:translate-x-5 md:hover:translate-y-5",
                  "lg:translate-x-9 lg:translate-y-9 lg:hover:translate-x-8 lg:hover:translate-y-8",
                  "flex flex-col items-center justify-center gap-10 md:flex-row md:gap-24"
               )}
            >
               <div className="w-fit">
                  <Heading text="Product Brochures" className="mb-2 text-center md:text-left" />
                  <p className="max-w-sm text-center font-medium text-balance text-gray-600 md:text-left">
                     Browse and download detailed brochures from our curated supplier collection.{" "}
                     <br />
                     <span className="font-bold">
                        Find textures, tones, and materials that match your project&apos;s vision.
                     </span>
                  </p>
               </div>

               <div className="relative">
                  <BrouchersHeap brochureThumbnails={brochureThumbnails} autoplay />
                  <Button
                     className="absolute bottom-10 -left-10 z-50 w-40 -rotate-10 shadow-[20px_5px_20px_rgba(0,0,0,1)] hover:bg-white"
                     variant="secondary"
                     size="lg"
                  >
                     <Link
                        href="https://drive.google.com/drive/folders/1vwqFJpYO0muCz9kwJduAMh13T-U7OiXq"
                        target="_blank"
                     >
                        View Brochures
                     </Link>
                  </Button>
               </div>

               <Tiles className="absolute -top-1 -left-1 z-10 md:-top-2 md:-left-2" />
               <Tiles className="absolute -top-1 -right-1 z-10 rotate-90 md:-top-2 md:-right-2" />
               <Tiles className="absolute -bottom-1 -left-1 z-10 -rotate-90 md:-bottom-2 md:-left-2" />
               <Tiles className="absolute -right-1 -bottom-1 z-10 rotate-180 md:-right-2 md:-bottom-2" />
            </div>

            <div className="absolute inset-0 z-0 m-auto bg-gray-200 bg-fixed"></div>
         </Container>
      </section>
   );
}
