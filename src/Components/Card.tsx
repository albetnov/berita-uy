import { Component } from "solid-js";
import ReadButton from "./News/ReadButton";
import Tag from "./Tag";

interface CardProps {
  tags: string;
  header: string;
  content: string;
  key: string;
  date: string;
}

const Card: Component<CardProps> = (props) => {
  return (
    <div class="p-3 border-b border-b-slate-300 mt-3">
      <div class="flex gap-5 items-center mb-3">
        <Tag>{props.tags}</Tag>
        <div class="text-slate-500">{props.date}</div>
      </div>
      <h3 class="text-2xl font-bold text-zinc-800">{props.header}</h3>
      <p class="text-lg text-zinc-500">{props.content}</p>
      <ReadButton link={props.key} />
    </div>
  );
};

export default Card;
