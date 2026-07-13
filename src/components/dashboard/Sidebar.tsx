import Link from "next/link";
import { FilePlus2 } from "lucide-react";
import {
  LayoutDashboard,
  MessageCircle,
  FileText,
  Scale,
  Users,
  Clock3,
  History,
  User,
  Gavel,
} from "lucide-react";


const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "AI Legal Advisor", href: "/chat", icon: MessageCircle },
  { name: "Document Analyzer", href: "/document-analyzer", icon: FileText },
  { name: "Decision Comparison", href: "/decision-comparison", icon: Scale },
  { name: "Court Rehearsal", href: "/court-rehearsal", icon:Gavel },
  { name: "Document Generator", href: "/document-generator", icon:FilePlus2 },
  { name: "Find Lawyer", href: "/find-lawyer", icon: Users },
  { name: "Timeline", href: "/timeline", icon: Clock3 },
  { name: "History", href: "/history", icon: History },
  { name: "Profile", href: "/profile", icon: User },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-10">
        ⚖️ Lexora
      </h1>

      <nav className="space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}