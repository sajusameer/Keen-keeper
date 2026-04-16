import React from 'react';

import { useEffect, useState } from "react";
import imgCall from "../../assets/call.png"
import imgText from "../../assets/text.png"
import imgVideo from "../../assets/video.png"

export default function Timeline() {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);
  }, []);

  // filter logic
  const filteredData =
    filter === "all"
      ? timeline
      : timeline.filter(item => item.type === filter);

  // icon handler
  const getIcon = (type) => {
    if (type === "Call") return  <img src={imgCall} alt="" />
    if (type === "Text") return  <img src={imgText} alt="" />
    if (type === "Video") return <img src={imgVideo} alt="" />;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-10">

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Timeline</h1>

      {/* Filter Buttons */}
     <div className="mb-6">
        <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-64 px-4 py-2 border rounded-md bg-gray-100 text-gray-700"
        >
            <option value="all">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
        </select>
     </div>

      {/* Timeline List */}
      <div className="space-y-4">

        {filteredData.length === 0 ? (
          <p className="text-gray-500">No interactions yet.</p>
        ) : (
          filteredData.map(item => (
            <div
              key={item.id}
              className="bg-white shadow p-4 rounded-lg flex items-center gap-4"
            >
              {/* Icon */}
              <div className="text-xl">
                {getIcon(item.type)}
              </div>

              {/* Info */}
              <div>
                <p className="font-medium">
                  {item.type} with {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.date}
                </p>
              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}