import { combineReducers } from "@reduxjs/toolkit"

import { postsSlice } from "../../../../widgets/posts"

import { NameSpace } from "../lib/name-space"

export const rootReducer = combineReducers({
  [NameSpace.Posts]: postsSlice.reducer,
})
