import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";

const PageNotFound: Component = () => {
  const navigate = useNavigate();

  return (
    <div class="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-white">
      <h1 class="text-6xl font-bold text-center">404: Not Found</h1>
      <button
        class="py-3 px-12 mt-5 text-white bg-zinc-800 rounded-xl transition-all delay-200 hover:bg-zinc-700 active:outline-none active:opacity-70"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
};

export default PageNotFound;
