import Image from "next/image";
import { trustedByCompanies } from "./helpers";

export default function TrustedBy() {
  return (
    <section className="border-t border-gray-300">
      <div className="relative max-w-7xl mx-auto border-x border-gray-300 p-32">
        <div className="absolute z-10 h-2 w-2 bg-black -top-1 -left-1" />
        <div className="absolute z-10 h-2 w-2 bg-black -top-1 -right-1" />

        <div className="space-y-16">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">
              Trusted by Industry Professionals
            </h1>
            <p className="text-gray-600 font-medium max-w-4xl mx-auto">
              Proudly trusted by builders, developers, and design studios <br />
              who value quality, consistency, and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-4 bg-white">
            {trustedByCompanies.map((company, index) => (
              <div
                key={index}
                className="min-h-32 grid place-items-center  bg-black border-[0.5px] border-dashed border-gray-300 "
              >
                <div className="relative w-24 h-10">
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
                className="min-h-32 grid place-items-center bg-black border-[0.5px] border-dashed border-gray-300 "
              >
                <div className="relative w-24 h-10">
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
