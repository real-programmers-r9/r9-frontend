import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { r9Api } from "./redux/services/r9-api";
import { authSlice } from "./redux/slices/auth-slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [r9Api.reducerPath]: r9Api.reducer,
      auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(r9Api.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
