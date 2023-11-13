import React, { useRef, useEffect } from "react";

export const useOutsideClose = (
  ref: any,
  state: boolean,
  setState: (UpdatedState: boolean) => void
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target) && !state) {
        setState(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
