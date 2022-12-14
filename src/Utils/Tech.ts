import { api } from "./Api";

export const techNews = async (page = 1) => {
  try {
    return await api(`/tech?page=${page}`);
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const techSetup = async (page = 1) => {
  try {
    return await api(`/tech/setup?page=${page}`);
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const techRecon = async (page = 1) => {
  try {
    return await api(`/tech/recommend?page=${page}`);
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const techReview = async (page = 1) => {
  try {
    return await api(`/tech/review?page=${page}`);
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const techTips = async (page = 1) => {
  try {
    return await api(`/tech/tip?page=${page}`);
  } catch (err) {
    console.error(err);
    return false;
  }
};
