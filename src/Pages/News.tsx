import { Component, createEffect, createSignal, For, onMount, Show } from "solid-js";
import Card from "../Components/Card";
import CardLoading from "../Components/CardLoading";
import Highlight from "../Components/News/Highlight";
import HighlightLoading from "../Components/News/HighlightLoading";
import { ApiReturnProps } from "../Utils/Api";

interface NewsProps {
  firstMethod: () => Promise<ApiReturnProps[]>;
  secondMethod?: (() => Promise<ApiReturnProps[]>) | null;
  title: string;
}

const News: Component<NewsProps> = ({ firstMethod, secondMethod = null, title }) => {
  const [firstHalf, setFirstHalf] = createSignal<ApiReturnProps[]>([]);
  const [lastHalf, setLastHalf] = createSignal<ApiReturnProps[]>([]);
  const [highlight, setHighlight] = createSignal<ApiReturnProps | object>({});

  const fetchNews = async () => {
    const result = await firstMethod();
    setHighlight(result[0]);
    setFirstHalf(result.slice(1, 4));
    if (secondMethod === null) {
      setLastHalf(result.slice(4, 8));
    } else {
      const result2 = await secondMethod();
      setLastHalf(result2.slice(0, 3));
    }
  };

  onMount(() => {
    fetchNews();
  });

  return (
    <section class="p-3">
      <h2 class="text-4xl font-bold mb-10 mt-3 mx-5">{title}</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        <div class="min-h-full lg:border-r border-r-slate-400">
          <Show when={Object.keys(highlight()).length > 0} fallback={<HighlightLoading />}>
            <Highlight highlight={highlight() as ApiReturnProps} />
          </Show>
        </div>
        <div class="lg:border-r pr-5 border-r-slate-400 min-h-full">
          <Show
            when={firstHalf().length > 0}
            fallback={
              <>
                <CardLoading />
                <CardLoading />
                <CardLoading />
              </>
            }
          >
            <For each={firstHalf()}>
              {(item) => (
                <Card key={item.key} tags={item.tag} header={item.title} content={item.desc} />
              )}
            </For>
          </Show>
        </div>
        <div class="min-h-full">
          <Show
            when={lastHalf().length > 0}
            fallback={
              <>
                <CardLoading />
                <CardLoading />
                <CardLoading />
              </>
            }
          >
            <For each={lastHalf()}>
              {(item) => (
                <Card key={item.key} tags={item.tag} header={item.title} content={item.desc} />
              )}
            </For>
          </Show>
        </div>
      </div>
    </section>
  );
};

export default News;
