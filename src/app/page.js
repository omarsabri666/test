import Image from "next/image";
import Logo from "/public/Logo.svg";
import Hero from "/public/Video.png";
import Hero2 from "/public/tt.png";
import Lang from "/public/lang.png";
import card1 from "/public/card1.png";
import card2 from "/public/card2.png";
import card3 from "/public/card3.png";
import card4 from "/public/card4.png";
import card5 from "/public/card5.png";
import card6 from "/public/card6.png";
import about from "/public/about.png";

export default function Home() {
  return (
    <main>
      <section
        className=" h-screen px-14  flex flex-col   py-5"
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
        <header className=" text-white  ">
          <nav className=" flex justify-between   items-center">
            <Image src={Logo} width={200} height={50} alt=" Logo" />
            <ul className=" flex items-center mr-10   gap-5">
              <li>
                <a href="#About">About Us</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#News">News</a>
              </li>
              <li>
                <a href="#Careers">Careers</a>
              </li>
              <li>
                <a href="#ContactUs">Contact Us</a>
              </li>
            </ul>
            <Image width={60} height={30} src={Lang} />
          </nav>
        </header>
        <main className="  text-white  justify-end  h-full flex mb-20  gap-8  flex-col ">
          <h1 className=" text-7xl ">Lorem ipsum dolor</h1>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet consectetur. Et ultrices auctor tempor
            urna lectus diam pretium.
          </p>
          <a className=" cursor-pointer inline-flex items-center font-[600] text-xl gap-2 ">
            {" "}
            Discover More{" "}
            <svg
              width="35"
              height="35"
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
        </main>
      </section>
      <section className=" relative text-white flex flex-col     ">
        <div
          className="  text-white flex flex-col  h-[80vh]   "
          style={{
            backgroundImage: `
          linear-gradient(
            to right,
            rgba(0, 43, 135, 1.0) 0%,
            rgba(0, 43, 135, 0.8) 80%,
            rgba(0, 43, 135, 0.7) 100%
          ),
          url(${Hero2.src})
        `,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" my-20 flex px-20 w-2/3  flex-col gap-7">
            <h1 className=" text-6xl">About Duroub Logistics</h1>
            <p className=" text-sm w-3/4">
              Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
              parturient phasellus aliquam. Gravida amet leo quis nam nibh. Sed
              urna commodo urna bibendum nulla cras tellus. Sit lacus dictum
              porttitor tellus sed fames arcu velit. Quam leo proin ipsum
              molestie. Nibh magna porttitor ac ipsum blandit eget vestibulum.
            </p>
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
          </div>
        </div>
        <div className="  -translate-y-10    flex items-center  md:flex-row flex-col  md:justify-end  ">
          <div
            className="   h-[370px]  w-[22%]   items-center  flex flex-col justify-center "
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
          </div>
          <div
            className="   h-[370px]  w-[22%]    flex flex-col justify-center "
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
          </div>
          <div
            className="   h-[370px]  w-[22%]   flex flex-col justify-center "
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
          </div>
          <div
            className="   h-[370px]  w-[22%]     flex flex-col justify-center "
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
          </div>
        </div>
      </section>
      <section className=" my-20 ">
        <div className=" flex flex-col px-4 ">
          <h4 className="  text-[#0F0D0F] text-4xl">Duroub Services</h4>
          <div className=" flex items-center justify-between ">
            <p className=" text-[#0F0D0F]">
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
          </div>
        </div>
        <div className="  translate-y-24 px-4 grid grid-cols-3 my-8 gap-3">
          <div
            style={{
              backgroundImage: `
          linear-gradient(
            to bottom,
           rgba(15, 13, 15, 0.7) 0%,
           rgba(15, 13, 15, 0.7) 100%
          ),
          url(${card5.src})
        `,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className=" rounded-md flex  items-end py-6 h-[370px] "
          >
            <p className="px-4 text-2xl text-gray-300">
              Transportation, distribution & last mile
            </p>
          </div>
          <div
            style={{
              backgroundImage: `
          linear-gradient(
            to bottom,
           rgba(15, 13, 15, 0.7) 0%,
           rgba(15, 13, 15, 0.7) 100%
          ),
          url(${card1.src})
        `,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className=" rounded-md flex  items-end py-6 h-[370px] "
          >
            <p className="px-4 text-2xl text-gray-300">
              Warehousing multi temperature (25C to ...
            </p>
          </div>
          <div
            style={{
              backgroundImage: `
          linear-gradient(
            to bottom,
           rgba(15, 13, 15, 0.7) 0%,
           rgba(15, 13, 15, 0.7) 100%
          ),
          url(${card6.src})
        `,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className=" rounded-md flex  items-end py-6 h-[370px] "
          >
            <p className="px-4 text-2xl text-gray-300">
              Cross border transport{" "}
            </p>
          </div>
        </div>
        <div
          className=" h-[120vh] flex flex-col px-8 justify-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, #002B87
, #002B87 )`,
          }}
        >
          <div className=" flex   flex-col gap-3 w-2/5">
            <h1 className=" text-[#94D4FF] text-5xl">8 Regions</h1>
            <h2 className=" text-white text-3xl">
              of the kingdom fall under our coverage
            </h2>
            <p className=" text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
              parturient phasellus aliquam. Gravida amet leo quis nam nibh.
            </p>
            <div className="  flex  gap-5  text-white flex-col">
              <div className=" flex items-center gap-2">
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
              </div>
              <div className=" flex items-center gap-2">
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
              </div>
              <div className=" flex items-center gap-2">
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
              </div>
              <div className=" flex items-center gap-2">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" px-4 my-20 ">
        <div className=" flex flex-col my-10 gap-5 ">
          <h4 className="  text-[#0F0D0F] text-4xl">Latest News</h4>
          <div className=" flex items-center justify-between ">
            <p className="  w-1/2  text-[#0F0D0F]">
              Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
              parturient phasellus aliquam. Gravida amet leo quis nam nibh.
            </p>
            <a className=" inline-flex gap-2 text-[#0F0D0F] items-center text-lg font-[600]">
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
          </div>
        </div>
        <div className="  flex items-center flex-col md:flex-row gap-4 ">
          <div
            className=" rounded-md flex items-end relative  w-2/5 h-[300px]"
            style={{
              backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4)
          ),
          url(${about.src})
        `,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className=" text-gray-300 px-4 mb-2">
              Lorem ipsum dolor sit amet consectetur lacus auctor amet varius in
              ...
            </p>
            <span className=" text-gray-100 text-sm absolute top-5 bg-[#82bee6] rounded-full px-4 py-2 left-5">
              09 May 2023
            </span>
          </div>
          <div className=" w-3/5 flex flex-col gap-4">
            <div className=" bg-[#F2F4F9] rounded-md px-4 py-4">
              <h3 className=" text-sm text-[#002B87]">09 May 2023</h3>
              <div className=" flex items-center justify-between  ">
                <p className=" text-[#0F0D0F]  ">
                  Lorem ipsum dolor sit amet consectetur lacus auctor amet
                  varius in ...
                </p>
                <a className=" inline-flex gap-2 items-center text-[#002B87] cursor-pointer font-[600]">
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
            </div>
            <div className=" bg-[#F2F4F9] rounded-md px-4 py-4">
              <h3 className=" text-sm text-[#002B87]">09 May 2023</h3>
              <div className=" flex items-center justify-between  ">
                <p className=" text-[#0F0D0F]  ">
                  Lorem ipsum dolor sit amet consectetur lacus auctor amet
                  varius in ...
                </p>
                <a className=" inline-flex gap-2 items-center text-[#002B87] cursor-pointer font-[600]">
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
            </div>
            <div className=" bg-[#F2F4F9] rounded-md px-4 py-4">
              <h3 className=" text-sm text-[#002B87]">09 May 2023</h3>
              <div className=" flex items-center justify-between  ">
                <p className=" text-[#0F0D0F]  ">
                  Lorem ipsum dolor sit amet consectetur lacus auctor amet
                  varius in ...
                </p>
                <a className=" inline-flex gap-2 items-center text-[#002B87] cursor-pointer font-[600]">
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
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background:
            "linear-gradient(179deg, #002B87 42.14%, rgba(11, 68, 170, 0.81) 60.79%, rgba(61, 129, 211, 0.88) 79.44%, rgba(96, 161, 226, 0.77) 99.24%)",
        }}
        className="  flex flex-col   relative "
      >
        <div className=" flex items-center gap-6">
          <div className=" flex flex-col gap-4 w-1/2 px-10 py-20  ">
            <h3 className=" w-2/3 text-white text-4xl">
              Our Compliance and Regulatory
            </h3>
            <p className=" w-2/3 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
              parturient phasellus aliquam. Gravida amet leo quis nam nibh.
            </p>
          </div>
          <div className=" flex  gap-3 text-white flex-col">
            <div className=" flex items-center  gap-2">
              <span
                style={{ background: "rgba(255, 255, 255, 0.10)" }}
                className="  inline-flex gap-2 items-center px-4 rounded-md py-2 "
              >
                Municipality
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 28C4.89798 28 4 27.102 4 26V10C4 8.89798 4.89798 8 6 8H22C23.102 8 24 8.89798 24 10V26C24 27.102 23.102 28 22 28H6Z"
                    stroke="#60A1E2"
                    stroke-width="2"
                  />
                  <path
                    d="M28 3H16.5C16.22 3 16 3.22 16 3.5V4.5C16 4.78 16.22 5 16.5 5H25.59L13.65 16.94C13.45 17.13 13.45 17.45 13.65 17.65L14.35 18.35C14.55 18.55 14.87 18.55 15.06 18.35L27 6.41V15.5C27 15.78 27.22 16 27.5 16H28.5C28.78 16 29 15.78 29 15.5V4C29 3.45 28.55 3 28 3Z"
                    fill="#94D4FF"
                  />
                </svg>
              </span>
              <span
                style={{ background: "rgba(255, 255, 255, 0.10)" }}
                className="  inline-flex gap-2 items-center px-4 rounded-md py-2 "
              >
                Civil Defense
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 28C4.89798 28 4 27.102 4 26V10C4 8.89798 4.89798 8 6 8H22C23.102 8 24 8.89798 24 10V26C24 27.102 23.102 28 22 28H6Z"
                    stroke="#60A1E2"
                    stroke-width="2"
                  />
                  <path
                    d="M28 3H16.5C16.22 3 16 3.22 16 3.5V4.5C16 4.78 16.22 5 16.5 5H25.59L13.65 16.94C13.45 17.13 13.45 17.45 13.65 17.65L14.35 18.35C14.55 18.55 14.87 18.55 15.06 18.35L27 6.41V15.5C27 15.78 27.22 16 27.5 16H28.5C28.78 16 29 15.78 29 15.5V4C29 3.45 28.55 3 28 3Z"
                    fill="#94D4FF"
                  />
                </svg>
              </span>
            </div>
            <div className=" flex items-center  gap-2">
              <span
                style={{ background: "rgba(255, 255, 255, 0.10)" }}
                className="  inline-flex gap-2 items-center px-4 rounded-md py-2 "
              >
                SFDA
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 28C4.89798 28 4 27.102 4 26V10C4 8.89798 4.89798 8 6 8H22C23.102 8 24 8.89798 24 10V26C24 27.102 23.102 28 22 28H6Z"
                    stroke="#60A1E2"
                    stroke-width="2"
                  />
                  <path
                    d="M28 3H16.5C16.22 3 16 3.22 16 3.5V4.5C16 4.78 16.22 5 16.5 5H25.59L13.65 16.94C13.45 17.13 13.45 17.45 13.65 17.65L14.35 18.35C14.55 18.55 14.87 18.55 15.06 18.35L27 6.41V15.5C27 15.78 27.22 16 27.5 16H28.5C28.78 16 29 15.78 29 15.5V4C29 3.45 28.55 3 28 3Z"
                    fill="#94D4FF"
                  />
                </svg>
              </span>
              <span
                style={{ background: "rgba(255, 255, 255, 0.10)" }}
                className="  inline-flex gap-2 items-center px-4 rounded-md py-2 "
              >
                ISO 9001:2015
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 28C4.89798 28 4 27.102 4 26V10C4 8.89798 4.89798 8 6 8H22C23.102 8 24 8.89798 24 10V26C24 27.102 23.102 28 22 28H6Z"
                    stroke="#60A1E2"
                    stroke-width="2"
                  />
                  <path
                    d="M28 3H16.5C16.22 3 16 3.22 16 3.5V4.5C16 4.78 16.22 5 16.5 5H25.59L13.65 16.94C13.45 17.13 13.45 17.45 13.65 17.65L14.35 18.35C14.55 18.55 14.87 18.55 15.06 18.35L27 6.41V15.5C27 15.78 27.22 16 27.5 16H28.5C28.78 16 29 15.78 29 15.5V4C29 3.45 28.55 3 28 3Z"
                    fill="#94D4FF"
                  />
                </svg>
              </span>
            </div>
            <div className=" flex items-center  gap-2">
              <span
                style={{ background: "rgba(255, 255, 255, 0.10)" }}
                className="  inline-flex gap-2 items-center px-4 rounded-md py-2 "
              >
                ISO 14000:2015
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 28C4.89798 28 4 27.102 4 26V10C4 8.89798 4.89798 8 6 8H22C23.102 8 24 8.89798 24 10V26C24 27.102 23.102 28 22 28H6Z"
                    stroke="#60A1E2"
                    stroke-width="2"
                  />
                  <path
                    d="M28 3H16.5C16.22 3 16 3.22 16 3.5V4.5C16 4.78 16.22 5 16.5 5H25.59L13.65 16.94C13.45 17.13 13.45 17.45 13.65 17.65L14.35 18.35C14.55 18.55 14.87 18.55 15.06 18.35L27 6.41V15.5C27 15.78 27.22 16 27.5 16H28.5C28.78 16 29 15.78 29 15.5V4C29 3.45 28.55 3 28 3Z"
                    fill="#94D4FF"
                  />
                </svg>
              </span>
              <span
                style={{ background: "rgba(255, 255, 255, 0.10)" }}
                className="  inline-flex gap-2 items-center px-4 rounded-md py-2 "
              >
                ISO 45001:2018{" "}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 28C4.89798 28 4 27.102 4 26V10C4 8.89798 4.89798 8 6 8H22C23.102 8 24 8.89798 24 10V26C24 27.102 23.102 28 22 28H6Z"
                    stroke="#60A1E2"
                    stroke-width="2"
                  />
                  <path
                    d="M28 3H16.5C16.22 3 16 3.22 16 3.5V4.5C16 4.78 16.22 5 16.5 5H25.59L13.65 16.94C13.45 17.13 13.45 17.45 13.65 17.65L14.35 18.35C14.55 18.55 14.87 18.55 15.06 18.35L27 6.41V15.5C27 15.78 27.22 16 27.5 16H28.5C28.78 16 29 15.78 29 15.5V4C29 3.45 28.55 3 28 3Z"
                    fill="#94D4FF"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center my-32  gap-4 justify-center text-center  ">
          <svg
            width="377"
            height="104"
            viewBox="0 0 377 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.748 25.3282L43.6972 0.0621262H42.5019L42.5564 24.8113C42.5601 26.8769 41.8328 28.8503 40.5622 30.2336L24.8421 46.2131L24.8252 37.5937V37.543C24.8854 36.2067 25.3891 34.9512 26.2292 34.0772L38.258 21.9808C39.3011 20.8926 39.9006 19.2931 39.8837 17.6128L39.7973 8.38453L39.7785 0.000106812L38.6076 0.0038681L38.6264 7.97668C38.6301 9.59116 38.0625 11.1286 37.072 12.2093L24.5865 24.9541C24.3911 25.1665 24.2182 25.4015 24.0622 25.6552C23.9043 25.4015 23.7295 25.1665 23.5321 24.9579L10.8926 12.26C9.90018 11.1869 9.32506 9.64942 9.32506 8.03306L9.30814 0.0621262L8.13722 0.0658951L8.15601 8.45031L8.10526 17.6786C8.09399 19.357 8.69731 20.9508 9.74794 22.0334L21.8237 34.0828C22.6676 34.9587 23.1732 36.2067 23.2427 37.5467V37.5975L23.2615 46.2168L7.47188 30.2919C6.19758 28.918 5.46834 26.9501 5.46458 24.8884L5.41383 0.139191H4.22223L4.27298 25.4071L4.2072 37.0054C4.19592 39.0823 4.93644 41.0445 6.23329 42.3846L21.4008 57.522C22.4777 58.6271 23.1412 60.2416 23.2239 61.9651L23.2784 102.361L24.0584 103.239L24.938 102.361L24.8628 62.029V61.9538C24.9455 60.2416 25.6033 58.6159 26.6728 57.507L41.8516 42.3112C43.1446 40.9674 43.8777 38.9996 43.857 36.9265L43.748 25.3282ZM19.2807 65.5155L3.4742 49.568C2.1999 48.1884 1.4669 46.2206 1.46314 44.1532L1.37104 0.144829H0.175684V56.2759C0.166286 58.3527 0.93124 60.313 2.23185 61.6531L17.3956 76.7887C18.5646 77.9915 19.2375 79.747 19.2413 81.602L19.2732 98.3878L20.9497 100.049L20.9629 70.0845C20.9666 68.3366 20.3558 66.6714 19.2807 65.5155ZM47.9411 0.0508499L46.5465 0.0546112L46.6349 44.0629C46.6367 46.1304 45.915 48.102 44.6445 49.4853L28.8981 65.4967C27.8268 66.6563 27.2235 68.3253 27.2347 70.0732V100.064L29.0353 98.3728V98.3371L29.0033 81.5814C28.9996 79.7282 29.6649 77.969 30.8283 76.7624L45.9338 61.5667C47.2269 60.2191 47.9562 58.2587 47.9411 56.1819V0.0508499Z"
              fill="#94D4FF"
            />
            <path
              d="M98.5618 25.3282L98.5111 0.0621262H97.3157L97.3702 24.8113C97.374 26.8769 96.6466 28.8503 95.3761 30.2336L79.656 46.2131L79.6391 37.5937V37.543C79.6992 36.2067 80.2029 34.9512 81.0431 34.0772L93.0718 21.9808C94.1149 20.8926 94.7145 19.2931 94.6976 17.6128L94.6111 8.38453L94.5923 0.000106812L93.4214 0.0038681L93.4402 7.97668C93.444 9.59116 92.8763 11.1286 91.8859 12.2093L79.4004 24.9541C79.2049 25.1665 79.032 25.4015 78.876 25.6552C78.7181 25.4015 78.5433 25.1665 78.346 24.9579L65.7064 12.26C64.714 11.1869 64.1389 9.64942 64.1389 8.03306L64.122 0.0621262L62.9511 0.0658951L62.9699 8.45031L62.9191 17.6786C62.9078 19.357 63.5111 20.9508 64.5618 22.0334L76.6375 34.0828C77.4814 34.9587 77.987 36.2067 78.0565 37.5467V37.5975L78.0753 46.2168L62.2857 30.2919C61.0114 28.918 60.2822 26.9501 60.2784 24.8884L60.2277 0.139191H59.0361L59.0868 25.4071L59.021 37.0054C59.0098 39.0823 59.7503 41.0445 61.0471 42.3846L76.2146 57.522C77.2916 58.6271 77.9551 60.2416 78.0377 61.9651L78.0923 102.361L78.8722 103.239L79.7518 102.361L79.6767 62.029V61.9538C79.7594 60.2416 80.4172 58.6159 81.4866 57.507L96.6654 42.3112C97.9585 40.9674 98.6915 38.9996 98.6708 36.9265L98.5618 25.3282ZM74.0946 65.5155L58.288 49.568C57.0137 48.1884 56.2807 46.2206 56.277 44.1532L56.1849 0.144829H54.9895V56.2759C54.9801 58.3527 55.7451 60.313 57.0457 61.6531L72.2094 76.7887C73.3785 77.9915 74.0513 79.747 74.0551 81.602L74.0871 98.3878L75.7636 100.049L75.7767 70.0845C75.7805 68.3366 75.1696 66.6714 74.0946 65.5155ZM102.755 0.0508499L101.36 0.0546112L101.449 44.0629C101.451 46.1304 100.729 48.102 99.4583 49.4853L83.7119 65.4967C82.6406 66.6563 82.0373 68.3253 82.0486 70.0732V100.064L83.8491 98.3728V98.3371L83.8172 81.5814C83.8134 79.7282 84.4788 77.969 85.6422 76.7624L100.748 61.5667C102.041 60.2191 102.77 58.2587 102.755 56.1819V0.0508499Z"
              fill="#66B5F5"
            />
            <path
              d="M153.376 25.3282L153.325 0.0621262H152.13L152.184 24.8113C152.188 26.8769 151.46 28.8503 150.19 30.2336L134.47 46.2131L134.453 37.5937V37.543C134.513 36.2067 135.017 34.9512 135.857 34.0772L147.886 21.9808C148.929 20.8926 149.528 19.2931 149.511 17.6128L149.425 8.38453L149.406 0.000106812L148.235 0.0038681L148.254 7.97668C148.258 9.59116 147.69 11.1286 146.7 12.2093L134.214 24.9541C134.019 25.1665 133.846 25.4015 133.69 25.6552C133.532 25.4015 133.357 25.1665 133.16 24.9579L120.52 12.26C119.528 11.1869 118.953 9.64942 118.953 8.03306L118.936 0.0621262L117.765 0.0658951L117.784 8.45031L117.733 17.6786C117.722 19.357 118.325 20.9508 119.376 22.0334L131.451 34.0828C132.295 34.9587 132.801 36.2067 132.87 37.5467V37.5975L132.889 46.2168L117.1 30.2919C115.825 28.918 115.096 26.9501 115.092 24.8884L115.042 0.139191H113.85L113.901 25.4071L113.835 37.0054C113.824 39.0823 114.564 41.0445 115.861 42.3846L131.028 57.522C132.105 58.6271 132.769 60.2416 132.852 61.9651L132.906 102.361L133.686 103.239L134.566 102.361L134.491 62.029V61.9538C134.573 60.2416 135.231 58.6159 136.3 57.507L151.479 42.3112C152.772 40.9674 153.505 38.9996 153.485 36.9265L153.376 25.3282ZM128.908 65.5155L113.102 49.568C111.828 48.1884 111.095 46.2206 111.091 44.1532L110.999 0.144829H109.803V56.2759C109.794 58.3527 110.559 60.313 111.86 61.6531L127.023 76.7887C128.192 77.9915 128.865 79.747 128.869 81.602L128.901 98.3878L130.577 100.049L130.591 70.0845C130.594 68.3366 129.983 66.6714 128.908 65.5155ZM157.569 0.0508499L156.174 0.0546112L156.263 44.0629C156.264 46.1304 155.543 48.102 154.272 49.4853L138.526 65.4967C137.454 66.6563 136.851 68.3253 136.862 70.0732V100.064L138.663 98.3728V98.3371L138.631 81.5814C138.627 79.7282 139.293 77.969 140.456 76.7624L155.562 61.5667C156.855 60.2191 157.584 58.2587 157.569 56.1819V0.0508499Z"
              fill="#61A1E3"
            />
            <path
              d="M208.19 25.3282L208.139 0.0621262H206.943L206.998 24.8113C207.002 26.8769 206.274 28.8503 205.004 30.2336L189.284 46.2131L189.267 37.5937V37.543C189.327 36.2067 189.831 34.9512 190.671 34.0772L202.7 21.9808C203.743 20.8926 204.342 19.2931 204.325 17.6128L204.239 8.38453L204.22 0.000106812L203.049 0.0038681L203.068 7.97668C203.072 9.59116 202.504 11.1286 201.514 12.2093L189.028 24.9541C188.833 25.1665 188.66 25.4015 188.504 25.6552C188.346 25.4015 188.171 25.1665 187.974 24.9579L175.334 12.26C174.342 11.1869 173.767 9.64942 173.767 8.03306L173.75 0.0621262L172.579 0.0658951L172.598 8.45031L172.547 17.6786C172.536 19.357 173.139 20.9508 174.19 22.0334L186.265 34.0828C187.109 34.9587 187.615 36.2067 187.684 37.5467V37.5975L187.703 46.2168L171.913 30.2919C170.639 28.918 169.91 26.9501 169.906 24.8884L169.855 0.139191H168.664L168.715 25.4071L168.649 37.0054C168.637 39.0823 169.378 41.0445 170.675 42.3846L185.842 57.522C186.919 58.6271 187.583 60.2416 187.665 61.9651L187.72 102.361L188.5 103.239L189.38 102.361L189.304 62.029V61.9538C189.387 60.2416 190.045 58.6159 191.114 57.507L206.293 42.3112C207.586 40.9674 208.319 38.9996 208.299 36.9265L208.19 25.3282ZM183.722 65.5155L167.916 49.568C166.641 48.1884 165.908 46.2206 165.905 44.1532L165.813 0.144829H164.617V56.2759C164.608 58.3527 165.373 60.313 166.673 61.6531L181.837 76.7887C183.006 77.9915 183.679 79.747 183.683 81.602L183.715 98.3878L185.391 100.049L185.404 70.0845C185.408 68.3366 184.797 66.6714 183.722 65.5155ZM212.383 0.0508499L210.988 0.0546112L211.076 44.0629C211.078 46.1304 210.357 48.102 209.086 49.4853L193.34 65.4967C192.268 66.6563 191.665 68.3253 191.676 70.0732V100.064L193.477 98.3728V98.3371L193.445 81.5814C193.441 79.7282 194.106 77.969 195.27 76.7624L210.375 61.5667C211.668 60.2191 212.398 58.2587 212.383 56.1819V0.0508499Z"
              fill="#3D82D4"
            />
            <path
              d="M263.003 25.3282L262.953 0.0621262H261.757L261.812 24.8113C261.816 26.8769 261.088 28.8503 259.818 30.2336L244.098 46.2131L244.081 37.5937V37.543C244.141 36.2067 244.644 34.9512 245.485 34.0772L257.513 21.9808C258.556 20.8926 259.156 19.2931 259.139 17.6128L259.053 8.38453L259.034 0.000106812L257.863 0.0038681L257.882 7.97668C257.886 9.59116 257.318 11.1286 256.327 12.2093L243.842 24.9541C243.646 25.1665 243.474 25.4015 243.318 25.6552C243.16 25.4015 242.985 25.1665 242.788 24.9579L230.148 12.26C229.156 11.1869 228.58 9.64942 228.58 8.03306L228.564 0.0621262L227.393 0.0658951L227.411 8.45031L227.361 17.6786C227.349 19.357 227.953 20.9508 229.003 22.0334L241.079 34.0828C241.923 34.9587 242.429 36.2067 242.498 37.5467V37.5975L242.517 46.2168L226.727 30.2919C225.453 28.918 224.724 26.9501 224.72 24.8884L224.669 0.139191H223.478L223.528 25.4071L223.463 37.0054C223.451 39.0823 224.192 41.0445 225.489 42.3846L240.656 57.522C241.733 58.6271 242.397 60.2416 242.479 61.9651L242.534 102.361L243.314 103.239L244.193 102.361L244.118 62.029V61.9538C244.201 60.2416 244.859 58.6159 245.928 57.507L261.107 42.3112C262.4 40.9674 263.133 38.9996 263.112 36.9265L263.003 25.3282ZM238.536 65.5155L222.73 49.568C221.455 48.1884 220.722 46.2206 220.719 44.1532L220.626 0.144829H219.431V56.2759C219.422 58.3527 220.187 60.313 221.487 61.6531L236.651 76.7887C237.82 77.9915 238.493 79.747 238.497 81.602L238.529 98.3878L240.205 100.049L240.218 70.0845C240.222 68.3366 239.611 66.6714 238.536 65.5155ZM267.197 0.0508499L265.802 0.0546112L265.89 44.0629C265.892 46.1304 265.17 48.102 263.9 49.4853L248.153 65.4967C247.082 66.6563 246.479 68.3253 246.49 70.0732V100.064L248.291 98.3728V98.3371L248.259 81.5814C248.255 79.7282 248.92 77.969 250.084 76.7624L265.189 61.5667C266.482 60.2191 267.212 58.2587 267.197 56.1819V0.0508499Z"
              fill="#2663BF"
            />
            <path
              d="M317.817 25.3282L317.766 0.0621262H316.571L316.626 24.8113C316.629 26.8769 315.902 28.8503 314.632 30.2336L298.911 46.2131L298.895 37.5937V37.543C298.955 36.2067 299.458 34.9512 300.298 34.0772L312.327 21.9808C313.37 20.8926 313.97 19.2931 313.953 17.6128L313.867 8.38453L313.848 0.000106812L312.677 0.0038681L312.696 7.97668C312.699 9.59116 312.132 11.1286 311.141 12.2093L298.656 24.9541C298.46 25.1665 298.287 25.4015 298.131 25.6552C297.974 25.4015 297.799 25.1665 297.601 24.9579L284.962 12.26C283.969 11.1869 283.394 9.64942 283.394 8.03306L283.377 0.0621262L282.206 0.0658951L282.225 8.45031L282.175 17.6786C282.163 19.357 282.767 20.9508 283.817 22.0334L295.893 34.0828C296.737 34.9587 297.242 36.2067 297.312 37.5467V37.5975L297.331 46.2168L281.541 30.2919C280.267 28.918 279.538 26.9501 279.534 24.8884L279.483 0.139191H278.292L278.342 25.4071L278.276 37.0054C278.265 39.0823 279.006 41.0445 280.303 42.3846L295.47 57.522C296.547 58.6271 297.21 60.2416 297.293 61.9651L297.348 102.361L298.128 103.239L299.007 102.361L298.932 62.029V61.9538C299.015 60.2416 299.673 58.6159 300.742 57.507L315.921 42.3112C317.214 40.9674 317.947 38.9996 317.926 36.9265L317.817 25.3282ZM293.35 65.5155L277.543 49.568C276.269 48.1884 275.536 46.2206 275.532 44.1532L275.44 0.144829H274.245V56.2759C274.236 58.3527 275.001 60.313 276.301 61.6531L291.465 76.7887C292.634 77.9915 293.307 79.747 293.311 81.602L293.342 98.3878L295.019 100.049L295.032 70.0845C295.036 68.3366 294.425 66.6714 293.35 65.5155ZM322.01 0.0508499L320.616 0.0546112L320.704 44.0629C320.706 46.1304 319.984 48.102 318.714 49.4853L302.967 65.4967C301.896 66.6563 301.293 68.3253 301.304 70.0732V100.064L303.105 98.3728V98.3371L303.073 81.5814C303.069 79.7282 303.734 77.969 304.898 76.7624L320.003 61.5667C321.296 60.2191 322.025 58.2587 322.01 56.1819V0.0508499Z"
              fill="#0A45AB"
            />
            <path
              d="M372.631 25.3282L372.58 0.0621262H371.385L371.439 24.8113C371.443 26.8769 370.716 28.8503 369.445 30.2336L353.725 46.2131L353.708 37.5937V37.543C353.768 36.2067 354.272 34.9512 355.112 34.0772L367.141 21.9808C368.184 20.8926 368.784 19.2931 368.767 17.6128L368.68 8.38453L368.662 0.000106812L367.491 0.0038681L367.509 7.97668C367.513 9.59116 366.946 11.1286 365.955 12.2093L353.47 24.9541C353.274 25.1665 353.101 25.4015 352.945 25.6552C352.787 25.4015 352.613 25.1665 352.415 24.9579L339.776 12.26C338.783 11.1869 338.208 9.64942 338.208 8.03306L338.191 0.0621262L337.02 0.0658951L337.039 8.45031L336.988 17.6786C336.977 19.357 337.58 20.9508 338.631 22.0334L350.707 34.0828C351.551 34.9587 352.056 36.2067 352.126 37.5467V37.5975L352.145 46.2168L336.355 30.2919C335.081 28.918 334.351 26.9501 334.348 24.8884L334.297 0.139191H333.105L333.156 25.4071L333.09 37.0054C333.079 39.0823 333.82 41.0445 335.116 42.3846L350.284 57.522C351.361 58.6271 352.024 60.2416 352.107 61.9651L352.162 102.361L352.942 103.239L353.821 102.361L353.746 62.029V61.9538C353.829 60.2416 354.486 58.6159 355.556 57.507L370.735 42.3112C372.028 40.9674 372.761 38.9996 372.74 36.9265L372.631 25.3282ZM348.164 65.5155L332.357 49.568C331.083 48.1884 330.35 46.2206 330.346 44.1532L330.254 0.144829H329.059V56.2759C329.049 58.3527 329.814 60.313 331.115 61.6531L346.279 76.7887C347.448 77.9915 348.121 79.747 348.124 81.602L348.156 98.3878L349.833 100.049L349.846 70.0845C349.85 68.3366 349.239 66.6714 348.164 65.5155ZM376.824 0.0508499L375.43 0.0546112L375.518 44.0629C375.52 46.1304 374.798 48.102 373.528 49.4853L357.781 65.4967C356.71 66.6563 356.107 68.3253 356.118 70.0732V100.064L357.918 98.3728V98.3371L357.886 81.5814C357.883 79.7282 358.548 77.969 359.711 76.7624L374.817 61.5667C376.11 60.2191 376.839 58.2587 376.824 56.1819V0.0508499Z"
              fill="#002B87"
            />
          </svg>
          <p className=" text-white text-3xl w-3/4 ">
            Lorem ipsum dolor sit amet consectetur. Iaculis et eget nulla in at
            vulputate pellentesque a vel.
          </p>
        </div>
      </section>

      <section className=" my-10 flex items-center flex-col md:flex-row  gap-4  ">
        <div className=" flex flex-col px-5 w-1/2 gap-5 ">
          <h1 className=" text-5xl  text-[#0F0D0F]">Get in Touch</h1>
          <p className=" text-[#0F0D0F]">
            Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
            parturient phasellus aliquam. Gravida amet leo quis nam nibh.
          </p>
          <div className=" flex  items-center gap-4">
            <a
              className="   inline-flex items-center gap-1 "
              href=":tellto+966 58 168 0000"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.1817 35.4877C23.1309 35.4878 21.767 35.155 20.0005 34.2447C17.547 32.9803 14.7286 30.8167 12.0644 28.1525C9.40016 25.4884 7.23665 22.67 5.97227 20.2166C4.00712 16.4032 4.73384 14.4634 5.68969 13.5076L9.34626 9.85113C9.54774 9.63496 9.84165 9.54081 10.1621 9.5916C10.8159 9.69542 12.1153 10.6592 13.0902 11.4493C14.0652 12.2395 15.277 13.3112 15.514 13.9293C15.6381 14.2532 15.5938 14.5814 15.3924 14.8299C15.3752 14.851 15.3571 14.8712 15.3379 14.8904L12.4196 17.8087C12.5876 18.4693 14.0109 20.5459 16.8411 23.3761C19.6713 26.2062 21.748 27.6295 22.4085 27.7975L25.3267 24.8793C25.3459 24.86 25.3661 24.8419 25.3873 24.8248C25.509 24.726 25.8446 24.5166 26.33 24.7027C27.0351 24.9731 28.1924 26.3114 28.8195 27.085C29.4466 27.8588 30.5163 29.2681 30.6347 30.0139C30.706 30.4632 30.5048 30.7375 30.3718 30.8651L26.7095 34.5275C26.1966 35.0406 25.3996 35.4877 24.1817 35.4877ZM10.1547 11.2524L6.79462 14.6124C5.67344 15.7335 6.66844 18.1564 7.36126 19.5007C8.5536 21.8144 10.6163 24.4946 13.1693 27.0475C15.7224 29.6007 18.4026 31.6633 20.7163 32.8558C22.0608 33.5487 24.484 34.5436 25.6049 33.4225L28.9909 30.0364C28.7945 29.6649 28.3317 28.9645 27.6058 28.0688C26.9339 27.2398 26.3789 26.6659 26.0441 26.3717L23.3764 29.0393C22.5493 29.8664 21.1499 29.0421 19.8899 28.1265C18.6924 27.2563 17.2171 25.9614 15.7359 24.4801C14.2549 22.9991 12.9602 21.524 12.0902 20.3267C11.175 19.067 10.3508 17.6677 11.1777 16.8407L13.8184 14.2C13.0718 13.3926 11.0206 11.7373 10.1547 11.2524Z"
                  fill="#0B44AA"
                />
                <path
                  d="M30.6349 30.0139C30.5165 29.268 29.4468 27.8587 28.8197 27.085C28.1926 26.3114 27.0353 24.973 26.3302 24.7027C25.8448 24.5165 25.5091 24.726 25.3875 24.8248C25.3664 24.8418 25.3461 24.86 25.3269 24.8792L22.4087 27.7975C21.7482 27.6295 19.6715 26.2062 16.8413 23.3761C14.0112 20.5459 12.5879 18.4692 12.4198 17.8087L15.3381 14.8904C15.3573 14.8712 15.3755 14.851 15.3926 14.8298C15.594 14.5813 15.6383 14.2531 15.5142 13.9293C15.2772 13.3112 14.0653 12.2395 13.0905 11.4493C12.1155 10.6591 10.8162 9.69539 10.1623 9.59156C9.84179 9.54086 9.54796 9.635 9.34647 9.85109L5.68991 13.5076C4.73413 14.4634 4.00733 16.4032 5.97249 20.2166C7.23686 22.67 9.40038 25.4884 12.0646 28.1525C14.7288 30.8166 17.5473 32.9804 20.0007 34.2447C21.7671 35.155 23.1311 35.4878 24.1819 35.4877C25.3998 35.4877 26.1969 35.0405 26.7099 34.5274L30.3722 30.865C30.505 30.7374 30.7062 30.4631 30.6349 30.0139ZM25.6048 33.4226C24.4839 34.5437 22.0608 33.5487 20.7163 32.8559C18.4026 31.6634 15.7223 29.6007 13.1693 27.0476C10.6162 24.4946 8.55358 21.8145 7.36124 19.5008C6.66843 18.1564 5.67343 15.7335 6.7946 14.6124L10.1547 11.2524C11.0205 11.7373 13.0718 13.3927 13.8184 14.2002L11.1777 16.8409C10.3508 17.6679 11.175 19.0672 12.0902 20.3269C12.9601 21.5242 14.2548 22.9993 15.7359 24.4803C17.2171 25.9616 18.6924 27.2565 19.8899 28.1267C21.1498 29.0423 22.5493 29.8666 23.3764 29.0395L26.0441 26.3719C26.3789 26.6661 26.934 27.2399 27.6058 28.069C28.3317 28.9647 28.7946 29.6651 28.9909 30.0366L25.6048 33.4226ZM29.1562 21.2457C28.7248 21.2457 28.3749 20.8959 28.3749 20.4645C28.3749 15.4705 24.3119 11.4076 19.318 11.4076C18.8866 11.4076 18.5367 11.0578 18.5367 10.6263C18.5367 10.1948 18.8866 9.84508 19.318 9.84508C25.1735 9.84508 29.9374 14.6089 29.9374 20.4645C29.9374 20.896 29.5876 21.2457 29.1562 21.2457Z"
                  fill="#0B44AA"
                />
                <path
                  d="M24.2371 22.1763C23.8057 22.1763 23.4559 21.8264 23.4559 21.3951C23.4559 18.6004 21.1822 16.3268 18.3876 16.3268C17.9562 16.3268 17.6063 15.9771 17.6063 15.5456C17.6063 15.1141 17.9562 14.7643 18.3876 14.7643C22.0438 14.7643 25.0184 17.7388 25.0184 21.3951C25.0184 21.8265 24.6686 22.1763 24.2371 22.1763ZM34.4893 21.3231C34.0579 21.3231 33.708 20.9734 33.708 20.5419C33.708 12.5647 27.2181 6.07471 19.2408 6.07471C18.8094 6.07471 18.4595 5.72494 18.4595 5.29346C18.4595 4.86197 18.8094 4.51221 19.2408 4.51221C28.0796 4.51221 35.2705 11.7031 35.2705 20.5419C35.2705 20.9734 34.9207 21.3231 34.4893 21.3231Z"
                  fill="#0B44AA"
                />
              </svg>
              +966 58 168 0000
            </a>
            <a
              className="   inline-flex items-center gap-1 "
              href="mailto:Customercare@duroub.com"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.3096 34.2199L27.3103 34.2195C27.8002 33.9665 27.991 33.3616 27.7351 32.8725C27.4782 32.3814 26.8753 32.19 26.388 32.4462L26.3868 32.4469C23.6125 33.8866 20.4791 34.3356 17.3244 33.7508L17.3242 33.7507C11.6415 32.693 7.05921 27.9664 6.17296 22.25L27.3096 34.2199ZM27.3096 34.2199C25.0405 35.4012 22.5634 36.0016 20.0167 36.0016C19.0058 36.0016 17.9844 35.9064 16.9591 35.7159C10.4619 34.5053 5.21246 29.0919 4.19871 22.555C3.42869 17.5901 4.93728 12.6693 8.33556 9.04944C11.7339 5.43122 16.5131 3.62741 21.5026 4.06895C28.9123 4.74553 34.9226 10.5504 35.8671 17.9057L35.8634 17.9069L35.8866 18.1086C36.2314 21.0966 35.7486 24.0931 34.4904 26.772L34.4902 26.7724C33.7653 28.3229 32.1335 29.335 30.33 29.335C28.0795 29.335 26.1965 27.7342 25.7599 25.6113L25.6678 25.1634L25.3404 25.4827C23.9579 26.8313 22.0763 27.6683 19.9983 27.6683C15.7714 27.6683 12.3317 24.2286 12.3317 20.0016C12.3317 15.7747 15.7714 12.335 19.9983 12.335C22.0303 12.335 23.8683 13.1426 25.2434 14.4401L25.665 14.8379V14.2583V13.335C25.665 12.783 26.1131 12.335 26.665 12.335C27.2169 12.335 27.665 12.783 27.665 13.335V24.67C27.665 26.138 28.8585 27.3313 30.3244 27.335H30.325H30.33C31.3456 27.335 32.2755 26.7904 32.6829 25.9229L32.683 25.9228C33.7831 23.5783 34.2036 20.9548 33.9017 18.3363L33.9017 18.3363M27.3096 34.2199L33.9017 18.3363M33.9017 18.3363C33.1614 11.9235 27.7538 6.65013 21.3178 6.06267L33.9017 18.3363ZM9.79108 10.4205C6.81591 13.5891 5.498 17.9017 6.17295 22.2499L21.3177 6.06266C16.9901 5.66572 12.7659 7.25221 9.79108 10.4205ZM14.3333 20C14.3333 23.1247 16.8753 25.6666 20 25.6666C23.1247 25.6666 25.6667 23.1247 25.6667 20C25.6667 16.8752 23.1247 14.3333 20 14.3333C16.8753 14.3333 14.3333 16.8752 14.3333 20Z"
                  fill="#0B44AA"
                  stroke="white"
                  stroke-width="0.5"
                />
              </svg>
              Customercare@duroub.com{" "}
            </a>
          </div>
          <div className=" flex  items-center gap-4">
            <a className="   inline-flex items-center gap-1 ">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 39.9219C19.8133 39.9219 19.6266 39.8552 19.478 39.722C19.4386 39.6866 15.4879 36.1274 11.5927 31.5552C6.285 25.3246 3.59375 20.2541 3.59375 16.4844C3.59375 7.43797 10.9536 0.078125 20 0.078125C29.0464 0.078125 36.4062 7.43797 36.4062 16.4844C36.4062 20.2541 33.715 25.3246 28.4072 31.5552C24.5121 36.1274 20.5613 39.6866 20.5219 39.722C20.3734 39.8552 20.1867 39.9219 20 39.9219ZM20 1.64062C11.8151 1.64062 5.15625 8.29953 5.15625 16.4844C5.15625 19.8246 7.79328 24.6856 12.7822 30.5419C15.7841 34.0656 18.8134 36.9716 19.9999 38.0786C21.1884 36.9696 24.2258 34.0557 27.2288 30.5289C32.2105 24.6785 34.8438 19.822 34.8438 16.4844C34.8438 8.29953 28.1849 1.64062 20 1.64062Z"
                  fill="#0B44AA"
                />
                <path
                  d="M20 27.4219C13.9691 27.4219 9.0625 22.5153 9.0625 16.4844C9.0625 10.4534 13.9691 5.54688 20 5.54688C26.0309 5.54688 30.9375 10.4534 30.9375 16.4844C30.9375 22.5153 26.0309 27.4219 20 27.4219ZM20 7.10938C14.8306 7.10938 10.625 11.3149 10.625 16.4844C10.625 21.6537 14.8306 25.8594 20 25.8594C25.1694 25.8594 29.375 21.6537 29.375 16.4844C29.375 11.3149 25.1694 7.10938 20 7.10938Z"
                  fill="#0B44AA"
                />
                <path
                  d="M22.7344 23.5156H20.3906C16.5136 23.5156 13.3594 20.3614 13.3594 16.4844C13.3594 12.6073 16.5136 9.45312 20.3906 9.45312C23.8369 9.45312 26.6406 12.2569 26.6406 15.7031C26.6406 16.5647 25.9397 17.2656 25.0781 17.2656H23.125C22.6936 17.2656 22.3438 16.9159 22.3438 16.4844C22.3438 16.0529 22.6936 15.7031 23.125 15.7031H25.0781C25.0781 13.1184 22.9753 11.0156 20.3906 11.0156C17.3752 11.0156 14.9219 13.4689 14.9219 16.4844C14.9219 19.4998 17.3752 21.9531 20.3906 21.9531H22.7344C23.1658 21.9531 23.5156 22.303 23.5156 22.7344C23.5156 23.1658 23.1658 23.5156 22.7344 23.5156Z"
                  fill="#0B44AA"
                />
              </svg>
              Business park, near to Jamjoom center, Al Hamrah dist. P.O. box:
              8960, KSA. Jeddah 21492{" "}
            </a>
          </div>
        </div>
        <form className=" w-1/2 flex flex-col justify-center items-center gap-5 bg-[#F2F4F9] shadow-md rounded-md">
          <input
            type="text"
            style={{ borderBottomColor: "rgba(0, 43, 135, 0.5)" }}
            className="  px-4  mt-5 pb-5 bg-transparent  w-4/5 border-b  focus:outline-none placeholder:text-[#002B87B2]"
            placeholder="Full name "
          />
          <input
            type="email"
            style={{ borderBottomColor: "rgba(0, 43, 135, 0.5)" }}
            className="  px-4   pb-5 bg-transparent  w-4/5 border-b  focus:outline-none placeholder:text-[#002B87B2]"
            placeholder="Email "
          />
          <input
            type="text"
            style={{ borderBottomColor: "rgba(0, 43, 135, 0.5)" }}
            className="  px-4   pb-5 bg-transparent  w-4/5 border-b  focus:outline-none placeholder:text-[#002B87B2]"
            placeholder="Subject "
          />
          <textarea
            style={{ borderBottomColor: "rgba(0, 43, 135, 0.5)" }}
            className=" placeholder:text-[#002B87B2] w-4/5 bg-transparent px-4 pb-5 border-b focus:outline-none"
            placeholder="Your message ..."
          ></textarea>
          <div className=" flex w-4/5 justify-start">

          <button className=" justify-start  inline-flex bg-transparent border-none mb-5 items-center gap-2 text-[#0F0D0F] font-[600] ">
            Send
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
          </button>
                </div>
        </form>
      </section>
    </main>
  );
}
