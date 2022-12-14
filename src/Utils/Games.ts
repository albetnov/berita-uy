import { api } from "./Api";

export const gamesNews = async (page = 1) => {
  try {
    return await api(`/games?page=${page}`);
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const consoleGames = async (page = 1) => {
  try {
    return await api(`/games/console-game?page=${page}`);
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const pcGames = async (page = 1) => {
  try {
    return await api(`/games/pc?page=${page}`);
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const gamesReview = async (page = 1) => {
  try {
    return await api(`/games/review?page=${page}`);
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const lazyTalk = async (page = 1) => {
  try {
    return await api(`/games/lazy-talk?page=${page}`);
  } catch (err) {
    console.error(err);
    return false;
  }
};
