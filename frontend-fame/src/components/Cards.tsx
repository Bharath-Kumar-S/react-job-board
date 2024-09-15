import React from "react";
import { Card } from "./Card";

export const Cards = () => {
  return (
    <div className="bg-slate-100 p-2  flex justify-center gap-2">
      <Card
        title="For Developers"
        text="Find the most exciting jobs in React"
        bg="bg-slate-200"
        buttonText="Browse Jobs"
        buttonBg="bg-slate-700"
        buttonLink="/jobs"
      />
      <Card
        title="For Employers"
        text="List your job to find the perfect developer"
        bg="bg-indigo-200"
        buttonText="Add Job"
        buttonBg="bg-indigo-700"
        buttonLink="/add-job"
      />
    </div>
  );
};
