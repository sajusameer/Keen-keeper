import { useEffect, useState } from "react";
import FriendCard from "../../components/FriendCard";
import Banner from "../../components/Banner";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner text-green-600"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4">

      {/* Banner */}
      <Banner friends={friends} />

      {/* Section Title */}
      <h2 className="text-xl font-semibold text-gray-800 mt-12 mb-6">
        Your Friends
      </h2>

      {/* Friends Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map(friend => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>

    </div>
  );
}