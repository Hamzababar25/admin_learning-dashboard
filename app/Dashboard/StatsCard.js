export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
