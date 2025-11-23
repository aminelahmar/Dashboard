import AttendanceCard from "../components/AttendanceCard";
import ChartAttendance from "../components/ChartAttendance";

export default function Dashboard() {
  return (
    <div className="p-5 space-y-5">
      <div className="grid grid-cols-3 gap-5">
        <AttendanceCard title="Today's Attendance" value="123" />
        <AttendanceCard title="RFID Scans" value="87" />
        <AttendanceCard title="Face ID Matches" value="36" />
      </div>

      <ChartAttendance />
    </div>
  );
}
