const BASE_URL = "https://the-lazy-media-api.vercel.app/api";

export async function api(path: string, options: object = {}) {
  const res = await fetch(BASE_URL + path, options);

  const json = await res.json();
  if ("code" in json && json.code === 404) {
    console.log(json);
    throw new Error("Page not found.");
  }
  return json;
}

export async function detail(content: string) {
  try {
    const res = await fetch(BASE_URL + "/detail/" + content);
    const json = await res.json();
    if ("code" in json && json.code === 404) {
      console.log(json);
      throw new Error("Page not found.");
    }
    return json;
  } catch (err) {
    console.error(err);
  }
}

export interface ApiReturnProps {
  title: string;
  thumb: string;
  author: string;
  tag: string;
  time: string;
  desc: string;
  key: string;
}

export interface ApiDetailProps {
  title: string;
  thumb: string;
  author: string;
  date: string;
  categories: string[];
  figure: string[];
  content: string[];
}
