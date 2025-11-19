import Image from "next/image";
import { trustedByCompanies } from "./helpers";
import Container from "../ui/container";

export default function TrustedBy() {
   return (
      <section className="border-t border-gray-300">
         <Container className="relative border-x border-gray-300">
            <div className="space-y-16">
               {/* Heading */}
               <div className="text-center">
                  <h1 className="mb-2 text-4xl font-bold">Trusted by Industry Professionals</h1>
                  <p className="mx-auto max-w-4xl font-medium text-gray-600">
                     Proudly trusted by builders, developers, and design studios <br />
                     <span className="font-bold">
                        who value quality, consistency, and timely delivery.
                     </span>
                  </p>
               </div>

               <div className="mx-auto grid max-w-60 grid-cols-2 bg-white sm:max-w-sm md:max-w-4xl md:grid-cols-4">
                  {trustedByCompanies.map((company, index) => (
                     <div
                        key={index}
                        className="grid min-h-16 place-items-center border-[0.5px] border-dashed border-gray-300 bg-black md:min-h-32"
                     >
                        <div className="relative h-6 w-16 md:h-10 md:w-24">
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
                        className="grid min-h-16 place-items-center border-[0.5px] border-dashed border-gray-300 bg-black md:min-h-32"
                     >
                        <div className="relative h-6 w-16 md:h-10 md:w-24">
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
            </div>
         </Container>
      </section>
   );
}
