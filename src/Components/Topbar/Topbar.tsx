import { AiOutlineBell, AiOutlineSearch } from "solid-icons/ai";
import Menu, { lists } from "./Menu";
import MenuButton from "./MenuButton";
import { toast } from "solid-toast";
import { For } from "solid-js";
import { A } from "@solidjs/router";

export default function Topbar() {
  return (
    <header>
      {/* Mobile Header */}
      <div class="block lg:hidden">
        <div class="flex justify-between p-3 items-center">
          <div class="pr-3 w-fit">
            <Menu />
          </div>
          <h1 class="font-bold text-2xl mr-auto ml-auto">
            <A href="/">Berita Uy</A>
          </h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div class="hidden lg:block">
        <div class="flex justify-between p-5">
          <div class="flex">
            <div class="w-fit">
              <Menu />
            </div>
            <div class="ml-7">
              <MenuButton onClick={() => toast.error("Ga di implement mas, hehehe")}>
                <AiOutlineSearch class="text-2xl" />
              </MenuButton>
              <MenuButton onClick={() => toast.error("Ga di implement mas, hehehe")}>
                <AiOutlineBell class="text-2xl" />
              </MenuButton>
            </div>
          </div>
          <h1 class="font-bold text-4xl text-center">
            {" "}
            <A href="/">Berita Uy</A>
          </h1>
          <button
            onClick={() => toast.error("Ga di implement mas, hehehe")}
            class="border border-black px-5 py-1 transition-all delay-100 hover:bg-black hover:text-white"
          >
            Subscribe
          </button>
        </div>
        <div class="border-t border-t-black w-[95%] mx-auto flex gap-7 justify-between items-center">
          <div>
            <p class="text-lg font-bold">
              {new Date().toLocaleString("en-US", { weekday: "long" })}
            </p>
            <p>
              {new Date().toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          <For each={lists}>
            {(item) => (
              <p>
                <A href={item.link}>{item.title}</A>
              </p>
            )}
          </For>
          <button
            onClick={() => toast.error("Ga di implement mas, hehehe")}
            class="bg-black border border-black py-5 px-7 text-white transition-all delay-100 hover:bg-white hover:text-black"
          >
            ...
          </button>
        </div>
      </div>
    </header>
  );
}
