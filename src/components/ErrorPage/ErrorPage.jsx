import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F8FAFC] text-center px-4">
      
      <h1 className="text-6xl font-bold text-[#244D3F]">404</h1>

      <h2 className="text-2xl font-semibold mt-3">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-5 bg-[#244D3F] text-white px-5 py-2 rounded-md hover:bg-green-800"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
