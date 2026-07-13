import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function DashboardCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <Link href="#">

      <div className="bg-white rounded-2xl border p-6 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">

        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">

          <Icon className="text-blue-700" />

        </div>

        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

      </div>

    </Link>
  );
}