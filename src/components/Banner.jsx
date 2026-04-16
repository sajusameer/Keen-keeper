import { FaUserPlus } from "react-icons/fa";

export default function Banner({ friends }) {
  const total = friends.length;
  const overdue = friends.filter(f => f.status === "overdue").length;
  const almost = friends.filter(f => f.status === "almost due").length;
  const onTrack = friends.filter(f => f.status === "on-track").length;

  return (
    <div className="text-center mt-10">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
        Friends to keep close in your life
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 mt-3 max-w-xl mx-auto">
        Track and maintain your meaningful relationships with ease.
      </p>

      {/* Button */}
      <button className="mt-5 bg-[#244D3F] hover:bg-[#1b3a2f] text-white px-6 py-2 rounded-md flex items-center gap-2 mx-auto transition">
        <FaUserPlus />
        Add a Friend
      </button>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 px-4 max-w-5xl mx-auto">

        {/* Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-2xl font-bold">{total}</h2>
          <p className="text-gray-500 text-sm">Total Friends</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-2xl font-bold text-red-500">{overdue}</h2>
          <p className="text-gray-500 text-sm">Overdue</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-2xl font-bold text-yellow-500">{almost}</h2>
          <p className="text-gray-500 text-sm">Almost Due</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-2xl font-bold text-green-500">{onTrack}</h2>
          <p className="text-gray-500 text-sm">On Track</p>
        </div>

      </div>
    </div>
  );
}