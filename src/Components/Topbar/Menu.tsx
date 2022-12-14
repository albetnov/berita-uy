import { AiOutlineMenu } from "solid-icons/ai";
import { createSignal, For, Show } from "solid-js";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";
import { A } from "@solidjs/router";

export const lists = [
  { link: "/", title: "Home" },
  { link: "tech/news", title: "Technology News" },
  { link: "tech/setup", title: "Technology Setup" },
  { link: "tech/review", title: "Technology Review" },
  { link: "tech/tips", title: "Technology Tip" },
  { link: "games/news", title: "Games" },
  { link: "games/review", title: "Games Review" },
  { link: "games/console", title: "Games Console" },
  { link: "games/lazy", title: "Lazy Talk" },
  { link: "games/pc", title: "PC Games" },
];

export default function Menu() {
  const [showMenu, setShowMenu] = createSignal(false);

  return (
    <>
      <div class="border-r border-r-black">
        <MenuButton onClick={() => setShowMenu(true)}>
          <AiOutlineMenu class="text-2xl" />
        </MenuButton>
      </div>
      <Show when={showMenu()}>
        <div class="fixed flex justify-between flex-col min-h-screen bg-white left-0 -top-3 w-full mt-3 p-10 shadow rounded-3xl">
          <div>
            <h1 class="font-bold text-2xl mb-3">Berita Uy</h1>
            <ul>
              <For each={lists}>
                {(item) => (
                  <MenuItem>
                    <A onClick={() => setShowMenu(false)} href={item.link}>
                      {item.title}
                    </A>
                  </MenuItem>
                )}
              </For>
            </ul>
          </div>
          <button
            onClick={() => setShowMenu(false)}
            class="py-3 px-12 bg-slate-100 border border-slate-200 rounded transition-all delay-100 hover:bg-slate-200 active:outline-none active:opacity-80"
          >
            Close Menu
          </button>
        </div>
      </Show>
    </>
  );
}
