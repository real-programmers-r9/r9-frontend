import { useEffect, useState } from "react";
import { findReviewsAPI } from "src/libs/api/review";

export default function useReviewEffect() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const reviews = await findReviewsAPI();
        setReviews(reviews);
      } catch (error) {
        alert("스케쥴 목록을 불러오는데 실패했습니다.");
      }
    };
    getData();
  }, [setReviews]);

  return { reviews, setReviews };
}
