import { Link } from "react-router-dom";
import { Home, Users, CalendarCheck2, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-10">Smart Attendance</h2>

      <ul className="space-y-6">
        <li><Link className="flex gap-2 items-center" to="/"><Home /> Dashboard</Link></li>
        <li><Link className="flex gap-2 items-center" to="/students"><Users /> Students</Link></li>
        <li><Link className="flex gap-2 items-center" to="/attendance"><CalendarCheck2 /> Attendance</Link></li>
        <li><Link className="flex gap-2 items-center" to="/settings"><Settings /> Settings</Link></li>
      </ul>
    </div>
  );
}
