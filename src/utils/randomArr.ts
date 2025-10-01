import type { BannerTuple } from '../data/lang/types'


const random = (arr: BannerTuple[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export default random