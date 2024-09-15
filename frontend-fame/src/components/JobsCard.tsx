import { FaMapMarker } from "react-icons/fa";

export const JobsCard = () => {
  return (
    <div className="m-4 p-4 bg-white rounded-lg shadow-md w-1/4">
      <div className="text-gray-600 text-xs font-semibold">Full-time</div>
      <div className="text-black text-m font-semibold mt-1">
        Senior React Developer
      </div>
      <div className="text-gray-500 text-xs font-semibold mt-3">
        We are seeking a talented Front-End Developer to join our teamin Boston,
        Ma
      </div>
      <div className="text-gray-400 text-xs font-semibold mt-3">
        $70k - $90k / Year
      </div>
      <div className="h-px bg-slate-400 mt-3"></div>
      <div className="flex justify-between items-center">
        <div className="text-gray-600 text-xs font-semibold mt-3 flex gap-1">
          <FaMapMarker />
          Boston, MA
        </div>
        <button className="text-white text-xs font-semibold mt-3 bg-indigo-500 py-1 px-2 rounded-md">
          Read more
        </button>
      </div>
    </div>
  );
};
