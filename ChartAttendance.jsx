import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function ChartAttendance() {
  const data = [
    { day: "Mon", attendance: 32 },
    { day: "Tue", attendance: 45 },
    { day: "Wed", attendance: 28 },
    { day: "Thu", attendance: 50 },
    { day: "Fri", attendance: 42 }
  ];

  return (
    <div className="p-5 bg-white rounded-xl shadow-md">
      <h3 className="mb-4 font-semibold">Weekly Attendance</h3>

      <LineChart width={430} height={260} data={data}>
        <CartesianGrid stroke="#eee" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="attendance" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </div>
  );
}
