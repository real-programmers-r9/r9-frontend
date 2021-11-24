import { useEffect, useState } from "react";
import { findReviews } from "~/libs/api/reviews";
import { getBusinesses } from "~/libs/api/users";
import { User } from "~/types/user";

export default function useBusinessEffect() {
  const [businesses, setBusinesses] = useState<User[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const businesses = await getBusinesses();
        setBusinesses(businesses);
      } catch (error) {
        alert("스케쥴 목록을 불러오는데 실패했습니다.");
      }
    };
    getData();
  }, [setBusinesses]);

  return { businesses, setBusinesses };
}
