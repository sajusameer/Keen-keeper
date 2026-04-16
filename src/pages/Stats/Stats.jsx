import { useEffect, useState } from "react";
import { PieChart, Pie, Cell,  Legend, ResponsiveContainer } from "recharts";

export default function Stats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

    const counts = {
      Call: 0,
      Text: 0,
      Video: 0
    };

    timeline.forEach(item => {
      if (counts[item.type] !== undefined) {
        counts[item.type]++;
      }
    });

    const chartData = [
      { name: "Call", value: counts.Call, fill: "#244D3F" },
      { name: "Text", value: counts.Text, fill: "#2563eb" },
      { name: "Video", value: counts.Video, fill: "#9333ea" }
    ];

    setData(chartData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 mt-10">

      <h1 className="text-2xl font-bold mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white p-6 rounded-xl shadow h-[400px]">

        {data.every(item => item.value === 0) ? (
          <p className="text-center text-gray-500 mt-20">
            No interaction data yet.
          </p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                innerRadius="60%"     // 🔥 donut style
                outerRadius="100%"
                paddingAngle={5}
                cornerRadius={10}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>

             
              <Legend />

            </PieChart>
          </ResponsiveContainer>
        )}

      </div>
    </div>
  );
}