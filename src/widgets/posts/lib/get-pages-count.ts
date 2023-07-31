import { POSTS_PER_PAGE } from './const';

export const getPagesCount = (postsCount: number) : number => {
  return Math.ceil(postsCount / POSTS_PER_PAGE);
}