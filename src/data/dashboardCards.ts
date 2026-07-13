import {
  MessageCircle,
  FileText,
  Users,
  Gavel,
  FilePenLine,
  GitCompare,
} from "lucide-react";

export const dashboardCards = [
  {
    title: "AI Legal Advisor",
    description: "Chat with Lexora AI in your preferred language.",
    icon: MessageCircle,
    href: "/chat",
  },
  {
    title: "Document Analyzer",
    description: "Upload contracts, FIRs or notices for AI analysis.",
    icon: FileText,
    href: "/document-analyzer",
  },
  {
    title: "Find Your Lawyer",
    description: "Search verified lawyers by location and expertise.",
    icon: Users,
    href: "/find-lawyer",
  },
  {
    title: "Court Rehearsal",
    description: "Practice legal questioning before court hearings.",
    icon: Gavel,
    href: "/court-rehearsal",
  },
  {
    title: "Generate Documents",
    description: "Generate FIRs and legal complaint drafts instantly.",
    icon: FilePenLine,
    href: "/document-generator",
  },
  {
    title: "Decision Comparison",
    description: "Compare legal paths with cost, effort and timeline.",
    icon: GitCompare,
    href: "/decision-comparison",
  },
];