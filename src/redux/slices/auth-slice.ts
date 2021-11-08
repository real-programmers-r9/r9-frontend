import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "~/redux/store";
import { api } from "~/redux/services/api";
import { AuthState } from "~/types/states";

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    // action type bug
    // ref: https://github.com/kirill-konshin/next-redux-wrapper/issues/428
    builder.addCase(HYDRATE, (state, action: any) => {
      return { ...state, ...action.payload.auth };
    });
    builder.addMatcher(api.endpoints.signIn.matchFulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addMatcher(api.endpoints.signOut.matchFulfilled, (state) => {
      state.user = null;
    });
    builder.addMatcher(api.endpoints.myInfo.matchFulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setCredentials } = authSlice.actions;

export const selectAuth = (state: AppState) => state.auth;
