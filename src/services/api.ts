const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}