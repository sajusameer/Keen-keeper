import { FaPlus } from "react-icons/fa";


export default function Banner() {
 

  return (
    <div className="text-center mt-10">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
            Friends to keep close in your life
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.
        </p>

        {/* Button */}
        <button className="mt-5 bg-[#244D3F] hover:bg-[#1b3a2f] text-white px-6 py-2 rounded-md flex items-center gap-2 mx-auto transition">
            <FaPlus />
            Add a Friend
        </button>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 px-4 max-w-5xl mx-auto py-10">

            {/* Card */}
            <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-2xl font-bold text-[#244D3F]">10</h2>
            <p className="text-gray-500 text-sm">Total Friends</p>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-2xl font-bold text-[#244D3F]">3</h2>
            <p className="text-gray-500 text-sm">On Track</p>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-2xl font-bold text-[#244D3F]">6</h2>
            <p className="text-gray-500 text-sm">Need Attention</p>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-2xl font-bold text-[#244D3F]">12</h2>
            <p className="text-gray-500 text-sm">Interactions This Month</p>
            </div>

        </div>
    </div>
  );
}