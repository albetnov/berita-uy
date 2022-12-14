import { useParams } from "@solidjs/router";
import { Component, createMemo, createSignal, For, onMount, Show } from "solid-js";
import Tag from "../Components/Tag";
import { ApiDetailProps, detail } from "../Utils/Api";

const Detail: Component = () => {
  const params = useParams();
  const [data, setData] = createSignal<ApiDetailProps>();
  const [notFound, setNotFound] = createSignal(false);

  const fetchDetail = async () => {
    const result = await detail(params.key);

    if ("message" in result && result.message.includes("not found")) {
      setNotFound(true);
      return;
    }
    setData(result.results);
  };

  onMount(async () => {
    await fetchDetail();
  });

  const getContent = createMemo(() => {
    const removeDuplicate = new Set(data()?.content);
    return [...removeDuplicate];
  });

  return (
    <Show
      when={!notFound()}
      fallback={
        <div class="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-white">
          <h1 class="text-6xl font-bold text-center">404</h1>
        </div>
      }
    >
      <section class="p-10">
        <div class="flex flex-col lg:flex-row items-start gap-3 justify-around">
          <Show
            when={data()}
            fallback={
              <div class="animate-pulse bg-slate-300 rounded w-full h-48 mb-10 lg:mb-0 lg:w-[40%] lg:h-80"></div>
            }
          >
            <img src={data()?.thumb} class="rounded w-full mb-10 lg:mb-0 lg:w-1/2" />
          </Show>
          <div>
            <Show
              when={data()}
              fallback={
                <>
                  <div class="animate-pulse rounded bg-slate-300 h-9 w-[60%]"></div>
                  <div class="animate-pulse rounded bg-slate-300 h-4 w-[50%] mt-1"></div>
                </>
              }
            >
              <h2 class="text-2xl lg:text-4xl font-bold">{data()?.title}</h2>
              <p class="text-slate-500 text-base">
                {data()?.author}, {data()?.date}
              </p>
            </Show>
            <Show
              when={data()}
              fallback={
                <div class="grid grid-cols-2 gap-1 lg:flex lg:gap-2 mt-2">
                  <div class="px-5 py-1 rounded h-9 w-36 animate-pulse bg-slate-300"></div>
                  <div class="px-5 py-1 rounded h-9 w-36 animate-pulse bg-slate-300"></div>
                  <div class="px-5 py-1 rounded h-9 w-36 animate-pulse bg-slate-300"></div>
                  <div class="px-5 py-1 rounded h-9 w-36 animate-pulse bg-slate-300"></div>
                </div>
              }
            >
              <div class="grid grid-cols-2 gap-1 lg:flex lg:gap-2 mt-3">
                <For each={data()?.categories}>{(item) => <Tag>{item}</Tag>}</For>
              </div>
            </Show>
            <Show
              when={data()}
              fallback={
                <div class="mt-5 bg-slate-300 animate-pulse min-w-full h-96 rounded-xl"></div>
              }
            >
              <div class="text-zinc-800 mt-5 border border-slate-300 rounded-xl p-3 overflow-y-auto">
                <For each={getContent()}>
                  {(item) => {
                    if (item.includes(".png")) {
                      return <img src={item} />;
                    } else if (item.includes("embed")) {
                      return (
                        <iframe
                          width="560"
                          height="315"
                          src={item}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      );
                    } else {
                      return <p>{item}</p>;
                    }
                  }}
                </For>
              </div>
            </Show>
          </div>
        </div>
        <Show
          when={data()}
          fallback={<div class="h-6 lg:h-9 mt-12 w-44 bg-slate-300 rounded animate-pulse"></div>}
        >
          <h2 class="text-2xl mt-12 lg:text-4xl font-bold">Gallery</h2>
        </Show>

        <div class="flex gap-3 mt-3 overflow-y-auto">
          <Show
            when={data()}
            fallback={
              <div class="bg-slate-300 rounded animate-pulse w-full mb-10 lg:mb-0 h-36"></div>
            }
          >
            <Show
              when={data()?.figure && data()!.figure.length > 0}
              fallback={<p>No Images Found.</p>}
            >
              <For each={data()?.figure}>
                {(item) => <img src={item} class="rounded w-full mb-10 lg:mb-0 lg:w-1/3" />}
              </For>
            </Show>
          </Show>
        </div>
      </section>
    </Show>
  );
};

export default Detail;
