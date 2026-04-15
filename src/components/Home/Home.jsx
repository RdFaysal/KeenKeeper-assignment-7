import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Home = () => {
  const friends = useLoaderData();
  const navigate = useNavigate();

  const total = friends.length;
  const onTrackCount = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter((f) => f.status === "almost due").length;
  const overdueCount = friends.filter((f) => f.status === "overdue").length;

  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-[1000px] mx-auto px-4  py-12">
        
        <div className="max-w-[600px] mx-auto text-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-500">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="bg-[#244D3F] text-white px-5 py-2 rounded-md hover:bg-green-800">
            + Add a Friend
          </button>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white py-6 shadow rounded-lg text-center">
            <h2 className="text-xl font-semibold">{total}</h2>
            <p className="text-gray-500 text-sm pt-1">Total Friends</p>
          </div>

          <div className="bg-white py-6 shadow rounded-lg text-center">
            <h2 className="text-xl font-semibold">{onTrackCount}</h2>
            <p className="text-gray-500 text-sm pt-1">On Track</p>
          </div>

          <div className="bg-white py-6 shadow rounded-lg text-center">
            <h2 className="text-xl font-semibold">{needAttention}</h2>
            <p className="text-gray-500 text-sm pt-1">Need Attention</p>
          </div>

          <div className="bg-white py-6 shadow rounded-lg text-center">
            <h2 className="text-xl font-semibold">{overdueCount}</h2>
            <p className="text-gray-500 text-sm pt-1">Overdue</p>
          </div>
        </div>

        
        <h2 className="text-2xl font-semibold mb-4">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {friends.map((friend) => (
            <div
              key={friend.id}
              onClick={() => navigate(`/friend/${friend.id}`)}
              className="bg-white cursor-pointer p-4 flex flex-col justify-canter items-center shadow rounded-lg hover:shadow-lg transition"
            >
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-28 h-28 rounded-full"
              />

              <h3 className="text-md font-bold mt-2">{friend.name}</h3>

              <p className="text-sm text-gray-500 pt-1">
                {friend.days_since_contact} days ago
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {friend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm  bg-[#CBFADB] text-[#244D3F] px-2 py-1 rounded-2xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            
              <p
                className={`mt-2 text-sm text-white px-2 py-1 rounded-2xl ${
                  friend.status === "overdue"
                    ? "bg-[#EF4444]  "
                    : friend.status === "almost due"
                      ? "bg-[#EFAD44]  "
                      : "bg-[#244D3F]"
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
