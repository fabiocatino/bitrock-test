import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

export interface mobile {
  isMobile?: boolean;
  setIsMobile?: Dispatch<SetStateAction<boolean>>;
}

export default function useMobile(_isMobile: boolean): mobile {
  const [isMobile, setIsMobile] = useState<boolean>(_isMobile),
    checkIfMobile = (width: number) => setIsMobile(width < 780);

  const handleResize = useCallback(() => {
    checkIfMobile(window.innerWidth);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [handleResize]);

  return { isMobile, setIsMobile };
}
