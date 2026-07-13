export default function TopNavbar() {
  return (
    <div className="bg-white border-b px-8 py-6 flex justify-between items-center">

      <div>

        <h2 className="text-3xl font-bold">
          Hello Welcome👋
        </h2>

        <p className="text-gray-500">
          Welcome back to your Legal Workspace
        </p>

      </div>

      <button className="bg-blue-700 text-white px-6 py-3 rounded-xl">
        + New Consultation
      </button>

    </div>
  );
}