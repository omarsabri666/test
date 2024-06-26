"use client";
import { useState } from "react";
import about from "/public/about.png";
import { whileInViewPresence, motion, AnimatePresence } from "framer-motion";

function Regions() {
  const [hover, setHover] = useState(false);
  return (
    <section id="News" className=" bg-white  px-4 md:px-10 py-24 ">
      <div className=" flex text-center md:text-start flex-col py-8 gap-5 ">
        <motion.h4
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
          className="  text-[#0F0D0F] font-nova  text-6xl"
        >
          Latest News
        </motion.h4>
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
          className=" flex items-center  flex-col md:flex-row gap-4 md:gap-0 justify-between "
        >
          <p className="  md:w-1/2 font-nova-regular  text-[#0F0D0F]">
            Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
            parturient phasellus aliquam. Gravida amet leo quis nam nibh.
          </p>
          <a className=" inline-flex gap-2 font-nova-semibold  text-[#0F0D0F] items-center text-[22px] font-[600]">
            All News
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
                stroke="#002B87"
              />
              <path
                d="M13.02 25.8297C13.055 25.9342 13.1339 26 13.2201 26C14.9269 26 16.5231 25.1556 17.4836 23.7447L21.943 17.1936C22.019 17.0832 22.019 16.9148 21.943 16.8026L17.484 10.255C16.5233 8.84424 14.9269 8 13.2201 8C13.1339 8 13.0565 8.06775 13.02 8.17033C12.9835 8.27484 12.9981 8.39678 13.055 8.48194L15.0349 11.4522C17.2729 14.8097 17.2738 19.1832 15.0372 22.5416L13.055 25.5181C12.9981 25.6032 12.9849 25.7252 13.02 25.8297Z"
                fill="#002B87"
              />
            </svg>
          </a>
        </motion.div>
      </div>
      <div className="  flex items-center flex-col md:flex-row gap-4 ">
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
          className=" rounded-md  transition-all duration-500  trans flex items-end relative  md:w-2/5 h-[300px]"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            backgroundImage: `
    linear-gradient(
      to bottom,
      ${
        hover
          ? "rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%"
          : "rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%"
      }
    ),
    url(${about.src})
  `,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transition: "all",
          }}
        >
          <AnimatePresence>
            {hover && (
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                exit={{ opacity: 0, x: 50 }}
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
              </motion.span>
            )}
          </AnimatePresence>
          <AnimatePresence>
            <div className=" flex flex-col">
              <motion.p className=" text-gray-300 px-4 mb-2">
                Lorem ipsum dolor sit amet consectetur lacus auctor amet varius
                in ...
              </motion.p>

              {hover && (
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3 }}
                  className=" text-gray-300 px-4 mb-2"
                >
                  Lorem ipsum dolor sit amet consectetur lacus auctor amet
                  varius in
                </motion.p>
              )}
            </div>
          </AnimatePresence>

          <span className=" text-gray-100 font-nova-regular text-[18px] absolute top-5 bg-[#82bee6] rounded-full px-4 py-2 left-5">
            09 May 2023
          </span>
        </motion.div>
        <div className=" md:w-3/5 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.1,
            }}
            className=" bg-[#F2F4F9] rounded-md px-4 py-2"
          >
            <h3 className=" text-sm text-[#002B87]">09 May 2023</h3>
            <div className=" flex items-center justify-between  ">
              <p className=" font-nova-regular text-[22px] w-3/5 text-[#0F0D0F]  ">
                Lorem ipsum dolor sit amet consectetur lacus auctor amet varius
                in ...
              </p>
              <a className=" w-2/5 inline-flex  hover:-translate-x-10 transition-all justify-end font-nova-semibold text-[18px] gap-2 items-center text-[#002B87] cursor-pointer font-[600]">
                read more
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0199784 17.8297C0.0550294 17.9342 0.133894 18 0.220061 18C1.92686 18 3.52313 17.1556 4.48357 15.7447L8.94304 9.19355C9.01899 9.08323 9.01899 8.91484 8.94304 8.80258L4.48404 2.25502C3.52328 0.844243 1.92691 1.55269e-06 0.220061 4.14733e-06C0.133894 4.14733e-06 0.0564899 0.0677461 0.0199784 0.170327C-0.016533 0.274843 -0.00192847 0.396778 0.0550294 0.48194L2.03492 3.45219C4.27293 6.80967 4.27384 11.1832 2.03724 14.5416L0.0550294 17.5181C-0.00192847 17.6032 -0.0150726 17.7252 0.0199784 17.8297Z"
                    fill="#0B44AA"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.1,
            }}
            className=" bg-[#F2F4F9] rounded-md px-4 py-2"
          >
            <h3 className=" text-sm text-[#002B87]">09 May 2023</h3>
            <div className=" flex items-center justify-between  ">
              <p className=" font-nova-regular text-[22px] w-3/5 text-[#0F0D0F]  ">
                Lorem ipsum dolor sit amet consectetur lacus auctor amet varius
                in ...
              </p>
              <a className=" w-2/5 inline-flex  hover:-translate-x-10 transition-all justify-end font-nova-semibold text-[18px] gap-2 items-center text-[#002B87] cursor-pointer font-[600]">
                read more
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0199784 17.8297C0.0550294 17.9342 0.133894 18 0.220061 18C1.92686 18 3.52313 17.1556 4.48357 15.7447L8.94304 9.19355C9.01899 9.08323 9.01899 8.91484 8.94304 8.80258L4.48404 2.25502C3.52328 0.844243 1.92691 1.55269e-06 0.220061 4.14733e-06C0.133894 4.14733e-06 0.0564899 0.0677461 0.0199784 0.170327C-0.016533 0.274843 -0.00192847 0.396778 0.0550294 0.48194L2.03492 3.45219C4.27293 6.80967 4.27384 11.1832 2.03724 14.5416L0.0550294 17.5181C-0.00192847 17.6032 -0.0150726 17.7252 0.0199784 17.8297Z"
                    fill="#0B44AA"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.1,
            }}
            className=" bg-[#F2F4F9] rounded-md px-4 py-2"
          >
            <h3 className=" text-sm text-[#002B87]">09 May 2023</h3>
            <div className=" flex items-center justify-between  ">
              <p className=" font-nova-regular text-[22px] w-3/5 text-[#0F0D0F]  ">
                Lorem ipsum dolor sit amet consectetur lacus auctor amet varius
                in ...
              </p>
              <a className=" w-2/5 inline-flex  hover:-translate-x-10 transition-all justify-end font-nova-semibold text-[18px] gap-2 items-center text-[#002B87] cursor-pointer font-[600]">
                read more
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0199784 17.8297C0.0550294 17.9342 0.133894 18 0.220061 18C1.92686 18 3.52313 17.1556 4.48357 15.7447L8.94304 9.19355C9.01899 9.08323 9.01899 8.91484 8.94304 8.80258L4.48404 2.25502C3.52328 0.844243 1.92691 1.55269e-06 0.220061 4.14733e-06C0.133894 4.14733e-06 0.0564899 0.0677461 0.0199784 0.170327C-0.016533 0.274843 -0.00192847 0.396778 0.0550294 0.48194L2.03492 3.45219C4.27293 6.80967 4.27384 11.1832 2.03724 14.5416L0.0550294 17.5181C-0.00192847 17.6032 -0.0150726 17.7252 0.0199784 17.8297Z"
                    fill="#0B44AA"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Regions;
