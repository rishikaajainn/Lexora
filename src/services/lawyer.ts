import { apiRequest } from "./api";
import { Lawyer } from "@/types/legal";

export interface LawyerFilters {
  country: string;
  city: string;
  specialization: string;
  language: string;
}

export function findLawyers(
  filters: LawyerFilters
) {
  return apiRequest<Lawyer[]>(
    "/lawyers/search",
    {
      method: "POST",
      body: JSON.stringify(filters),
    }
  );
}