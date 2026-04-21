import React from "react";
import { useTimeline } from "../../context/TimelineContext";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Stats = () => {
  const { timeline } = useTimeline();

  const callCount = timeline.filter((t) => t.type === "call").length;
  const textCount = timeline.filter((t) => t.type === "text").length;
  const videoCount = timeline.filter((t) => t.type === "video").length;

  const data = [
    { name: "Call", value: callCount, color: "#244D3F" },
    { name: "Text", value: textCount, color: "#7F37F5" },
    { name: "Video", value: videoCount, color: "#37A163" },
  ];

  return (
    <div className="bg-[#F8FAFC] py-10 px-4 md:px-0 md:py-16">
      <div className="max-w-[900px] mx-auto">

        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Friendship Analytics
        </h1>

        
        <div className="bg-white p-5 md:p-6 rounded-xl shadow">

          <p className="font-medium mb-4 text-sm md:text-base">
            By Interaction Type
          </p>

          
          <div className="flex justify-center">
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
                cornerRadius={8}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.color}
                    stroke="#fff"
                    strokeWidth={3}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </div>

         
          <div className="flex justify-center gap-4 md:gap-6 mt-6 flex-wrap">

            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm"
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>

                <span className="text-gray-600">
                  {item.name}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Stats;
