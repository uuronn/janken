import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "~/data";

export const useGetLocalStorage = () => {
  const [localMyBest, setLocalMyBest] = useState<number>(0);

  useEffect(() => {
    const storage: number = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) as string
    );

    if (storage === null) {
      setLocalMyBest(0);
      return;
    }

    setLocalMyBest(storage);
  }, []);

  const localMyBestCounter = () => {
    if (!localMyBest) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(1));
      return;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localMyBest + 1));
  };

  const localMyBestReset = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return { localMyBest, localMyBestCounter, localMyBestReset };
};
