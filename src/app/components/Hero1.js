import Lang from "/public/lang.png";
import Hero from "/public/Video.png";
import Logo from "/public/Logo.svg";
import { CiMenuBurger } from "react-icons/ci";


import Image from "next/image";
import NavBar from "./NavBar";

function Hero1() {
  return (
    <section
      className=" h-screen md:px-14  relative flex flex-col   py-5"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(15, 13, 15, 0.86),
            rgba(12, 20, 42, 0.30),
            rgba(8, 27, 73, 0.15),
            rgba(4, 36, 106, 0.32),
            rgba(0, 43, 135, 1.0)
          ),
          url(${Hero.src})
        `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
     <NavBar/>
      <main className="  text-white  justify-end text-center md:text-start  h-full flex mb-20  gap-8  flex-col ">
        <h1 className=" text-7xl ">Lorem ipsum dolor</h1>
        <p className=" text-sm">
          Lorem ipsum dolor sit amet consectetur. Et ultrices auctor tempor urna
          lectus diam pretium.
        </p>
        <div className=" text-center md:text-start">
          <a className=" cursor-pointer inline-flex items-center font-[600] text-xl gap-2 ">
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
        </div>
      </main>
    </section>
  );
}

export default Hero1;
