import DashboardCard from "@/components/dashboard/DashboardCard";
import { dashboardCards } from "@/data/dashboardCards";

export default function DashboardPage() {
  return (
    <>
      <h2 className="text-4xl font-bold text-slate-900">
        Legal Workspace
      </h2>

      <p className="text-gray-500 mt-2">
        Access all Lexora services from one place.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
        {dashboardCards.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </>
  );
}