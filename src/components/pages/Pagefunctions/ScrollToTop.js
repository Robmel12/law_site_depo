import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Routes() {
  const location = useLocation();
  // Scroll to top if path changes
  console.log("used scrolltotop");
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
}
