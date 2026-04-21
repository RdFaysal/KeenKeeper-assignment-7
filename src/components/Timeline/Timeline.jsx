import { useState } from "react";
import { useTimeline } from "../../context/TimelineContext";


export default function Timeline() {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? timeline
      : timeline.filter((t) => t.type === filter);

  const getIcon = (type) => {
    if (type === "call") return "📞";
    if (type === "text") return "💬";
    if (type === "video") return "📹";
    return "📌";
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen p-6">
      <div className="max-w-[800px] mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-4">
          Timeline
        </h1>

     
        <div className=" mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select select-bordered w-40"
          >
            <option value="filter timeline">Filter timeline</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>

       
        {filteredData.length === 0 ? (
          <p className="text-center text-gray-500">
            No timeline data available
          </p>
        ) : (
          <div className="space-y-4">

            {filteredData.map((t) => (
              <div
                key={t.id}
                className="bg-white p-4 rounded-lg shadow"
              >

                <div className="flex items-center gap-6">
                    
                  <span className="text-3xl">
                    {getIcon(t.type)}
                  </span>

                  <div>
                     <p className="font-semibold text-lg">
                    {t.title}
                  </p>

                    <small className="font-medium text-lg text-gray-500">
                  {new Date(t.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </small>
                </div>

                </div>

                

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}
