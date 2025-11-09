import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import { pdfjs } from "react-pdf";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

// // Configure PDF.js worker once
// if (typeof window !== "undefined" && !pdfjs.GlobalWorkerOptions.workerSrc) {
//   pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// }
