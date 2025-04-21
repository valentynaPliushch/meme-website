export type Meme = {
  id: number;
  title: string;
  image: string;
  likes: number;
};

export const initialMemes: Meme[] = [
  {
    id: 1,
    title: "Happy Caturday from a startled bo",
    image: "https://i.imgur.com/L4ESdzA.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 2,
    title: "He has the right idea for Caterday",
    image: "https://i.imgur.com/cclcJxb.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 3,
    title: "Watson",
    image: "https://i.imgur.com/yBsR2EI.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 4,
    title: "Hoppy bunny day!",
    image: "https://i.imgur.com/UkRWv74.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 5,
    title: "Sir Wobbles says happy Easter",
    image: "https://i.imgur.com/9Xq898t.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 6,
    title: "Today's cat",
    image: "https://i.imgur.com/3KCO7WQ.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 7,
    title: "You are wrong, Leonidas!",
    image: "https://i.imgur.com/fVYzmho.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 8,
    title: "Hemlock imageeer I am slepeh kiteh",
    image: "https://i.imgur.com/5XF2G0r.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 9,
    title: "Biscuit’s daily picture",
    image: "https://i.imgur.com/AqEFqCt.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 10,
    title: "Today's cat",
    image: "https://i.imgur.com/ze42O3Z.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
];
