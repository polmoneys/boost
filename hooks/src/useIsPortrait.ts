import { useEffect, useState } from "react";

const useIsPortrait = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = "(orientation:portrait)";
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches]);

  return matches;
};

export default useIsPortrait;
