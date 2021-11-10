import client from "./client";

/** 리뷰 목록 조회 */
export const findReviewsAPI = async () => {
  const response = await client.get("/reviews");
  return response.data;
};
