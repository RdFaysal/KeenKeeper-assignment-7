import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Layout/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import Timeline from "./components/Timeline/Timeline.jsx";
import Stats from "./components/Stats/Stats.jsx";
import FriendDetails from "./components/FriendDetails/FriendDetails.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TimelineProvider } from "./context/TimelineContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await fetch("/friends.json");
          return res.json();
        },
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "friend/:id",
        element: <FriendDetails />,
        loader: async () => {
          const res = await fetch("/friends.json");
          return res.json();
        },
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={2000} />
    </TimelineProvider>
  </StrictMode>
);
