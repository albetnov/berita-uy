const BASE_URL = "https://the-lazy-media-api.vercel.app/api";

export async function api(path: string, options: object = {}) {
  const res = await fetch(BASE_URL + path, options);
  return await res.json();
}

export async function detail(content: string) {
  try {
    const res = await fetch(BASE_URL + "/detail/" + content);
    return await res.json();
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
