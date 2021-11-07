import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { r9Api } from "./services/r9-api";
import { authSlice } from "./slices/auth-slice";
import { jobSlice } from "./slices/job-slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [r9Api.reducerPath]: r9Api.reducer,
      auth: authSlice.reducer,
      job: jobSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(r9Api.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;


export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
