import { Link } from "react-router-dom";

export default function FriendCard({ friend }) {
  const statusStyle = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-yellow-400 text-white",
    "on-track": "bg-green-600 text-white",
  };

  return (
    <Link to={`/friend/${friend.id}`}>
      <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition text-center">

        {/* Image */}
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-16 h-16 rounded-full mx-auto object-cover"
        />

        {/* Name */}
        <h2 className="font-semibold mt-3 text-gray-800">
          {friend.name}
        </h2>

        {/* Days */}
        <p className="text-xs text-gray-400 mt-1">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex justify-center gap-2 mt-3 flex-wrap">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <div className="mt-3">
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyle[friend.status]}`}
          >
            {friend.status}
          </span>
        </div>

      </div>
    </Link>
  );
}