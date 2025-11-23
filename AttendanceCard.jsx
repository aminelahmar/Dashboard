export default function AttendanceCard({ title, value }) {
  return (
    <div className="p-5 bg-white rounded-xl shadow-md w-full">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
