import { createSelector } from '@reduxjs/toolkit';

import { NameSpace, State } from '../../../app/provider/store';
import { FetchStatus } from '../../../shared/types/fetch-status';
import { Post } from '../../../entities/post';
import { SortTypes } from '../../../features/sort';

export const getPosts = (state: State): Post[] => state[NameSpace.Posts].posts;

export const getFilteredPosts = createSelector(
  [
    getPosts,
    (state: State, filter: string) => filter
  ],
  (posts, filter) =>
    posts.filter((post) =>
      post.title.includes(filter)
      || post.body.includes(filter)
      || post.id.toString().includes(filter)
    )
);

export const getFilteredSortedPosts = createSelector(
  [
    getPosts,
    (state: State, currentSort: SortTypes) => currentSort,
    (state: State, currentSort: SortTypes, currentFilter: string) => currentFilter
  ],
  (posts, currentSort, currentFilter) => {
    const filtered = posts.filter((post) =>
      post.title.includes(currentFilter)
      || post.body.includes(currentFilter)
      || post.id.toString().includes(currentFilter)
    )

    if (currentSort === 'id') {
      return filtered.sort((a, b) => a.id - b.id);
    } else if (currentSort === 'title') {
      return filtered.sort((a, b) => a.title > b.title ? 1 : -1);
    } else if (currentSort === 'body') {
      return filtered.sort((a, b) => a.body > b.body ? 1 : -1);
    } else {
      return posts;
    }
  }
);

export const getPostsLoadingStatus = createSelector(
  (state: State): FetchStatus => state[NameSpace.Posts].postsLoadingStatus,
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
    isSuccess: status === FetchStatus.Success,
    isFailed: status === FetchStatus.Failed,
  })
);
