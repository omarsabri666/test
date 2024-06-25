"use client"
import card1 from "/public/card1.png";
import card2 from "/public/card2.png";
import card3 from "/public/card3.png";
import card4 from "/public/card4.png";
import Hero from "/public/tt.png";
import { whileInViewPresence, motion } from "framer-motion";



function SecHero() {
  return (
    <section id="About" className=" relative text-white flex flex-col     ">
      <div
        className="  text-white flex flex-col relative  md:h-[80vh]   "
        style={{
          backgroundImage: `
          linear-gradient(
            to right,
            rgba(0, 43, 135, 1.0) 0%,
            rgba(0, 43, 135, 0.8) 80%,
            rgba(0, 43, 135, 0.7) 100%
          ),
          url(${Hero.src})
        `,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <span className=" absolute top-10 right-8 ">
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
        </span>
        <div className=" my-20 flex px-20 md:w-2/3 text-center md:text-start   flex-col gap-7">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}

            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.1,
            }}
            className=" text-6xl"
          >
            About Duroub Logistics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}

            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.2,
            }}
            className=" text-sm md:w-3/4"
          >
            Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
            parturient phasellus aliquam. Gravida amet leo quis nam nibh. Sed
            urna commodo urna bibendum nulla cras tellus. Sit lacus dictum
            porttitor tellus sed fames arcu velit. Quam leo proin ipsum
            molestie. Nibh magna porttitor ac ipsum blandit eget vestibulum.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}

            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.1,
            }}
            className=" text-center md:text-start"
          >
            <a className=" inline-flex items-center text-xl cursor-pointer gap-2 font-[600]">
              Explore More{" "}
              <svg
                width="25"
                height="25"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="34"
                  height="34"
                  rx="17"
                  stroke="#94D4FF"
                />
                <path
                  d="M13.02 25.8297C13.055 25.9342 13.1339 26 13.2201 26C14.9269 26 16.5231 25.1556 17.4836 23.7447L21.943 17.1936C22.019 17.0832 22.019 16.9148 21.943 16.8026L17.484 10.255C16.5233 8.84424 14.9269 8 13.2201 8C13.1339 8 13.0565 8.06775 13.02 8.17033C12.9835 8.27484 12.9981 8.39678 13.055 8.48194L15.0349 11.4522C17.2729 14.8097 17.2738 19.1832 15.0372 22.5416L13.055 25.5181C12.9981 25.6032 12.9849 25.7252 13.02 25.8297Z"
                  fill="#94D4FF"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
      <div className="  -translate-y-10    flex items-center  md:flex-row flex-col  md:justify-end  ">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}

          exit={{ opacity: 0, y: 200 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.1,
          }}
          className="   h-[370px]  md:w-[22%]  w-full  items-center  flex flex-col justify-center "
          style={{
            backgroundImage: `
          linear-gradient(
            to bottom,
           rgba(0, 43, 135, 0.70) 0%,
           rgba(0, 43, 135, 0.70) 100%
          ),
          url(${card1.src})
        `,

            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" pt-16 flex flex-col px-4  ">
            <h2 className=" text-4xl">25C to +25C</h2>
            <p className=" text-gray-300 ">
              Multi temperature WH’s Order fulfillment DC
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}

          exit={{ opacity: 0, y: 200 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1.2 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="   h-[370px]  md:w-[22%] w-full   flex flex-col justify-center "
          style={{
            backgroundImage: `
          linear-gradient(
            to bottom,
           rgba(61, 129, 211, 0.7) 0%,
           rgba(61, 129, 211, 0.7) 100%
          ),
          url(${card2.src})
        `,

            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" pt-16 flex flex-col  px-4">
            <h2 className=" text-4xl">One united</h2>
            <p className=" text-gray-300  ">SAP EWM Voice picking</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}

          exit={{ opacity: 0, y: 200 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.1,
          }}
          className="   h-[370px]  md:w-[22%] w-full  flex flex-col justify-center "
          style={{
            backgroundImage: `
          linear-gradient(
            to bottom,
           rgba(11, 68, 170, 0.7) 0%,
           rgba(11, 68, 170, 0.7) 100%
          ),
          url(${card3.src})
        `,

            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" pt-16 flex flex-col  px-4">
            <h2 className=" text-4xl">+60,000</h2>
            <p className=" text-gray-300  ">Pallets</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}

          exit={{ opacity: 0, y: 200 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.1,
          }}
          className="   h-[370px]  md:w-[22%] w-full    flex flex-col justify-center "
          style={{
            backgroundImage: `
          linear-gradient(
            to bottom,
           rgba(96, 161, 226, 0.7) 0%,
           rgba(96, 161, 226, 0.7) 100%
          ),
          url(${card4.src})
        `,

            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" pt-16 flex flex-col  px-4">
            <h2 className=" text-4xl">+300</h2>
            <p className=" text-gray-300  ">Workforce employees </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SecHero;
