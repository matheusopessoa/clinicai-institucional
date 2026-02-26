import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as pixel from "@/utils/pixel";

const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    pixel.pageview();
  }, [location]);

  return null;
};

export default PixelTracker;
