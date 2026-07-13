import DocumentUpload from "@/components/dashboard/DocumentUpload";
import AnalysisResult from "@/components/dashboard/AnalysisResult";

export default function DocumentAnalyzer() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Document Analyzer
        </h1>

        <p className="text-gray-500 mt-2">
          Upload legal documents and receive AI-powered explanations.
        </p>
      </div>

      <DocumentUpload />
      <AnalysisResult />

    </div>
  );
}