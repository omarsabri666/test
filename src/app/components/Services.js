"use client";
import card1 from "/public/card1.png";
import card6 from "/public/card6.png";
import card5 from "/public/card5.png";
import { whileInViewPresence, motion } from "framer-motion";
import ServicesCard from "./ServicesCard";

const cards = [
  {
    text: "            Transportation, distribution & last mil",
    img: card5.src,
    id: 1,
  },
  {
    text: "            Warehousing multi temperature (25C to ...",
    img: card1.src,
    id: 2,
  },
  {
    text: "Cross border transport",
    img: card6.src,
    id: 3,
  },
];
function Services() {
  return (
    <section id="Services" className=" py-20 bg-white ">
      <div className=" flex flex-col md:px-14 text-center md:text-start gap-4  md:gap-0">
        <motion.h4
          initial={{ opacity: 0, x: -100 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.1,
          }}
          className="  text-[#0F0D0F] font-nova text-[70px] font-[300]"
        >
          Duroub Services
        </motion.h4>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.1,
          }}
          className=" flex items-center justify-between flex-col gap-4 md:gap-0 md:flex-row  "
        >
          <p className=" md:w-1/2 mt-4 font-nova-regular text-[20px]  text-[#0F0D0F]">
            Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
            parturient phasellus aliquam. Gravida amet leo quis nam nibh.
          </p>
          <a className=" inline-flex gap-2 text-[#0F0D0F] items-center text-lg font-[600]">
            All services
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
      <div className="  translate-y-0 md:translate-y-24 px-8 grid grid-cols-1 md:grid-cols-3 py-5 md:py-0  gap-3">
        {cards.map((card) => (
          <ServicesCard key={card.id} card={card} />
        ))}
      </div>
      <div
        className=" md:h-[140vh] md:my-20  flex flex-col md:px-14 py-5 md:py-0  px-8 justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, #002B87
, #002B87 )`,
        }}
      >
        <div className=" flex py-5 md:py-0   flex-col gap-3 w-full text-center md:text-start md:w-2/5">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.1,
            }}
            className=" text-[#94D4FF] font-nova-semibold  text-7xl"
          >
            8 Regions
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.1,
            }}
            className=" text-white  font-nova text-5xl"
          >
            of the kingdom fall under our coverage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.1,
            }}
            className=" text-[17px] font-nova-regular  text-gray-300"
          >
            Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
            parturient phasellus aliquam. Gravida amet leo quis nam nibh.
          </motion.p>
          <div className="  flex  gap-5  items-center  md:items-start text-white flex-col">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 0.1,
              }}
              className=" flex items-center gap-2"
            >
              <span
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)", // Background color with 10% opacity
                }}
                className=" rounded-md px-4 py-2  "
              >
                Riyadh
              </span>
              <span
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)", // Background color with 10% opacity
                }}
                className=" rounded-md px-4 py-2  "
              >
                Jeddah
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 0.1,
              }}
              className=" flex items-center gap-2"
            >
              <span
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)", // Background color with 10% opacity
                }}
                className=" rounded-md px-4 py-2  "
              >
                Dammam
              </span>
              <span
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)", // Background color with 10% opacity
                }}
                className=" rounded-md px-4 py-2  "
              >
                Madinah
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 0.1,
              }}
              className=" flex items-center gap-2"
            >
              <span
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)", // Background color with 10% opacity
                }}
                className=" rounded-md px-4 py-2  "
              >
                Al Qassem
              </span>
              <span
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)", // Background color with 10% opacity
                }}
                className=" rounded-md px-4 py-2  "
              >
                Sakaka
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 0.1,
              }}
              className=" flex items-center gap-2"
            >
              <span
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)", // Background color with 10% opacity
                }}
                className=" rounded-md px-4 py-2  "
              >
                Khamis Mushiat
              </span>
              <span
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)", // Background color with 10% opacity
                }}
                className=" rounded-md px-4 py-2  "
              >
                Tabuk
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;