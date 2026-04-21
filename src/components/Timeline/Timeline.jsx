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

        <h1 className="text-3xl font-bold mb-5">Timeline</h1>

        
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered mb-6"
        >
          <option value="all">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>

        
        {filteredData.length === 0 ? (
          <p className="text-center text-gray-500">
            No timeline data available
          </p>
        ) : (
          <div className="space-y-4">

            {filteredData.map((t) => (
              <div
                key={t.id}
                className="bg-white p-4 rounded-lg shadow flex items-center gap-4"
              >

                <span className="text-2xl">{getIcon(t.type)}</span>

                <div>
                  <p className="font-semibold">{t.title}</p>

                  <p className="text-sm text-gray-500">
                    {new Date(t.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}
