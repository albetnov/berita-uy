import { Component } from "solid-js";
import { ApiReturnProps } from "../../Utils/Api";
import ReadButton from "./ReadButton";

interface HighlightProps {
  highlight: ApiReturnProps;
}

const Highlight: Component<HighlightProps> = ({ highlight }) => (
  <div class="mt-5 py-3 px-4">
    <h2 class="text-3xl font-bold">{highlight.title}</h2>
    <img src={highlight.thumb} class="w-96 mt-3 rounded" />
    <p class="text-slate-500 my-2">{highlight.time}</p>
    <h3 class="font-bold text-2xl my-2">{highlight.title}</h3>
    <p class="text-zinc-500">{highlight.desc}</p>
    <ReadButton link={highlight.key} />
  </div>
);

export default Highlight;
