import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";

const navData = [
  { id: 1, name: "Home", path: "/", icon: <RiHome2Line /> },
  { id: 2, name: "TimeLine", path: "/timeline", icon: <MdOutlineWatchLater /> },
  { id: 3, name: "Stats", path: "/stats", icon: <AiOutlineLineChart /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navData.map((nav) => (
    <li key={nav.id}>
      <NavLink
        to={nav.path}
        onClick={() => setOpen(false)} 
        className={({ isActive }) =>
          isActive
            ? "bg-[#244D3F] font-semibold px-3 py-2 text-white rounded-md flex justify-center items-center gap-2"
            : "px-1 py-2 text-[#64748B] font-semibold flex justify-center items-center gap-2"
        }
      >
        {nav.icon}
        {nav.name}
        
      </NavLink>
    </li>
  ));

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      
      <div className="max-w-[1080px] mx-auto flex justify-between items-center py-4 px-4">
        
      
        <h2 className="text-xl font-bold">
          Keen<span className="font-medium">Keeper</span>
        </h2>

        
        <ul className="hidden sm:flex gap-4">
          {links}
        </ul>

        
        <div
          onClick={() => setOpen(!open)}
          className="sm:hidden text-2xl cursor-pointer"
        >
          {open ? <IoIosClose /> : <IoIosMenu />}
        </div>
      </div>

      
      <ul
        className={`sm:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-300 ${
          open ? "top-14 opacity-100" : "-top-96 opacity-0"
        }`}
      >
        {links}
      </ul>
    </nav>
  );
};

export default Navbar;
