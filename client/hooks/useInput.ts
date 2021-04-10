import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export default function useInput<T = any>(initialValue: T): [T, (e: any) => void, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
}
