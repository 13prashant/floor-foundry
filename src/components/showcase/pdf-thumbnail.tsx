"use client";

import { BrochurePDF } from "@/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import ThumbnailSkeleton from "./thumbnail-skeleton";
import { PDF_THUMBNAIL_SIZE } from "@/utils/constants";

// Dynamically import PDF viewer component
const PDFViewer = dynamic(
  () => import("./pdf-viewer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <ThumbnailSkeleton />,
  }
);

interface PDFThumbnailProps {
  pdf: BrochurePDF;
  thumbnailPageSize: number;
}
export default function PDFThumbnail({
  pdf,
  thumbnailPageSize,
}: PDFThumbnailProps) {
  const pdfUrl = `https://drive.google.com/file/d/${pdf.id}/view`;
  const pdfFileUrl = `/api/pdf-proxy?id=${pdf.id}`;

  return (
    <Link
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-90 duration-200 cursor-pointer group shadow-sm hover:shadow-md space-y-6 overflow-hidden bg-white p-10 rounded-2xl border border-gray-200"
      style={{
        maxWidth: `${PDF_THUMBNAIL_SIZE + 82}px`,
      }}
    >
      <div className="space-y-1 ">
        <p className="font-extrabold text-xl">{pdf.name}</p>
        <p className="text-gray-600 font-medium">{pdf.description ?? ""}</p>
      </div>
      <PDFViewer
        pdfFileUrl={pdfFileUrl}
        pageNumber={pdf.thumbnailPage}
        height={thumbnailPageSize}
      />
    </Link>
  );
}
