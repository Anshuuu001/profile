import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", views: 400 },
  { name: "Feb", views: 900 },
  { name: "Mar", views: 1200 },
  { name: "Apr", views: 1800 },
  { name: "May", views: 2500 },
  { name: "Jun", views: 4200 },
];

function MiniChart() {
  return (
    <div
      className="
        bg-white/5
        border border-white/10
        backdrop-blur-lg
        rounded-3xl
        p-6
      "
    >

      <h2 className="text-2xl font-bold mb-8">
        Growth Analytics
      </h2>

      <div style={{ width: "100%", height: 350 }}>

        <ResponsiveContainer>

          <LineChart data={data}>

            <XAxis dataKey="name" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="views"
              stroke="#00ffff"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default MiniChart;