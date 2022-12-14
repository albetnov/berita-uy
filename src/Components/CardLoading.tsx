import { Component } from "solid-js";

const CardLoading: Component = () => (
  <div class="p-3 border-b border-b-slate-300 mt-3">
    <div class="flex gap-5 items-center mb-3">
      <div class="px-5 py-1 bg-slate-300 w-[30%] h-9 animate-pulse rounded-lg"></div>
      <div class="h-5 w-[30%] bg-slate-300 animate-pulse rounded"></div>
    </div>
    <div class="animate-pulse bg-slate-300 w-[40%] h-7 rounded-lg"></div>
    <div class="animate-pulse bg-slate-300 w-[40%] h-7 rounded-lg mt-1 mb-3"></div>
    <p class="text-lg bg-slate-300 animate-pulse w-[80%] h-5 mb-2 rounded-xl"></p>
    <p class="text-lg bg-slate-300 animate-pulse w-[80%] h-5 mb-2 rounded-xl"></p>
    <p class="text-lg bg-slate-300 animate-pulse w-[80%] h-5 mb-2 rounded-xl"></p>
    <div class="mt-10 animate-pulse bg-slate-300 rounded-xl px-5 py-2 w-[35%] h-[40px]"></div>
  </div>
);

export default CardLoading;
