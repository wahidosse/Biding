import { useEffect } from "react";

export const useConsoleLog = (dependency: any, title: string) => {
  useEffect(() => {
    console.log(dependency, title);
  }, [dependency]);
};
