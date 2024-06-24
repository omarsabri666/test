import about from "/public/about.png";

function Regions() {
  return (
    <section id="News" className=" px-4 my-20 ">
      <div className=" flex text-center md:text-start flex-col my-10 gap-5 ">
        <h4 className="  text-[#0F0D0F] text-4xl">Latest News</h4>
        <div className=" flex items-center  flex-col md:flex-row gap-4 md:gap-0 justify-between ">
          <p className="  md:w-1/2  text-[#0F0D0F]">
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
          className=" rounded-md flex items-end relative  md:w-2/5 h-[300px]"
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
        <div className=" md:w-3/5 flex flex-col gap-4">
          <div className=" bg-[#F2F4F9] rounded-md px-4 py-4">
            <h3 className=" text-sm text-[#002B87]">09 May 2023</h3>
            <div className=" flex items-center justify-between  ">
              <p className=" text-[#0F0D0F]  ">
                Lorem ipsum dolor sit amet consectetur lacus auctor amet varius
                in ...
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
                Lorem ipsum dolor sit amet consectetur lacus auctor amet varius
                in ...
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
                Lorem ipsum dolor sit amet consectetur lacus auctor amet varius
                in ...
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
  );
}

export default Regions;
