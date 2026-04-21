import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-white">
      <div className="max-w-[900px] mx-auto text-center px-6 py-10">

        
        <h2 className="text-3xl md:text-4xl font-bold">
          Keen<span className="font-medium">Keeper</span>
        </h2>

        
        <p className="text-sm text-gray-200 mt-3">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        
        <p className="mt-6 font-medium">Social Links</p>

        
        <div className="flex justify-center gap-6 mt-3 text-xl">

          <div className="p-2 bg-white rounded-full">
            <a href="#" className="text-black ">
            <AiFillInstagram />
          </a>
          </div>

          <div className="p-2 bg-white rounded-full">
            <a href="#" className="text-black">
            <FaSquareFacebook />
          </a>
          </div>

          <div className="p-2 bg-white rounded-full">
            <a href="#" className="text-black">
            <FaXTwitter />
          </a>
          </div>

        </div>

        
        <hr className="border-white/20 my-6" />

       
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-200">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-5 flex-wrap justify-center">
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Terms of Service</p>
            <p className="hover:underline cursor-pointer">Cookies</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;
