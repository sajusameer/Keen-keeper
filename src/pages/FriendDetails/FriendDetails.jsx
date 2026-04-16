import React from 'react';

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPhone, FaComment, FaVideo } from "react-icons/fa";
import { toast } from "react-toastify";

export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(f => f.id === parseInt(id));
        setFriend(found);
      });
  }, [id]);

  // 🔥 timeline add function
  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      type,
      name: friend.name,
      date: new Date().toLocaleDateString()
    };

    const prev = JSON.parse(localStorage.getItem("timeline")) || [];
    localStorage.setItem("timeline", JSON.stringify([newEntry, ...prev]));

    toast.success(`${type} with ${friend.name} added!`);
  };

  if (!friend) return <div className="flex justify-center items-center h-[60vh] text-green-900">
          <span class="spinner-2 relative inline-block w-12 h-12 border-2 border-[#244D3F] rounded-full animate-spin">
        <div class="absolute left-1/2 top-0 w-[3px] h-6 bg-[#244D3F] transform -translate-x-1/2 rounded"></div>
      </span>
      </div>;

  const statusStyle = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-yellow-400 text-white",
    "on-track": "bg-green-600 text-white",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10 grid md:grid-cols-3 gap-6">

      {/* LEFT SIDE */}
      <div className="bg-white p-6 rounded-xl shadow text-center">

        <img
          src={friend.picture}
          alt={friend.name}
          className="w-24 h-24 rounded-full mx-auto"
        />

        <h2 className="text-xl font-semibold mt-3">{friend.name}</h2>

        <span className={`text-xs px-3 py-1 rounded-full ${statusStyle[friend.status]}`}>
          {friend.status}
        </span>

        <div className="flex justify-center gap-2 mt-3 flex-wrap">
          {friend.tags.map((tag, i) => (
            <span key={i} className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-3">{friend.bio}</p>
        <p className="text-gray-400 text-sm mt-1">{friend.email}</p>

        {/* Buttons */}
        <div className="mt-4 space-y-2">
          <button className="w-full bg-gray-100 py-2 rounded">⏰ Snooze 2 Weeks</button>
          <button className="w-full bg-gray-100 py-2 rounded">📦 Archive</button>
          <button className="w-full bg-red-100 text-red-600 py-2 rounded">🗑️ Delete</button>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="md:col-span-2 space-y-6">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow text-center">
            <h2 className="text-xl font-bold">{friend.days_since_contact}</h2>
            <p className="text-sm text-gray-500">Days</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h2 className="text-xl font-bold">{friend.goal}</h2>
            <p className="text-sm text-gray-500">Goal</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h2 className="text-xl font-bold">{friend.next_due_date}</h2>
            <p className="text-sm text-gray-500">Next Due</p>
          </div>
        </div>

        {/* Goal */}
        <div className="bg-white p-5 rounded shadow flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Relationship Goal</h3>
            <p className="text-gray-500 text-sm">
              Stay in touch every {friend.goal} days
            </p>
          </div>
          <button className="bg-gray-200 px-3 py-1 rounded">Edit</button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-semibold mb-3">Quick Check-In</h3>

          <div className="flex gap-4">

            <button
              onClick={() => handleAction("Call")}
              className="flex-1 bg-green-100 text-green-700 py-2 rounded flex items-center justify-center gap-2"
            >
              <FaPhone /> Call
            </button>

            <button
              onClick={() => handleAction("Text")}
              className="flex-1 bg-blue-100 text-blue-700 py-2 rounded flex items-center justify-center gap-2"
            >
              <FaComment /> Text
            </button>

            <button
              onClick={() => handleAction("Video")}
              className="flex-1 bg-purple-100 text-purple-700 py-2 rounded flex items-center justify-center gap-2"
            >
              <FaVideo /> Video
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}