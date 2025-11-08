import { PDF_THUMBNAIL_SIZE } from "@/utils/constants";

export default function FailedThumbnail() {
  return (
    <div
      className={`grid place-items-center text-center text-sm text-red-500`}
      style={{
        width: `${PDF_THUMBNAIL_SIZE}px`,
        height: `${PDF_THUMBNAIL_SIZE}px`,
      }}
    >
      Failed to load PDF
    </div>
  );
}
