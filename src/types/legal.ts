// ==============================
// USER
// ==============================

export interface User {
  id?: string;
  fullName: string;
  email: string;
  country: string;
  preferredLanguage: string;
  role: "user" | "lawyer";
}

// ==============================
// CHAT
// ==============================

export interface ChatMessage {
  id?: string;
  sender: "user" | "ai";
  message: string;
  timestamp?: string;
}

// ==============================
// LEGAL OPTIONS
// ==============================

export interface LegalOption {
  title: string;
  description: string;
  estimated_time: string;
  estimated_cost: string;
  difficulty: string;
}

// ==============================
// LAWYER
// ==============================

export interface Lawyer {
  name: string;
  specialization: string;
  city: string;
  country: string;
  languages: string[];
  experience: number;
  consultation_fee: string;
  rating: number;
}

// ==============================
// LEGAL SOURCE
// ==============================

export interface Source {
  document: string;
  page?: number;
  section?: string;
  category?: string;
}

// ==============================
// LEGAL ADVISOR RESPONSE
// ==============================

export interface LegalAdvisorResponse {
  issue: string;

  severity: string;

  confidence: number;

  rights: string;

  explanation: string;

  options: LegalOption[];

  recommended_option: string;

  recommendation_reason: string;

  timeline: string[];

  estimated_cost: string;

  required_documents: string[];

  next_steps: string[];

  lawyer_needed: boolean;

  lawyer_specialization?: string;

  recommended_lawyers: Lawyer[];

  sources: Source[];

  disclaimer?: string;
}

// ==============================
// DOCUMENT ANALYZER
// ==============================

export interface DocumentAnalysisResponse {
  documentType: string;

  summary: string;

  confidence: number;

  language: string;

  processingTime: string;

  riskLevel: "Low" | "Medium" | "High";

  importantClauses: string[];

  riskyClauses: string[];

  recommendations: string[];

  legalReferences: string[];
}

// ==============================
// TIMELINE
// ==============================

export interface TimelineStep {
  title: string;

  description: string;

  completed: boolean;
}

// ==============================
// HISTORY
// ==============================

export interface HistoryItem {
  id: string;

  title: string;

  description: string;

  date: string;

  category:
    | "AI Advisor"
    | "Document Analyzer"
    | "Document Generator"
    | "Court Rehearsal";
}