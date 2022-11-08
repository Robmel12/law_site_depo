import { useEffect, useState, useMemo } from "react";

const useColorNav = (options, targetRef) => {
  const [isVisible, setIsVisible] = useState(false);
  const callbackFunction = (enteries) => {
    const [entry] = enteries;
    setIsVisible(entry.isIntersecting);
  };
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef?.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);
  return isVisible;
};

export default useColorNav;
