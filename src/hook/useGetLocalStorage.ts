import { useLayoutEffect, useState } from "react";
import { LOCAL_MY_BEST_KEY } from "~/data";

export const useGetLocalStorage = () => {
  const [localMyBest, setLocalMyBest] = useState<number>(0);

  useLayoutEffect(() => {
    const storage: number = JSON.parse(
      localStorage.getItem(LOCAL_MY_BEST_KEY) as string
    );

    if (storage === null) return;

    setLocalMyBest(storage);
  }, []);

  const localMyBestCounter = () => {
    if (!localMyBest) {
      localStorage.setItem(LOCAL_MY_BEST_KEY, JSON.stringify(1));
      return;
    }

    localStorage.setItem(LOCAL_MY_BEST_KEY, JSON.stringify(localMyBest + 1));
  };

  const localMyBestReset = () => {
    localStorage.removeItem(LOCAL_MY_BEST_KEY);
  };

  return { localMyBest, localMyBestCounter, localMyBestReset };
};
