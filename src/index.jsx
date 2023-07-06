import { createRoot } from "react-dom/client";
import "./index.css";
import { GifExpertApp } from "./GifExpertApp";

const element = document.querySelector("#root");

const root = createRoot(element);
root.render(
  <>
    <main className="bg-[#1E293B]">
      <GifExpertApp />
    </main>
  </>
);
