import { useEffect } from "react";

export default function useToggleResize(setToggle, dimensions) {
  useEffect(() => {
    if (dimensions?.width >= 768) setToggle(false);
  }, [dimensions?.width]);
}
