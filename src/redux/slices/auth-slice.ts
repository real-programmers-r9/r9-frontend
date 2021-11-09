import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth, User } from "src/types/stores";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";
import { api } from "../services/api";

const initialState: Auth = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // action type bug
    // ref: https://github.com/kirill-konshin/next-redux-wrapper/issues/428
    builder.addCase(HYDRATE, (state, action: any) => {
      return { ...state, ...action.payload.auth };
    });
    builder.addMatcher(
      api.endpoints.postSignIn.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getMyInfo.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
      }
    );
  },
});

export const { setCredentials } = authSlice.actions;

export const selectAuth = (state: AppState) => state.auth;
