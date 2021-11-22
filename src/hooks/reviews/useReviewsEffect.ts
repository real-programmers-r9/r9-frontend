import { useEffect, useState } from "react";
import { findReviews } from "~/libs/api/reviews";

export default function useReviewEffect() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const reviews = await findReviews();
        setReviews(reviews);
      } catch (error) {
        alert("스케쥴 목록을 불러오는데 실패했습니다.");
      }
    };
    getData();
  }, [setReviews]);

  return { reviews, setReviews };
}
