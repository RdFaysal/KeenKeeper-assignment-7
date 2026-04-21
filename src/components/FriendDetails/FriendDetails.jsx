import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useTimeline } from "../../context/TimelineContext";

import { RiDeleteBinLine } from "react-icons/ri";
import { BsArchive } from "react-icons/bs";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiPhoneCall, FiVideo } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";

const FriendDetails = () => {
  const friends = useLoaderData();
  const { id } = useParams();

  const { addTimeline } = useTimeline(); 

  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) {
    return <p className="text-center mt-10">Friend not found</p>;
  }

  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      title: `${type} with ${friend.name}`, 
      type: type.toLowerCase(),
      date: new Date().toISOString(),
    };

    addTimeline(newEntry); 

    toast.success(`${type} added to timeline!`);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10">
      <div className="max-w-[1000px] mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-6">

        <div className="grid col-span-2 row-span-3 gap-4">
          <div className="bg-white row-span-2 px-6 py-4 rounded-lg shadow text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 mx-auto rounded-full"
            />

            <h2 className="text-md font-bold mt-2">{friend.name}</h2>

            <p
              className={`mt-2 text-white px-3 py-1 w-[110px] mx-auto rounded-full ${
                friend.status === "overdue"
                  ? "bg-red-500"
                  : friend.status === "almost due"
                  ? "bg-yellow-500"
                  : "bg-green-600"
              }`}
            >
              {friend.status}
            </p>

            <div className="flex justify-center gap-2 mt-3 flex-wrap">
              {friend.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#CBFADB] px-2 py-1 rounded-2xl text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="italic text-sm text-gray-500 mt-3">{friend.bio}</p>

            <p className="text-sm mt-2">{friend.email}</p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 bg-white py-2 shadow rounded hover:bg-gray-100 transition">
              <RiNotificationSnoozeLine /> Snooze 2 Weeks
            </button>

            <button className="flex items-center justify-center gap-2 bg-white py-2 shadow rounded hover:bg-gray-100 transition">
              <BsArchive /> Archive
            </button>

            <button className="flex items-center justify-center gap-2 bg-white py-2 text-red-500 shadow rounded hover:bg-gray-100 transition">
              <RiDeleteBinLine /> Delete
            </button>
          </div>
        </div>

        <div className="col-span-4 row-span-3 flex flex-col flex-1 gap-4 h-full">
          <div className="grid grid-cols-3 flex-1 gap-3">
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold text-lg">{friend.days_since_contact}</h3>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded flex-1 shadow text-center">
              <h3 className="font-bold text-lg">{friend.goal}</h3>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold text-lg">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="flex justify-between bg-white p-4 rounded shadow flex-1">
            <div>
              <h3 className="font-semibold mt-2">Relationship Goal</h3>
              <p className="text-gray-500 mt-4">
                Connect every
                <span className="font-bold text-black">
                  {" "}
                  {friend.goal} days
                </span>
              </p>
            </div>

            <button className="btn mt-3">Edit</button>
          </div>

          <div className="bg-white px-4 py-3 rounded shadow flex-1 flex flex-col">
            <h3 className="font-semibold mb-2">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4 mt-3 flex-1">
              <button
                onClick={() => handleAction("Call")}
                className="btn h-auto flex flex-col gap-1 py-4"
              >
                <FiPhoneCall className="text-xl" />
                <span className="text-sm">Call</span>
              </button>

              <button
                onClick={() => handleAction("Text")}
                className="btn h-auto flex flex-col gap-1 py-4"
              >
                <MdOutlineTextsms className="text-xl" />
                <span className="text-sm">Text</span>
              </button>

              <button
                onClick={() => handleAction("Video")}
                className="btn h-auto flex flex-col gap-1 py-4"
              >
                <FiVideo className="text-xl" />
                <span className="text-sm">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
