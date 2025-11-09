import Image from "next/image";
import { trustedByCompanies } from "./helpers";

export default function TrustedBy() {
   return (
      <section className="border-t border-gray-300">
         <div className="relative mx-auto max-w-7xl border-x border-gray-300 p-32">
            <div className="space-y-16">
               {/* Heading */}
               <div className="text-center">
                  <h1 className="mb-2 text-4xl font-bold">Trusted by Industry Professionals</h1>
                  <p className="mx-auto max-w-4xl font-medium text-gray-600">
                     Proudly trusted by builders, developers, and design studios <br />
                     who value quality, consistency, and timely delivery.
                  </p>
               </div>

               <div className="grid grid-cols-4 bg-white md:grid-cols-4">
                  {trustedByCompanies.map((company, index) => (
                     <div
                        key={index}
                        className="grid min-h-32 place-items-center border-[0.5px] border-dashed border-gray-300 bg-black"
                     >
                        <div className="relative h-10 w-24">
                           <Image
                              key={index}
                              src={company.logoUrl}
                              alt={company.name}
                              fill
                              objectFit="contain"
                           />
                        </div>
                     </div>
                  ))}
                  {trustedByCompanies.map((company, index) => (
                     <div
                        key={index}
                        className="grid min-h-32 place-items-center border-[0.5px] border-dashed border-gray-300 bg-black"
                     >
                        <div className="relative h-10 w-24">
                           <Image
                              key={index}
                              src={company.logoUrl}
                              alt={company.name}
                              fill
                              objectFit="contain"
                           />
                        </div>
                     </div>
                  ))}
               </div>

               {/* <BrouchersList brouchers={brochureData} /> */}
               {/* <p className="text-gray-600 font-medium max-w-4xl mx-auto text-center">
            Our materials feature in premium residential and commercial projects
            across the region.
          </p> */}
            </div>
         </div>
      </section>
   );
}
