import { Component, createEffect, createSignal, For, onMount, Show } from "solid-js";
import Card from "../Components/Card";
import CardLoading from "../Components/CardLoading";
import Highlight from "../Components/News/Highlight";
import HighlightLoading from "../Components/News/HighlightLoading";
import { ApiReturnProps } from "../Utils/Api";

interface NewsProps {
  firstMethod: (page?: number) => Promise<ApiReturnProps[]>;
  secondMethod?: ((page?: number) => Promise<ApiReturnProps[]>) | null;
  title: string;
}

const News: Component<NewsProps> = ({ firstMethod, secondMethod = null, title }) => {
  const [firstHalf, setFirstHalf] = createSignal<ApiReturnProps[]>([]);
  const [lastHalf, setLastHalf] = createSignal<ApiReturnProps[]>([]);
  const [highlight, setHighlight] = createSignal<ApiReturnProps | object>({});
  const [currentPage, setCurrentPage] = createSignal(1);
  const [somethingWrong, setSomethingWrong] = createSignal(false);
  const [isLoading, setIsLoading] = createSignal(false);

  const onNextPageHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  createEffect(async () => {
    setIsLoading(true);
    await fetchNews(currentPage());
    setIsLoading(false);
  });

  const fetchNews = async (page = 1) => {
    const result = await firstMethod(page);
    if (!result) {
      setSomethingWrong(true);
      return;
    }
    setHighlight(result[0]);
    setFirstHalf(result.slice(1, 4));
    if (secondMethod === null) {
      setLastHalf(result.slice(4, 8));
    } else {
      const result2 = await secondMethod(page);
      if (!result2) {
        setSomethingWrong(true);
        return;
      }
      setLastHalf(result2.slice(0, 3));
    }
  };

  return (
    <Show
      when={!somethingWrong()}
      fallback={
        <div class="h-screen w-full flex items-center justify-center text-4xl font-bold">
          404: Ups Next Page not found.
        </div>
      }
    >
      <section class="p-3">
        <h2 class="text-4xl font-bold mb-10 mt-3 mx-5">{title}</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
          <div class="min-h-full lg:border-r border-r-slate-400">
            <Show when={!isLoading()} fallback={<HighlightLoading />}>
              <Highlight highlight={highlight() as ApiReturnProps} />
            </Show>
          </div>
          <div class="lg:border-r pr-5 border-r-slate-400 min-h-full">
            <Show
              when={!isLoading()}
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
                  <Card
                    date={item.time}
                    key={item.key}
                    tags={item.tag}
                    header={item.title}
                    content={item.desc}
                  />
                )}
              </For>
            </Show>
          </div>
          <div class="min-h-full">
            <Show
              when={!isLoading()}
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
                  <Card
                    date={item.time}
                    key={item.key}
                    tags={item.tag}
                    header={item.title}
                    content={item.desc}
                  />
                )}
              </For>
            </Show>
          </div>
        </div>
        <button
          onClick={onNextPageHandler}
          class={`py-3 px-5 bg-zinc-700 hover:bg-zinc-800 active:opacity-80 text-white border border-slate-400 rounded-lg fixed right-3 bottom-5 ${
            isLoading() ? "animate-bounce" : ""
          }`}
        >
          {isLoading() ? "Loading..." : "Next"}
        </button>
      </section>
    </Show>
  );
};

export default News;
