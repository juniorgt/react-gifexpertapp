import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Hello"]);

  return (
    <section>
      <div className="flex flex-row items-center justify-center  font-mono">
        <h2 className="py-5 text-2xl text-slate-200 sm:text-4xl">
          GifExpertApp
        </h2>
      </div>
      <AddCategory setCategories={setCategories} />
      {/* <hr /> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </section>
  );
};
