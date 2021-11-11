import { IReviewState } from "~/types/stores";
import client from "./client";

/** 리뷰 목록 조회 */
export const findReviewsAPI = async () => {
  const response = await client.get("/reviews");
  return response.data;
};

/** 리뷰 등록 */
export const createReviewAPI = async (review: IReviewState) => {
  const response = await client.post("/reviews", review);
  return response.data;
};
