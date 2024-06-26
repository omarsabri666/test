"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
function ServicesCard({ card }) {
  const [hover, setHover] = useState(false);
  console.log(hover);
  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{ opacity: 0, y: 200 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 0.1,
      }}
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            ${
              hover
                ? ` rgba(15, 13, 15, 0.8) 0%,
           rgba(15, 13, 15, 0.8) 100%`
                : ` rgba(15, 13, 15, 0.7) 0%,
           rgba(15, 13, 15, 0.7) 100%`
            }
          
          ),
          url(${card.img})
        `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "all",
        transitionDuration: "0.5s",
      }}
      className={` rounded-md  transition-all    flex relative  ${
        hover ? "scale-150 " : ""
      }  items-end py-6 h-[370px] `}
    >
      <p className="px-4 text-2xl text-gray-300">{card.text}</p>
      <AnimatePresence>
        {hover && (
          <motion.a
            initial={{ opacity: 0, x: 200 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3 }}
            animate={{ opacity: 1, x: 0 }}
            className=" absolute top-10 right-5 "
          >
            <svg
              width="83"
              height="83"
              viewBox="0 0 83 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.18571"
                y="1.18571"
                width="80.6286"
                height="80.6286"
                rx="40.3143"
                stroke="#94D4FF"
                stroke-width="2.37143"
              />
              <path
                d="M30.876 61.2532C30.9591 61.5011 31.1461 61.6572 31.3505 61.6572C35.398 61.6571 39.1835 59.6547 41.4611 56.3088L52.0364 40.7733C52.2165 40.5117 52.2165 40.1123 52.0364 39.8461L41.4622 24.319C39.1838 20.9735 35.3981 18.9714 31.3505 18.9714C31.1461 18.9714 30.9626 19.1321 30.876 19.3754C30.7894 19.6232 30.824 19.9124 30.9591 20.1143L35.6543 27.158C40.9615 35.1201 40.9637 45.4916 35.6598 53.4559L30.9591 60.5143C30.824 60.7162 30.7929 61.0054 30.876 61.2532Z"
                fill="#94D4FF"
              />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ServicesCard;
