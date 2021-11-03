import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "src/types/stores";
import { r9Api } from "../services/r9-api";

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
    builder.addMatcher(
      r9Api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
      }
    );
  },
});

export const { setCredentials } = authSlice.actions;
