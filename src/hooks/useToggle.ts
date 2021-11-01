import { useCallback, useState } from "react";

export type UseToggle = [boolean, () => void];

export default function useToggle(initialState = false): UseToggle {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
}
