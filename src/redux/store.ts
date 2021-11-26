import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { api } from "~/redux/services/api";
import { authSlice } from "~/redux/slices/auth-slice";
import { jobSlice } from "~/redux/slices/job-slice";
import { reviewSlice } from "~/redux/slices/review-slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth: authSlice.reducer,
      job: jobSlice.reducer, // jobReducer
      review: reviewSlice.reducer, // jobReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
