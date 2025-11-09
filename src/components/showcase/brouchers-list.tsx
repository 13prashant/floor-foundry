import { BrochureCategory } from "@/types";
import PDFThumbnail from "./pdf-thumbnail";
import { PDF_THUMBNAIL_SIZE } from "@/lib/constants";

interface BrouchersListProps {
  brouchers: BrochureCategory[];
}
export default function BrouchersList({ brouchers }: BrouchersListProps) {
  return brouchers.map((category, categoryIndex) => (
    <div key={categoryIndex} className="space-y-6">
      {/* Category Heading */}
      <div className="border-l-4 border-slate-900 pl-4">
        <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
      </div>

      {/* Broucher PDFs */}
      <div className="flex flex-wrap gap-2 w-full justify-center">
        {category.pdfs.map((pdf) => (
          <PDFThumbnail
            key={pdf.id}
            pdf={pdf}
            thumbnailPageSize={PDF_THUMBNAIL_SIZE}
          />
        ))}
      </div>
    </div>
  ));
}
