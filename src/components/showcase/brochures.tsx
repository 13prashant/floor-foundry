import { brochureData } from "@/data/brochures";
import BrouchersList from "./brouchers-list";

export default function Brochures() {
  return (
    <section className="border-t border-gray-300">
      <div className="relative max-w-7xl mx-auto border-x border-gray-300 p-32 bg-white">
        <div className="absolute z-10 h-2 w-2 bg-black -top-1 -left-1" />
        <div className="absolute z-10 h-2 w-2 bg-black -top-1 -right-1" />

        <div className="space-y-16">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Product Brochures</h1>
            <p className="text-gray-600 font-medium max-w-4xl mx-auto">
              Browse and download detailed brochures from our curated supplier
              collection. <br />
              Find textures, tones, and materials that match your project&apos;s
              vision.
            </p>
          </div>

          {/* <BrouchersList brouchers={brochureData} /> */}
        </div>
      </div>
    </section>
  );
}
