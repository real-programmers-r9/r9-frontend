import { Review } from "~/types/review";
import { client } from ".";

/** 리뷰 목록 조회 */
export const findReviews = async () => {
  const response = await client.get("/reviews");
  return response.data;
};

/** 리뷰 등록 */
export const createReview = async (review: Review) => {
  const response = await client.post("/reviews", review);
  return response.data;
};
