import { Meme } from "../data/memes";

const STORAGE_KEY = "catMemes";

export const loadMemes = (): Meme[] | null => {
  if (typeof window === "undefined") return null;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? (JSON.parse(data) as Meme[]) : null;
  } catch (err) {
    console.error("Failed to load memes:", err);
    return null;
  }
};

export const saveMemes = (memes: Meme[]): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memes));
  } catch (err) {
    console.error("Failed to save memes:", err);
  }
};
