"use client";

import { Document, Page } from "react-pdf";
import "@/utils/lib/pdf-worker";
import ThumbnailSkeleton from "./thumbnail-skeleton";
import FailedThumbnail from "./failed-thumbnail";

interface PDFViewerProps {
  pdfFileUrl: string;
  pageNumber: number;
  height: number;
}
export function PDFViewer({ pdfFileUrl, pageNumber, height }: PDFViewerProps) {
  return (
    <Document
      file={pdfFileUrl}
      loading={<ThumbnailSkeleton />}
      error={<FailedThumbnail />}
    >
      <Page
        height={height}
        pageNumber={pageNumber}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        loading={<ThumbnailSkeleton />}
        error={<FailedThumbnail />}
      />
    </Document>
  );
}
