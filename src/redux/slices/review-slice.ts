import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReviewState } from "~/types/stores";
import { AppState } from "../store";

const initialState: IReviewState = {
  writer: null,
  title: "",
  content: "",
  startDate: new Date(),
  endDate: new Date(),
  rating: 0,
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReview: (
      state: any,
      { payload: { key, value } }: PayloadAction<any>
    ) => {
      state[key] = value;
    },
  },
});

export const { setReview } = reviewSlice.actions;
export const selectReview = (state: AppState) => state.review;
