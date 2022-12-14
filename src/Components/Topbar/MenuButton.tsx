import type { JSX } from "solid-js";

export default function MenuButton(props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button class="hover:bg-slate-100 rounded-full p-3" {...props}>
      {props.children}
    </button>
  );
}
