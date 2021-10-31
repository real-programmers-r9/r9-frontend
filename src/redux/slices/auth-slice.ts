import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Auth } from "src/types/stores";

const initialState: Auth = {
  user: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }: PayloadAction<Auth>) => {
      state.user = payload.user;
      state.accessToken = payload.accessToken;
    },
  },
});

export const { setCredentials } = authSlice.actions;
