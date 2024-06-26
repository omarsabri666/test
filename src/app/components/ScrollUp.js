"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function ScrollUp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.visualViewport.height) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className=" fixed  z-20  bottom-10 right-10"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            width="55"
            height="55"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.0252"
              y="1.40789"
              width="69.7134"
              height="69.7134"
              rx="34.8567"
              stroke="#94D4FF"
              stroke-width="2.0504"
            />
            <path
              d="M53.9863 44.425C54.2006 44.3532 54.3356 44.1915 54.3356 44.0148C54.3356 40.5152 52.6042 37.2422 49.7113 35.2729L36.2789 26.1292C36.0527 25.9735 35.7074 25.9735 35.4772 26.1292L22.0521 35.272C19.1595 37.2419 17.4285 40.5151 17.4285 44.0148C17.4285 44.1915 17.5674 44.3502 17.7777 44.425C17.992 44.4999 18.242 44.47 18.4166 44.3532L24.5068 40.2936C31.391 35.7048 40.3585 35.7029 47.2445 40.2889L53.3474 44.3532C53.522 44.47 53.772 44.4969 53.9863 44.425Z"
              fill="#94D4FF"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollUp;
