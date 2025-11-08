export interface BrochurePDF {
  id: string; // Google Drive file ID
  name: string;
  description?: string;
  thumbnailPage: number;
  thumbnail: string;
}

export interface BrochureCategory {
  name: string;
  pdfs: BrochurePDF[];
}
