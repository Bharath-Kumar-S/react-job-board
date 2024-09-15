import React from "react";

export const Card = ({
  title = "For Developers",
  text = "Find the most exciting jobs in React",
  bg = "bg-white",
  buttonText = "Browse Jobs",
  buttonBg = "bg-slate-700",
  buttonLink = "/jobs",
}) => {
  return (
    <div className={` p-5  rounded flex-col w-1/3 ${bg}`}>
      <div className="font-bold text-black">{title}</div>
      <div className="text-xs text-black my-2">{text}</div>
      <button
        className={`${buttonBg} text-white px-2 py-1 rounded text-m font-semibold`}
        onClick={() => (window.location.href = buttonLink)}
      >
        {buttonText}
      </button>
    </div>
  );
};
