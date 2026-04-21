import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />

      
      {navigation.state === "loading" && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-10 h-10 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <Outlet />

      <Footer />
    </div>
  );
};

export default RootLayout;
