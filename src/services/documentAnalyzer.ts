import { DocumentAnalysisResponse } from "@/types/legal";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function analyzeDocument(
  file: File
): Promise<DocumentAnalysisResponse> {

  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    `${BASE_URL}/document-analyzer`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to analyze document");
  }

  return response.json();
}