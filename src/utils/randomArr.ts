import type {BannerTuple} from "../data/data.ts";

const random = (arr: BannerTuple[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export default random