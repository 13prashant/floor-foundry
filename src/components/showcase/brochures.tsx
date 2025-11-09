"use client";

// import { brochureData } from "@/data/brochures";
// import BrouchersList from "./brouchers-list";
import Container from "../ui/container";
import Heading from "../ui/heading";
import Tiles from "../ui/tiles";
import { cn } from "@/lib/utils";

export default function Brochures() {
   return (
      <section className="border-t border-gray-300">
         <Container className="relative border-x border-gray-300 p-0 md:p-0">
            <div
               className={cn(
                  "relative z-40 size-full bg-white px-4 py-20 shadow-2xl transition-transform md:py-32",
                  "translate-x-3 translate-y-3 hover:translate-x-2 hover:translate-y-2",
                  "md:translate-x-6 md:translate-y-6 md:hover:translate-x-5 md:hover:translate-y-5",
                  "lg:translate-x-9 lg:translate-y-9 lg:hover:translate-x-8 lg:hover:translate-y-8"
               )}
            >
               <Tiles className="absolute -top-1 -left-1 z-10 md:-top-2 md:-left-2" />
               <Tiles className="absolute top-1 right-1 z-10 rotate-90 md:-top-2 md:-right-2" />
               <Tiles className="absolute -bottom-1 -left-1 z-10 -rotate-90 md:-bottom-2 md:-left-2" />
               <Tiles className="absolute -right-1 -bottom-1 z-10 rotate-180 md:-right-2 md:-bottom-2" />

               <div className="space-y-16">
                  {/* Heading */}
                  <div className="text-center">
                     <Heading text="Product Brochures" className="mb-2" />
                     <p className="mx-auto max-w-4xl font-medium text-balance text-gray-600">
                        Browse and download detailed brochures from our curated supplier collection.{" "}
                        <br />
                        Find textures, tones, and materials that match your project&apos;s vision.
                     </p>
                  </div>

                  {/* <BrouchersList brouchers={brochureData} /> */}
               </div>
            </div>

            <div className="absolute inset-0 z-0 m-auto bg-gray-200 bg-fixed"></div>
         </Container>
      </section>
   );
}
