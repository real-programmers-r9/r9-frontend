import { useState } from "react";

/** 버튼 눌러서 contents 띄워줄때 쓰는 함수 */
export default function useTabs(initialTab: number, allTabs: any[]) {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  const currentItem = allTabs[currentIndex];
  return [currentItem, setCurrentIndex];
}
