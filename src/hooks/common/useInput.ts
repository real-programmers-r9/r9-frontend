import { useState } from "react";

/** input value 바꿔줄때 사용 */
export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    setValue(e.target.value);
  };
  return [value, onChange] as [string, typeof onChange];
}
