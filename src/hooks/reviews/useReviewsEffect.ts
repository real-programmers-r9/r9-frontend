import { useEffect, useState } from "react";
import { AnyObject } from "yup/lib/object";
import { findBizReviews } from "~/libs/api/reviews";

export default function useReviewEffect(bizId: any) {
  const [reviews, setReviews] = useState<any[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const reviews = await findBizReviews(bizId);
        setReviews(reviews);
      } catch (error) {
        alert("스케쥴 목록을 불러오는데 실패했습니다.");
      }
    };
    getData();
  }, [setReviews]);

  return { reviews, setReviews };
}
