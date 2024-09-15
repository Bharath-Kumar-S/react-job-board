import { JobsCard } from "./JobsCard";

export const Jobs = () => {
  return (
    <div className="bg-slate-200 py-5">
      <div className="text-indigo-400 text-center font-extrabold text-xl">
        Browse Jobs
      </div>
      <div className="flex flex-wrap justify-center">
        <JobsCard />
        <JobsCard /> <JobsCard /> <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard /> <JobsCard />
      </div>
    </div>
  );
};
