import React from "react";

type Props = {};

const Two = (props: Props) => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
              <svg
                data-testid="geist-icon"
                height="24"
                stroke-linejoin="round"
                viewBox="0 0 16 16"
                width="44"
                style={{ color: "currentcolor" }}
              >
                <g clip-path="url(#clip0_53_108)">
                  <circle
                    cx="8"
                    cy="8"
                    r="7.375"
                    fill="black"
                    stroke="var(--ds-gray-1000)"
                    strokeWidth="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></circle>
                  <path
                    d="M10.63 11V5"
                    stroke="url(#paint0_linear_53_1080c1ln140o)"
                    strokeWidth="1.25"
                    stroke-miterlimit="1.41421"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z"
                    fill="url(#paint1_linear_53_1080c1ln140o)"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_53_1080c1ln140o"
                    x1="11.13"
                    y1="5"
                    x2="11.13"
                    y2="11"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop
                      offset="0.609375"
                      stop-color="white"
                      stop-opacity="0.57"
                    ></stop>
                    <stop
                      offset="0.796875"
                      stop-color="white"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_53_1080c1ln140o"
                    x1="9.9375"
                    y1="9.0625"
                    x2="13.5574"
                    y2="13.3992"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <clipPath id="clip0_53_108">
                    <rect width="16" height="16" fill="red"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                Next.js
              </h3>
            </div>
          </div>
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">
            <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
              <svg
                data-testid="geist-icon"
                height="24"
                stroke-linejoin="round"
                viewBox="0 0 16 16"
                width="44"
                style={{ color: "currentcolor" }}
              >
                <g clip-path="url(#clip0_872_3183)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.5 1.93782C4.70129 1.82161 4.99472 1.7858 5.41315 1.91053C5.83298 2.03567 6.33139 2.31073 6.87627 2.73948C7.01136 2.84578 7.14803 2.96052 7.28573 3.08331C6.86217 3.53446 6.44239 4.04358 6.03752 4.60092C5.35243 4.67288 4.70164 4.78186 4.09916 4.92309C4.06167 4.74244 4.03064 4.56671 4.00612 4.39656C3.90725 3.71031 3.91825 3.14114 4.01979 2.71499C4.12099 2.29025 4.29871 2.05404 4.5 1.93782ZM7.49466 1.95361C7.66225 2.08548 7.83092 2.22804 7.99999 2.38067C8.16906 2.22804 8.33773 2.08548 8.50532 1.95361C9.10921 1.47842 9.71982 1.12549 10.3012 0.952202C10.8839 0.778496 11.4838 0.7738 12 1.0718C12.5161 1.3698 12.812 1.89169 12.953 2.48322C13.0936 3.07333 13.0932 3.77858 12.9836 4.53917C12.9532 4.75024 12.9141 4.9676 12.8665 5.19034C13.0832 5.26044 13.291 5.33524 13.489 5.41444C14.2025 5.69983 14.8134 6.05217 15.2542 6.46899C15.696 6.8868 16 7.404 16 8C16 8.596 15.696 9.11319 15.2542 9.53101C14.8134 9.94783 14.2025 10.3002 13.489 10.5856C13.291 10.6648 13.0832 10.7396 12.8665 10.8097C12.9141 11.0324 12.9532 11.2498 12.9837 11.4608C13.0932 12.2214 13.0936 12.9267 12.953 13.5168C12.812 14.1083 12.5161 14.6302 12 14.9282C11.4839 15.2262 10.8839 15.2215 10.3012 15.0478C9.71984 14.8745 9.10923 14.5216 8.50534 14.0464C8.33775 13.9145 8.16906 13.7719 7.99999 13.6193C7.83091 13.7719 7.66223 13.9145 7.49464 14.0464C6.89075 14.5216 6.28014 14.8745 5.69879 15.0478C5.11605 15.2215 4.51613 15.2262 3.99998 14.9282C3.48383 14.6302 3.18794 14.1083 3.047 13.5168C2.9064 12.9267 2.90674 12.2214 3.01632 11.4608C3.04673 11.2498 3.08586 11.0324 3.13351 10.8097C2.91679 10.7395 2.709 10.6648 2.511 10.5856C1.79752 10.3002 1.18658 9.94783 0.745833 9.53101C0.304028 9.11319 0 8.596 0 8C0 7.404 0.304028 6.8868 0.745833 6.46899C1.18658 6.05217 1.79752 5.69983 2.511 5.41444C2.709 5.33524 2.9168 5.26044 3.13352 5.19034C3.08587 4.9676 3.04675 4.75024 3.01634 4.53917C2.90676 3.77858 2.90642 3.07332 3.04702 2.48321C3.18796 1.89169 3.48385 1.3698 4 1.0718C4.51615 0.773798 5.11607 0.778495 5.69881 0.952201C6.28016 1.12549 6.89077 1.47841 7.49466 1.95361ZM7.36747 4.51025C7.57735 4.25194 7.78881 4.00927 7.99999 3.78356C8.21117 4.00927 8.42263 4.25194 8.63251 4.51025C8.42369 4.50346 8.21274 4.5 8 4.5C7.78725 4.5 7.5763 4.50345 7.36747 4.51025ZM8.71425 3.08331C9.13781 3.53447 9.55759 4.04358 9.96246 4.60092C10.6475 4.67288 11.2983 4.78186 11.9008 4.92309C11.9383 4.74244 11.9693 4.56671 11.9939 4.39657C12.0927 3.71031 12.0817 3.14114 11.9802 2.71499C11.879 2.29025 11.7013 2.05404 11.5 1.93782C11.2987 1.82161 11.0053 1.7858 10.5868 1.91053C10.167 2.03568 9.66859 2.31073 9.12371 2.73948C8.98862 2.84578 8.85196 2.96052 8.71425 3.08331ZM8 5.5C8.48433 5.5 8.95638 5.51885 9.41188 5.55456C9.67056 5.93118 9.9229 6.33056 10.1651 6.75C10.4072 7.16944 10.6269 7.58766 10.8237 7.99998C10.6269 8.41232 10.4072 8.83055 10.165 9.25C9.92288 9.66944 9.67053 10.0688 9.41185 10.4454C8.95636 10.4812 8.48432 10.5 8 10.5C7.51567 10.5 7.04363 10.4812 6.58813 10.4454C6.32945 10.0688 6.0771 9.66944 5.83494 9.25C5.59277 8.83055 5.37306 8.41232 5.17624 7.99998C5.37306 7.58765 5.59275 7.16944 5.83492 6.75C6.07708 6.33056 6.32942 5.93118 6.5881 5.55456C7.04361 5.51884 7.51566 5.5 8 5.5ZM11.0311 6.25C11.1375 6.43423 11.2399 6.61864 11.3385 6.80287C11.4572 6.49197 11.5616 6.18752 11.6515 5.89178C11.3505 5.82175 11.0346 5.75996 10.706 5.70736C10.8163 5.8848 10.9247 6.06576 11.0311 6.25ZM11.0311 9.75C11.1374 9.56576 11.2399 9.38133 11.3385 9.19709C11.4572 9.50801 11.5617 9.81246 11.6515 10.1082C11.3505 10.1782 11.0346 10.24 10.7059 10.2926C10.8162 10.1152 10.9247 9.93424 11.0311 9.75ZM11.9249 7.99998C12.2051 8.62927 12.4362 9.24738 12.6151 9.83977C12.7903 9.78191 12.958 9.72092 13.1176 9.65708C13.7614 9.39958 14.2488 9.10547 14.5671 8.80446C14.8843 8.50445 15 8.23243 15 8C15 7.76757 14.8843 7.49555 14.5671 7.19554C14.2488 6.89453 13.7614 6.60042 13.1176 6.34292C12.958 6.27907 12.7903 6.21808 12.6151 6.16022C12.4362 6.7526 12.2051 7.37069 11.9249 7.99998ZM9.96244 11.3991C10.6475 11.3271 11.2983 11.2181 11.9008 11.0769C11.9383 11.2576 11.9694 11.4333 11.9939 11.6034C12.0928 12.2897 12.0817 12.8589 11.9802 13.285C11.879 13.7098 11.7013 13.946 11.5 14.0622C11.2987 14.1784 11.0053 14.2142 10.5868 14.0895C10.167 13.9643 9.66861 13.6893 9.12373 13.2605C8.98863 13.1542 8.85196 13.0395 8.71424 12.9167C9.1378 12.4655 9.55758 11.9564 9.96244 11.3991ZM8.63249 11.4898C8.42262 11.7481 8.21116 11.9907 7.99999 12.2164C7.78881 11.9907 7.57737 11.7481 7.36749 11.4897C7.57631 11.4965 7.78726 11.5 8 11.5C8.21273 11.5 8.42367 11.4965 8.63249 11.4898ZM4.96891 9.75C5.07528 9.93424 5.18375 10.1152 5.29404 10.2926C4.9654 10.24 4.64951 10.1782 4.34844 10.1082C4.43833 9.81246 4.54276 9.508 4.66152 9.19708C4.76005 9.38133 4.86254 9.56575 4.96891 9.75ZM6.03754 11.3991C5.35244 11.3271 4.70163 11.2181 4.09914 11.0769C4.06165 11.2576 4.03062 11.4333 4.0061 11.6034C3.90723 12.2897 3.91823 12.8589 4.01977 13.285C4.12097 13.7098 4.29869 13.946 4.49998 14.0622C4.70127 14.1784 4.9947 14.2142 5.41313 14.0895C5.83296 13.9643 6.33137 13.6893 6.87625 13.2605C7.01135 13.1542 7.14802 13.0395 7.28573 12.9167C6.86217 12.4655 6.4424 11.9564 6.03754 11.3991ZM4.07507 7.99998C3.79484 8.62927 3.56381 9.24737 3.38489 9.83977C3.20969 9.78191 3.042 9.72092 2.88239 9.65708C2.23864 9.39958 1.75123 9.10547 1.43294 8.80446C1.11571 8.50445 1 8.23243 1 8C1 7.76757 1.11571 7.49555 1.43294 7.19554C1.75123 6.89453 2.23864 6.60042 2.88239 6.34292C3.042 6.27907 3.2097 6.21808 3.3849 6.16022C3.56383 6.75261 3.79484 7.37069 4.07507 7.99998ZM4.66152 6.80287C4.54277 6.49197 4.43835 6.18752 4.34846 5.89178C4.64952 5.82175 4.96539 5.75996 5.29402 5.70736C5.18373 5.8848 5.07526 6.06576 4.96889 6.25C4.86253 6.43423 4.76005 6.61864 4.66152 6.80287ZM9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30965 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30965 9.25 8Z"
                    fill="#149ECA"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_872_3183">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                React.js
              </h3>
            </div>
          </div>
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 ">
            <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
              <svg
                data-testid="geist-icon"
                height="24"
                stroke-linejoin="round"
                viewBox="0 0 16 16"
                width="44"
                style={{ color: "currentcolor" }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 1L16 15H0L8 1Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            <div className="mt-3">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                Vercel
              </h3>
            </div>
          </div>
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">
            <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
              <svg
                id="Html_5_24"
                width="44"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  stroke="none"
                  fill="#000000"
                  opacity="0"
                />

                <g transform="matrix(0.42 0 0 0.42 12 12)">
                  <g style={{}}>
                    <g transform="matrix(1 0 0 1 0 0)">
                      <path
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeDashoffset: 0,
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          fill: "rgb(230,81,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" translate(-24, -24)"
                        d="M 41 5 L 7 5 L 10 39 L 24 43 L 38 39 L 41 5 L 41 5 z"
                        strokeLinecap="round"
                      />
                    </g>
                    <g transform="matrix(1 0 0 1 6.85 -0.05)">
                      <path
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeDashoffset: 0,
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          fill: "rgb(255,109,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" translate(-30.85, -23.95)"
                        d="M 24 8 L 24 39.9 L 35.2 36.7 L 37.7 8 z"
                        strokeLinecap="round"
                      />
                    </g>
                    <g transform="matrix(1 0 0 1 4.6 0.05)">
                      <path
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeDashoffset: 0,
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          fill: "rgb(255,255,255)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" translate(-28.6, -24.05)"
                        d="M 24 25 L 24 21 L 32.6 21 L 31.900000000000002 32.5 L 24 35.1 L 24 30.900000000000002 L 28.1 29.500000000000004 L 28.400000000000002 25.000000000000004 L 24 25.000000000000004 z M 32.9 17 L 33.199999999999996 13 L 24 13 L 24 17 L 32.9 17 z"
                        strokeLinecap="round"
                      />
                    </g>
                    <g transform="matrix(1 0 0 1 -4.55 0.05)">
                      <path
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeDashoffset: 0,
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          fill: "rgb(238,238,238)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" translate(-19.45, -24.05)"
                        d="M 24 30.9 L 24 35.1 L 16.1 32.5 L 15.7 27 L 19.7 27 L 19.9 29.5 L 24 30.9 z M 19.1 17 L 24 17 L 24 13 L 14.9 13 L 15.6 25 L 24 25 L 24 21 L 19.4 21 L 19.1 17 z"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                HTML
              </h3>
            </div>
          </div>
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">
            <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
              <svg
                id="Tailwindcss_24"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  width="24"
                  height="24"
                  stroke="none"
                  fill="#000000"
                  opacity="0"
                />

                <g transform="matrix(0.42 0 0 0.42 12 12)">
                  <path
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeDashoffset: 0,
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      fill: "rgb(0,172,193)",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" translate(-24, -24)"
                    d="M 24 9.604 C 17.6 9.604 13.6 12.802999999999999 12 19.201 C 14.4 16.002000000000002 17.2 14.803 20.4 15.602 C 22.226 16.058 23.531 17.383 24.976 18.849 C 27.328 21.236 30.051 24 36 24 C 42.4 24 46.4 20.801000000000002 48 14.402 C 45.6 17.601 42.8 18.801 39.6 18.002 C 37.775 17.546 36.47 16.221 35.025 14.754999999999999 C 32.672 12.367 29.948 9.604 24 9.604 L 24 9.604 z M 12 24 C 5.6 24 1.5999999999999996 27.198999999999998 0 33.598 C 2.4 30.399 5.2 29.198999999999998 8.4 29.999 C 10.225 30.456 11.530000000000001 31.779999999999998 12.975000000000001 33.245 C 15.328000000000001 35.632999999999996 18.052 38.397 24 38.397 C 30.4 38.397 34.4 35.198 36 28.799 C 33.6 31.997999999999998 30.8 33.198 27.6 32.397999999999996 C 25.774 31.941999999999997 24.469 30.616999999999997 23.024 29.151999999999997 C 20.672 26.764 17.949 24 12 24 L 12 24 z"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                TailwindCSS
              </h3>
            </div>
          </div>
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">
            <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
              <svg
                id="Redux_24"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  width="24"
                  height="24"
                  stroke="none"
                  fill="#000000"
                  opacity="0"
                />

                <g transform="matrix(0.42 0 0 0.42 12 12)">
                  <g style={{}}>
                    <g transform="matrix(1 0 0 1 -1.13 -4)">
                      <path
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeDashoffset: 0,
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          fill: "rgb(126,87,194)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" translate(-22.87, -20)"
                        d="M 23 4 C 16.383 4 11 11.27 11 20.205 C 11 25.038999999999998 12.582 29.374 15.078 32.340999999999994 C 15.03 32.554 15 32.773 15 33 C 15 34.657 16.343 36 18 36 C 19.657 36 21 34.657 21 33 C 21 31.343000000000004 19.657 30 18 30 C 17.685 30 17.388 30.062 17.103 30.152 C 15.206 27.731 14 24.175 14 20.205 C 14 12.924 18.037 7 23 7 C 26.837 7 30.111 10.547 31.404 15.518 C 32.526 15.864 33.641 16.3 34.734 16.826 C 33.579 9.508 28.759 4 23 4 z"
                        strokeLinecap="round"
                      />
                    </g>
                    <g transform="matrix(1 0 0 1 7.49 6)">
                      <path
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeDashoffset: 0,
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          fill: "rgb(126,87,194)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" translate(-31.49, -30)"
                        d="M 35.507 20.084 C 31.56 17.692 27.132999999999996 16.642 23.324999999999996 17.125 C 22.775 16.444 21.943 16 21 16 C 19.343 16 18 17.343 18 19 C 18 20.657 19.343 22 21 22 C 22.272 22 23.353 21.205 23.789 20.088 C 26.907 19.709 30.601000000000003 20.619 33.952 22.651 C 40.355 26.532 43.622 33.22 41.233999999999995 37.562 C 40.407 39.065999999999995 38.94799999999999 40.134 37.01599999999999 40.652 C 34.72999999999999 41.263 32.00899999999999 41.046 29.28899999999999 40.124 C 28.449999999999992 40.896 27.539999999999992 41.622 26.56399999999999 42.292 C 29.11599999999999 43.409 31.75999999999999 43.996 34.23299999999999 43.996 C 35.47299999999999 43.996 36.67099999999999 43.849000000000004 37.79199999999999 43.549 C 40.53299999999999 42.816 42.63299999999999 41.245 43.862999999999985 39.007 C 47.016 33.276 43.267 24.787 35.507 20.084 z"
                        strokeLinecap="round"
                      />
                    </g>
                    <g transform="matrix(1 0 0 1 -4.99 9.5)">
                      <path
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeDashoffset: 0,
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          fill: "rgb(126,87,194)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" translate(-19.01, -33.5)"
                        d="M 35 28.992 C 35 27.34 33.657 26 32 26 C 30.343000000000004 26 29 27.34 29 28.992 C 29 29.661 29.228 30.273 29.6 30.771 C 28.321 33.573 25.856 36.338 22.538 38.349000000000004 C 18.673000000000002 40.693000000000005 14.353 41.551 10.983 40.651 C 9.051 40.133 7.5920000000000005 39.065000000000005 6.765000000000001 37.56100000000001 C 5.063000000000001 34.467000000000006 6.244000000000001 30.185000000000006 9.375 26.573000000000008 C 9.052 25.42900000000001 8.813 24.233000000000008 8.669 22.998000000000008 C 3.599 27.79500000000001 1.5600000000000005 34.32100000000001 4.1370000000000005 39.007000000000005 C 5.367000000000001 41.245000000000005 7.4670000000000005 42.816 10.208 43.54900000000001 C 11.329 43.849000000000004 12.526 43.99600000000001 13.767 43.99600000000001 C 17.113 43.99600000000001 20.774 42.92800000000001 24.093 40.91600000000001 C 27.929 38.59100000000001 30.776 35.33900000000001 32.302 31.95400000000001 C 33.815 31.801 35 30.541 35 28.992 z"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                Redux
              </h3>
            </div>
          </div>
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">
            <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
              <svg
                id="API_24"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  width=""
                  height="24"
                  stroke="none"
                  fill="#000000"
                  opacity="0"
                />

                <g transform="matrix(0.42 0 0 0.42 12 12)">
                  <g style={{}}>
                    <g transform="matrix(1 0 0 1 0 0)">
                      <path
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeDashoffset: 0,
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          fill: "rgb(33,150,243)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" translate(-24, -24)"
                        d="M 7 8 L 41 8 C 43.21 8 45 9.791 45 12 L 45 36 C 45 38.209 43.21 40 41 40 L 7 40 C 4.791 40 3 38.209 3 36 L 3 12 C 3 9.791 4.791 8 7 8"
                        strokeLinecap="round"
                      />
                    </g>
                    <g transform="matrix(1 0 0 1 -0.71 0)">
                      <path
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeDashoffset: 0,
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          fill: "rgb(255,255,255)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" translate(-23.29, -24)"
                        d="M 17.038 28.725 L 12.746 28.725 L 11.909 32 L 8.581 32 L 13.451 16 L 16.331 16 L 21.233999999999998 32 L 17.872999999999998 32 L 17.038 28.725 z M 13.431 26.033 L 16.343 26.033 L 14.887 20.330000000000002 L 13.431 26.033 z M 26 26.374 L 26 32 L 23 32 L 23 16 L 28 16 C 29.542 16 30.771 16.491 31.689 17.473 C 32.605 18.454 33 19.729 33 21.297 C 33 22.865000000000002 32.61 24.103 31.705 25.011 C 30.798 25.919 29.541999999999998 26.374 27.936999999999998 26.374 L 26 26.374 z M 26 23.681 L 28.116 23.681 C 28.715 23.681 29.179 23.48 29.509 23.077 C 29.836 22.674 30 22.088 30 21.319 C 30 20.52 29.833 19.884999999999998 29.497 19.412 C 29.162 18.939999999999998 28.712 18.7 28.148 18.692 L 26 18.692 L 26 23.681 z M 38 32 L 35 32 L 35 16 L 38 16 L 38 32 z"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                API
              </h3>
            </div>
          </div>
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">
            <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
              <svg
                id="Vite_24"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  width="24"
                  height="24"
                  stroke="none"
                  fill="#000000"
                  opacity="0"
                />

                <g transform="matrix(0.42 0 0 0.42 12 12)">
                  <g style={{}}>
                    <g transform="matrix(1 0 0 1 -0.11 3.18)">
                      <linearGradient
                        id="SVGID_oOTIjsOjTqJdvfy5S4iCZa_1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(1 0 0 -1 0 514)"
                        x1="13.315"
                        y1="514.906"
                        x2="38.005"
                        y2="481.377"
                      >
                        <stop
                          offset="0%"
                          style={{
                            stopColor: "rgb(65,209,255)",
                            stopOpacity: 1,
                          }}
                        />
                        <stop
                          offset="100%"
                          style={{
                            stopColor: "rgb(146,49,190)",
                            stopOpacity: 1,
                          }}
                        />
                      </linearGradient>
                      <path
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeDashoffset: 0,
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          fill: "url(#SVGID_oOTIjsOjTqJdvfy5S4iCZa_1)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" translate(-23.89, -27.18)"
                        d="M 44.86 9.976 L 25.023 45.448 C 24.613 46.18 23.561 46.185 23.145 45.456 L 2.915 9.979 C 2.462 9.185 3.141 8.223 4.041 8.384 L 23.900000000000002 11.934000000000001 C 24.027 11.957 24.156000000000002 11.956000000000001 24.283 11.933000000000002 L 43.726 8.389000000000001 C 44.623 8.225 45.305 9.18 44.86 9.976 z"
                        strokeLinecap="round"
                      />
                    </g>
                    <g transform="matrix(1 0 0 1 3.29 -3.5)">
                      <linearGradient
                        id="SVGID_oOTIjsOjTqJdvfy5S4iCZb_2"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(1 0 0 -1 0 514)"
                        x1="25.502"
                        y1="508.764"
                        x2="37.131"
                        y2="428.99"
                      >
                        <stop
                          offset="0%"
                          style={{
                            stopColor: "rgb(254,209,0)",
                            stopOpacity: 1,
                          }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "rgb(227,96,1)", stopOpacity: 1 }}
                        />
                      </linearGradient>
                      <path
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeDashoffset: 0,
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          fill: "url(#SVGID_oOTIjsOjTqJdvfy5S4iCZb_2)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" translate(-27.29, -20.5)"
                        d="M 33.574 3.01 L 19.019 5.862 C 18.779999999999998 5.909 18.602999999999998 6.112 18.587999999999997 6.355 L 17.692999999999998 21.476 C 17.671999999999997 21.832 17.999 22.108999999999998 18.346999999999998 22.028 L 22.398999999999997 21.093 C 22.778 21.006 23.121 21.339 23.042999999999996 21.721 L 21.838999999999995 27.616 C 21.757999999999996 28.012999999999998 22.129999999999995 28.352 22.517999999999994 28.233999999999998 L 25.020999999999994 27.473999999999997 C 25.408999999999995 27.355999999999998 25.781999999999993 27.695999999999998 25.699999999999992 28.093999999999998 L 23.786999999999992 37.354 C 23.66699999999999 37.933 24.43799999999999 38.249 24.758999999999993 37.752 L 24.973999999999993 37.42 L 36.83399999999999 13.751000000000001 C 37.03299999999999 13.355 36.68999999999999 12.903 36.25499999999999 12.987000000000002 L 32.08399999999999 13.792000000000002 C 31.69199999999999 13.868000000000002 31.358999999999988 13.503000000000002 31.46899999999999 13.119000000000002 L 34.190999999999
999999 3.681000000000001 C 34.301 3.299 33.967 2.933 33.574 3.01 z"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                Vite
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
