"use client"
import Image from "next/image";
import Logo from "../../../public/Logo.svg"
import Lang from "/public/lang.png";
import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from "react";
import { AnimatePresence,motion } from "framer-motion";





function NavBar() {
    const [open, setOpen] = useState(false)
     useEffect(() => {
       if (open) {
         document.body.style.overflowY = "hidden"; // Disable vertical scroll
       } else {
         document.body.style.overflowY = "auto"; // Enable vertical scroll
       }
     }, [toggle]);
    function toggle(){
      setOpen(true)

    }
    function handleClose(){
      setOpen(false)
    }
    return (
      <>
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.1,
          }}
          className=" text-white px-2 md:px-0  relative z-10  "
        >
          <nav className=" flex justify-between   items-center">
            <Image src={Logo} width={200} height={50} alt=" Logo" />
            <ul className=" hidden text-[16px]  md:flex items-center md:mr-10   gap-5">
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
            <Image
              className=" hidden cursor-pointer md:block"
              width={60}
              height={30}
              src={Lang}
            />
            <button className=" block md:hidden" onClick={() => setOpen(true)}>
              <CiMenuBurger size={30} />
            </button>
          </nav>
        </motion.header>
        <AnimatePresence>
          {open && (
            <motion.div
              key="navBarPhone" // Add the key prop
              initial={{ x: "100%" }}
              animate={{ x: toggle ? "0%" : "100%" }}
              transition={{ duration: 0.5 }}
              exit={{ x: "100%" }}
              className=" absolute   z-20  text-center flex flex-col  top-0   bg-[#002B87] h-[101vh]  overscroll-y-none     w-[101vw] "
            >
              <button
                onClick={() => setOpen(false)}
                className=" text-white  text-lg self-end px-4 my-7"
              >
                &#10005;
              </button>
              <ul className=" md:hidden  flex-col flex items-center md:mr-10 text-white   gap-5">
                <li>
                  <a onClick={() => setOpen(false)} href="#About">
                    About Us
                  </a>
                </li>
                <li>
                  <a onClick={() => setOpen(false)} href="#Services">
                    Services
                  </a>
                </li>
                <li>
                  <a onClick={() => setOpen(false)} href="#News">
                    News
                  </a>
                </li>
                <li>
                  <a onClick={() => setOpen(false)} href="#Careers">
                    Careers
                  </a>
                </li>
                <li>
                  <a onClick={() => setOpen(false)} href="#ContactUs">
                    Contact Us
                  </a>
                </li>
                <Image
                  className=" md:hidden block"
                  width={60}
                  height={30}
                  src={Lang}
                />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
}

export default NavBar
