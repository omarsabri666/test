"use client"
import Lang from "/public/lang.png";
import Hero from "/public/Video.webp";
import Logo from "/public/Logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import BackgroundVideo from 'next-video/background-video';
import { whileInViewPresence, motion } from "framer-motion";



import Image from "next/image";
import NavBar from "./NavBar";

function Hero1() {
  return (
    <section className="  h-screen md:px-14 font-nova   relative flex flex-col   ">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        src={require("/public/truck.mp4")}
      />
      <div className="gradient-overlay"></div>

      <NavBar />
      <main className=" content   text-white  justify-end text-center md:text-start  h-full flex   gap-8  flex-col ">
        <motion.div
          className=" flex flex-col gap-8 mt-20"
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
        >
          <h1 className="  px-2 md:px-0 text-[90px] font-nova font-[300] ">
            Lorem ipsum dolor
          </h1>{" "}
          <p className="  md:w-2/3  px-2 md:px-0  text-white font-nova-regular font-[400] text-[22px]">
            Lorem ipsum dolor sit amet consectetur. Et ultrices auctor tempor
            urna lectus diam pretium.
          </p>
        </motion.div>
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
          <a className=" cursor-pointer font-nova-semibold inline-flex items-center font-[600] text-[25px] gap-2 ">
            {" "}
            Discover More{" "}
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
          <a className=" hidden md:flex" href="#About">
            <div className="scroll-down">
              <div className="arrow"></div>
              <div className="arrow"></div>
              <div className="arrow"></div>
              <div className="arrow"></div>
            </div>
          </a>
        </motion.div>
      </main>
    </section>
  );
}

export default Hero1;
