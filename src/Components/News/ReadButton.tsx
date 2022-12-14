import { A } from "@solidjs/router";
import { Component } from "solid-js";

interface ReadButtonProps {
  link: string;
}

const ReadButton: Component<ReadButtonProps> = ({ link }) => {
  return (
    <A
      href={`/detail/${link}`}
      class="block w-fit py-2 mt-10 px-5 border rounded-lg shadow hover:bg-slate-50 active:opacity-70"
    >
      Read more
    </A>
  );
};

export default ReadButton;
