import React from 'react';

import { useEffect, useState } from "react";
import { FaPhone, FaComment, FaVideo } from "react-icons/fa";

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
    if (type === "Call") return <FaPhone className="text-green-600" />;
    if (type === "Text") return <FaComment className="text-blue-600" />;
    if (type === "Video") return <FaVideo className="text-purple-600" />;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-10">

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Timeline</h1>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {["all", "Call", "Text", "Video"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1 rounded-full text-sm border ${
              filter === type
                ? "bg-green-600 text-white"
                : "bg-gray-100"
            }`}
          >
            {type}
          </button>
        ))}
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