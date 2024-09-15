import React from "react";
import { FaReact } from "react-icons/fa";

export const NavBar = () => {
  return (
    <>
      <div className="bg-indigo-700 py-3 flex justify-around">
        <div className="flex gap-2">
          <div>
            <FaReact size={"1.5rem"} />
          </div>
          <div className="font-bold">React Jobs</div>
        </div>
        <div className="flex gap-5">
          <button className="bg-slate-950 font-bold px-2 rounded-md">
            Home
          </button>
          <button className=" font-bold px-2 rounded-md">Jobs</button>
          <button className=" font-bold px-2 rounded-md">Add Job</button>
        </div>
      </div>
      <div className="h-px bg-gray-600"></div>
    </>
  );
};
