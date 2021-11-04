import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Auth } from "src/types/stores";
import { r9Api } from "../services/r9-api";
import { AppState } from "../store";

const initialState: Auth = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }: PayloadAction<Auth>) => {
      state.user = payload.user;
    },
  },
  extraReducers: (builder) => {
    // actions type bug
    // ref: https://github.com/kirill-konshin/next-redux-wrapper/issues/428
    builder.addCase(HYDRATE, (state, actions: any) => {
      return { ...state, ...actions.payload.auth };
    });
    builder.addMatcher(
      r9Api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      r9Api.endpoints.getMyInfo.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
  },
});

export const { setCredentials } = authSlice.actions;

export const selectAuth = (state: AppState) => state.auth;
