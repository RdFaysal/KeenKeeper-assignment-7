import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTimeline } from "../../context/TimelineContext";

const Home = () => {
  const friends = useLoaderData();
  const navigate = useNavigate();
  const { timeline } = useTimeline();

  const total = friends.length;
  const onTrackCount = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter((f) => f.status === "almost due").length;

  
  const thisMonth = new Date().getMonth();
  const thisYear = new Date().getFullYear();

  const monthlyInteractions = timeline.filter((t) => {
    const d = new Date(t.date);
    return d.getMonth() === thisMonth && d.getFullYear() === thisYear;
  }).length;

  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-[1000px] mx-auto px-4 py-12">

        
        <div className="max-w-[600px] mx-auto text-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Friends to keep close in your life
          </h1>

          <p className="text-gray-500">
            Your personal shelf of meaningful connections.
          </p>

          <button className="bg-[#244D3F] text-white px-5 py-2 rounded-md">
            + Add a Friend
          </button>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">

          <div className="bg-white py-6 shadow rounded-lg text-center">
            <h2 className="text-xl font-semibold">{total}</h2>
            <p className="text-gray-500 text-sm">Total Friends</p>
          </div>

          <div className="bg-white py-6 shadow rounded-lg text-center">
            <h2 className="text-xl font-semibold">{onTrackCount}</h2>
            <p className="text-gray-500 text-sm">On Track</p>
          </div>

          <div className="bg-white py-6 shadow rounded-lg text-center">
            <h2 className="text-xl font-semibold">{needAttention}</h2>
            <p className="text-gray-500 text-sm">Need Attention</p>
          </div>

          <div className="bg-white py-6 shadow rounded-lg text-center">
            <h2 className="text-xl font-semibold">{monthlyInteractions}</h2>
            <p className="text-gray-500 text-sm">Interactions This Month</p>
          </div>

        </div>

        
        <h2 className="text-2xl font-semibold mb-4">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

          {friends.map((friend) => (
            <div
              key={friend.id}
              onClick={() => {
                toast.info(`${friend.name} profile opening...`);
                navigate(`/friend/${friend.id}`);
              }}
              className="bg-white cursor-pointer p-4 flex flex-col items-center shadow rounded-lg hover:shadow-lg"
            >

              <img
                src={friend.picture}
                className="w-28 h-28 rounded-full"
                alt={friend.name}
              />

              <h3 className="font-bold mt-2">{friend.name}</h3>

              <p className="text-sm text-gray-500">
                {friend.days_since_contact} days ago
              </p>

              <div className="flex gap-2 mt-3 flex-wrap justify-center">
                {friend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-[#CBFADB] text-[#244D3F] px-2 py-1 rounded-2xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p
                className={`mt-2 text-sm text-white px-2 py-1 rounded-2xl ${
                  friend.status === "overdue"
                    ? "bg-red-500"
                    : friend.status === "almost due"
                    ? "bg-yellow-500"
                    : "bg-green-600"
                }`}
              >
                {friend.status}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Home;
