export default function DocumentUpload() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 p-10 text-center hover:border-blue-600 transition">

      <div className="text-6xl mb-5">
        
      </div>

      <h2 className="text-2xl font-bold text-slate-800">
        Upload Legal Document
      </h2>

      <p className="text-gray-500 mt-3">
        Drag & drop your legal document here or browse your files.
      </p>

      <div className="mt-8 flex justify-center">

        <input
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          className="hidden"
          id="document-upload"
        />

        <label
          htmlFor="document-upload"
          className="cursor-pointer bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition"
        >
          Browse Files
        </label>

      </div>

      <div className="mt-8 grid md:grid-cols-4 gap-4 text-sm">

        <div className="bg-white rounded-xl p-4 border">
           PDF
        </div>

        <div className="bg-white rounded-xl p-4 border">
           DOCX
        </div>

        <div className="bg-white rounded-xl p-4 border">
           JPG
        </div>

        <div className="bg-white rounded-xl p-4 border">
           PNG
        </div>

      </div>

      <p className="text-gray-400 text-sm mt-6">
        Supported formats: PDF, DOC, DOCX, JPG, JPEG, PNG
      </p>

    </div>
  );
}