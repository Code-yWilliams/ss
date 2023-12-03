import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (): JSX.Element => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <></>;
};

export default ScrollToTop;
