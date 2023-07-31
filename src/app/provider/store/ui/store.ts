import { configureStore } from "@reduxjs/toolkit"

import { rootReducer } from "../model/root-reducer"
import { createAPI } from "../../../../shared/api/api"

export const axios = createAPI()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axios,
      },
    }),
})
