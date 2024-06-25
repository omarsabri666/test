"use client"
import Image from "next/image";
import Logo from "/public/Logo.svg";
import { AnimatePresence, motion } from "framer-motion";


function Footer() {
  return (
    <div
      style={{
        background: "linear-gradient(358deg, #002B87 1.81%, #0B44AA 98.86%)",
      }}
      className=" flex flex-col mt-10  gap-5 "
    >
      <div className=" flex  justify-between px-20 flex-col md:flex-row  items-center py-20 ">
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
          className=" md:w-2/5"
        >
          <Image src={Logo} width={200} height={50} alt=" Logo" />
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
          className=" md:w-3/5 text-center md:text-start space-y-5"
        >
          <h4 className=" text-[#94D4FF]">Company</h4>
          <ul className=" flex-col md:flex-row  text-sm text-white flex items-center gap-5 ">
            <li>
              <a href="#About">About Us</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Careers">Careers</a>
            </li>
            <li>
              <a href="#contactus">contact us</a>
            </li>
            <li>
              <a href="#terms">terms & conditions</a>
            </li>
            <li>
              <a href="#privacy">privacy policy</a>
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="flex  text-center md:text-start  justify-between px-20 gap-5 md:gap-0  flex-col md:flex-row items-center ">
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
          className=" md:w-2/5"
        >
          <p className=" text-gray-300  md:w-3/4 text-sm ">
            Lorem ipsum dolor sit amet consectetur. Quis suspendisse congue id
            ac mi pretium.
          </p>
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
          className=" md:w-3/5 flex items-center gap-4 "
        >
          <h4 className=" mr-2 text-[#94D4FF]">Follow Us</h4>
          <a href="#">
            <svg
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.234413 8.24077H1.82758V14.7995C1.82758 14.929 1.9325 15.0339 2.06199 15.0339H4.76323C4.89273 15.0339 4.99766 14.929 4.99766 14.7995V8.27167H6.82912C6.9482 8.27167 7.0484 8.18231 7.06199 8.06402L7.34015 5.64942C7.34779 5.58298 7.32674 5.51646 7.2823 5.46662C7.2378 5.41673 7.17413 5.38818 7.10732 5.38818H4.99775V3.87459C4.99775 3.41832 5.24342 3.18695 5.72801 3.18695C5.79707 3.18695 7.10732 3.18695 7.10732 3.18695C7.23682 3.18695 7.34174 3.08198 7.34174 2.95253V0.736153C7.34174 0.60666 7.23682 0.501735 7.10732 0.501735H5.20642C5.19302 0.501078 5.16325 0.5 5.11936 0.5C4.78954 0.5 3.64309 0.564746 2.73748 1.39787C1.73409 2.3211 1.87357 3.42652 1.9069 3.61818V5.38814H0.234413C0.104919 5.38814 0 5.49306 0 5.62255V8.00631C0 8.1358 0.104919 8.24077 0.234413 8.24077Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_79_174)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.96098 8.27379L0.341736 1.125H4.79258L8.26129 5.54344L11.9671 1.14489H14.4184L9.4465 7.05316L15.3417 14.5625H10.9042L7.14827 9.78423L3.13846 14.5493H0.673888L5.96098 8.27379ZM11.551 13.238L3.07084 2.44954H4.14527L12.6147 13.238H11.551Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_79_174">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(0.341736 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="#">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5857 4.02787C5.53054 4.02787 3.87284 5.68557 3.87284 7.74073C3.87284 9.79589 5.53054 11.4536 7.5857 11.4536C9.64086 11.4536 11.2986 9.79589 11.2986 7.74073C11.2986 5.68557 9.64086 4.02787 7.5857 4.02787ZM7.5857 10.1546C6.2576 10.1546 5.17185 9.07206 5.17185 7.74073C5.17185 6.4094 6.25437 5.32688 7.5857 5.32688C8.91703 5.32688 9.99955 6.4094 9.99955 7.74073C9.99955 9.07206 8.9138 10.1546 7.5857 10.1546ZM12.3165 3.87599C12.3165 4.35747 11.9287 4.742 11.4504 4.742C10.969 4.742 10.5844 4.35424 10.5844 3.87599C10.5844 3.39775 10.9722 3.00998 11.4504 3.00998C11.9287 3.00998 12.3165 3.39775 12.3165 3.87599ZM14.7755 4.75493C14.7206 3.59486 14.4556 2.56728 13.6058 1.72066C12.7592 0.874033 11.7316 0.609059 10.5715 0.550894C9.37589 0.483035 5.79228 0.483035 4.59667 0.550894C3.43983 0.605828 2.41225 0.870802 1.56239 1.71743C0.712538 2.56405 0.450795 3.59163 0.39263 4.7517C0.324771 5.94731 0.324771 9.53092 0.39263 10.7265C0.447564 11.8866 0.712538 12.9142 1.56239 13.7608C2.41225 14.6074 3.4366 14.8724 4.59667 14.9306C5.79228 14.9984 9.37589 14.9984 10.5715 14.9306C11.7316 14.8756 12.7592 14.6107 13.6058 13.7608C14.4524 12.9142 14.7174 11.8866 14.7755 10.7265C14.8434 9.53092 14.8434 5.95054 14.7755 4.75493ZM13.2309 12.0094C12.9789 12.6427 12.4909 13.1307 11.8544 13.386C10.9011 13.764 8.63913 13.6768 7.5857 13.6768C6.53227 13.6768 4.26707 13.7608 3.31704 13.386C2.68368 13.1339 2.19574 12.646 1.94047 12.0094C1.56239 11.0561 1.64964 8.79416 1.64964 7.74073C1.64964 6.6873 1.56562 4.4221 1.94047 3.47207C2.19251 2.83872 2.68045 2.35078 3.31704 2.0955C4.2703 1.71743 6.53227 1.80467 7.5857 1.80467C8.63913 1.80467 10.9043 1.72066 11.8544 2.0955C12.4877 2.34755 12.9757 2.83549 13.2309 3.47207C13.609 4.42533 13.5218 6.6873 13.5218 7.74073C13.5218 8.79416 13.609 11.0594 13.2309 12.0094Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_79_176)">
                <path
                  d="M15.8264 15.1678V9.62152C15.8264 6.64965 14.2402 5.26684 12.1252 5.26684C10.4184 5.26684 9.65345 6.20574 9.22735 6.86481V5.49418H6.01173C6.05438 6.40215 6.01173 15.1678 6.01173 15.1678H9.22735V9.76543C9.22735 9.47715 9.24798 9.18793 9.33329 8.98168C9.56532 8.40371 10.0945 7.80559 10.9824 7.80559C12.1463 7.80559 12.6113 8.69246 12.6113 9.99277V15.1682L15.8264 15.1678ZM2.62407 4.17371C3.74485 4.17371 4.44376 3.43027 4.44376 2.50168C4.42313 1.55293 3.74532 0.831055 2.64563 0.831055C1.54595 0.831055 0.826416 1.55246 0.826416 2.50168C0.826416 3.43027 1.52438 4.17371 2.60392 4.17371H2.62407ZM4.23188 15.1678V5.49418H1.01673V15.1678H4.23188Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_79_176">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(0.826416 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </motion.div>
      </div>
      <div className=" w-full">
        <svg
          width="auto"
          height="74"
          viewBox="0 0 1920 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2">
            <path
              d="M1564.95 69.6046C1567.26 71.8233 1570.64 73.0939 1574.19 73.0673L1593.72 72.9219H1928.64V70.4433H1594.59C1591.17 70.4433 1587.92 69.2393 1585.64 67.1353L1558.72 40.5579C1556.72 38.7139 1553.85 37.6619 1550.85 37.6779L1531.97 37.7659H-172V41.0886H1531.46C1534.52 41.0886 1537.43 42.1926 1539.41 44.1099L1564.95 69.6046Z"
              fill="white"
            />
            <path
              d="M1564.95 3.4631C1567.26 1.24443 1570.64 -0.0262552 1574.19 0.000411473L1593.72 0.145757H1928.64V2.62443H1594.59C1591.17 2.62443 1587.92 3.82842 1585.64 5.93242L1558.72 32.5057C1556.72 34.3537 1553.85 35.4057 1550.85 35.3911L1531.97 35.3018H-172V31.9791H1531.46C1534.52 31.9791 1537.43 30.8751 1539.41 28.9578L1564.95 3.4631Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <div className="  flex items-center justify-between  flex-col md:flex-row gap-4 md:gap-0  my-10 px-20">
        <motion.p
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
          className=" text-xs text-gray-400"
        >
          Copyright @ 2023 Duroub Logistics. All Rights Reserved
        </motion.p>
        <motion.p
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
          className=" text-xs text-gray-400"
        >
          Developed by Brackets Technology
        </motion.p>
      </div>
    </div>
  );
}

export default Footer;
