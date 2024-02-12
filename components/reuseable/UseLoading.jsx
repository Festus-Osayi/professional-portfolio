import { useState, useEffect } from "react";
export default function UseLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleWindowLoad = () => {
      setIsLoading(false);
    };

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    window.addEventListener("load", handleWindowLoad);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  return isLoading;
}
