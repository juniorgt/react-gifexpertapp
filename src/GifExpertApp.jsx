import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Hello"]);

  return (
    <main className="bg-[#1E293B]">
      <div className="flex flex-row items-center justify-center  font-mono">
        <h2 className="my-5 py-5 text-5xl text-slate-200">GifExpertApp</h2>
      </div>
      <AddCategory setCategories={setCategories} />
      {/* <hr /> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </main>
  );
};
