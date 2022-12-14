import { Component } from "solid-js";

const HighlightLoading: Component = () => (
  <div>
    {/* heading */}
    <div class="mt-3 animate-pulse bg-slate-300 w-[50%] h-[36px] rounded-full"></div>
    {/* image */}
    <div class="mt-3 animate-pulse bg-slate-300 rounded-xl w-[80%] h-[196px]"></div>
    {/* date */}
    <div class="my-2 animate-pulse bg-slate-300 rounded-xl w-[70%] h-[24px]"></div>
    {/* news title */}
    <div class="my-2 animate-pulse bg-slate-300 rounded-xl w-[65%] h-[32px]"></div>
    <div class="my-2 animate-pulse bg-slate-300 rounded-xl w-[65%] h-[32px]"></div>
    {/* news content */}
    <div class="my-2 animate-pulse bg-slate-300 rounded-xl w-[65%] h-[24px]"></div>
    <div class="my-2 animate-pulse bg-slate-300 rounded-xl w-[65%] h-[24px]"></div>
    <div class="my-2 animate-pulse bg-slate-300 rounded-xl w-[65%] h-[24px]"></div>
    <div class="my-2 animate-pulse bg-slate-300 rounded-xl w-[65%] h-[24px]"></div>
    {/* read more button */}
    <div class="mt-10 animate-pulse bg-slate-300 rounded-xl px-5 py-2 w-[35%] h-[40px]"></div>
  </div>
);

export default HighlightLoading;
