import img from "/public/our.PNG"
function News() {
    return (
      <section
        id="Careers"
        style={{
          background:
            `linear-gradient(179deg, #002B87 42.14%, rgba(11, 68, 170, 0.81) 60.79%, rgba(61, 129, 211, 0.88) 79.44%, rgba(96, 161, 226, 0.77) 99.24%),url(${img.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="  flex flex-col   relative "
      >
        <div className=" flex items-center flex-col md:flex-row gap-6">
          <div className=" flex flex-col gap-4 md:w-1/2 px-10 py-20  ">
            <h3 className=" md:w-2/3 text-white text-4xl">
              Our Compliance and Regulatory
            </h3>
            <p className=" w-2/3 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea
              parturient phasellus aliquam. Gravida amet leo quis nam nibh.
            </p>
          </div>
          <div className=" flex px-10 md:px-0  gap-3 text-white flex-col">
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

        <div className=" flex flex-col items-center my-32 px-10 md:px-0  gap-4 justify-center text-center  ">
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
          <p className=" text-white text-3xl md:w-3/4 ">
            Lorem ipsum dolor sit amet consectetur. Iaculis et eget nulla in at
            vulputate pellentesque a vel.
          </p>
        </div>
      </section>
    );
}

export default News
