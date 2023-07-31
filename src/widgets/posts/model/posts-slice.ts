import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../../app/provider/store';
import { FetchStatus } from '../../../shared/types/fetch-status';
import { Post } from '../../../entities/post';

import { fetchPosts } from './api-actions/fetch-posts';

type InitialState = {
  posts: Post[];
  postsLoadingStatus: FetchStatus;
}

const initialState: InitialState = {
  posts: [],
  postsLoadingStatus: FetchStatus.Idle,
};

export const postsSlice = createSlice({
  name: NameSpace.Posts,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.postsLoadingStatus = FetchStatus.Success;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.postsLoadingStatus = FetchStatus.Pending;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.postsLoadingStatus = FetchStatus.Failed;
      });
  }
});
