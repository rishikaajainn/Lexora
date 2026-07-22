import { apiRequest } from "./api";
import { LegalAdvisorResponse } from "@/types/legal";

export interface AskLegalAdvisorRequest {
  question: string;
  country: string;
  location: string;
  category: string;
  language: string;
}

export function askLegalAdvisor(
  data: AskLegalAdvisorRequest
) {
  return apiRequest<LegalAdvisorResponse>(
    "/legal-advisor/ask",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}