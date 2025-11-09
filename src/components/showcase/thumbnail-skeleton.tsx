import { PDF_THUMBNAIL_SIZE } from "@/lib/constants";

export default function ThumbnailSkeleton() {
  return (
    <div
      className={`animate-pulse bg-linear-to-tr from-gray-50 via-gray-200 to-gray-300 rounded-lg`}
      style={{
        width: `${PDF_THUMBNAIL_SIZE}px`,
        height: `${PDF_THUMBNAIL_SIZE}px`,
      }}
    />
  );
}
