import { useCallback, useState } from "react";

export type UseToggle = [boolean, () => void];

export const useToggle = (initialState = false): UseToggle => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export default useToggle;
