import { brochureData } from "@/data/brochures";
import BrouchersList from "./brouchers-list";

export default function Brochures() {
  return (
    <section className="max-w-7xl mx-auto p-10">
      <div className="space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Our Brochures</h1>
          <p className="text-gray-600">
            Browse our collection of product catalogs and brochures
          </p>
        </div>

        <BrouchersList brouchers={brochureData} />
      </div>
    </section>
  );
}
