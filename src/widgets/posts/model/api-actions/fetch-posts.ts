import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

import { Post } from '../../../../entities/post';
import { AppDispatch, State } from '../../../../app/provider/store';
import { APIRoute } from '../../../../shared/lib/const/api-routes';

export const fetchPosts = createAsyncThunk<Post[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'Posts/fetchPosts',
  async (_arg, {extra: axios}) => {
    try {
      const { data } = await axios.get<Post[]>(APIRoute.Posts);

      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status !== 401) {
        toast.error('Posts loading failed.');
      }
      throw err;
    }
  },
);
