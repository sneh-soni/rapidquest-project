import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen w-screen">
      {isMobile ? (
        <div className="z-10 flex absolute w-screen h-8 mt-auto bottom-0 items-center p-2 justify-between ">
          <div className="w-[10%] h-8 bg-blue-700 rounded-md flex justify-center items-center">
            <svg
              height="18"
              width="18"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21.146 8.576-7.55-6.135a2.543 2.543 0 0 0-3.192 0L2.855 8.575a1.119 1.119 0 0 0-.416.873v11.543c0 .62.505 1.13 1.125 1.13h5.062c.62 0 1.125-.51 1.125-1.13v-7.306h4.499v7.306c0 .62.505 1.13 1.125 1.13h5.062c.62 0 1.125-.51 1.125-1.13V9.448a1.122 1.122 0 0 0-.416-.872zm-.71 12.421h-5.062V13.68c0-.62-.505-1.119-1.125-1.119H9.75c-.62 0-1.125.499-1.125 1.119v7.317H3.564V9.448l7.55-6.134a1.411 1.411 0 0 1 1.773 0l7.55 6.134v11.549z"
                fill="#ffffff"
                class="fill-000000"
              ></path>
            </svg>
          </div>
          <div className="w-[10%] h-8 flex justify-center items-center">
            <svg
              viewBox="0 0 576 512"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z" />
            </svg>
          </div>
          <div className="w-[10%] h-8 flex justify-center items-center">
            <svg
              height="24px"
              width="24px"
              id="detail-information-menu-data"
              version="1.1"
              viewBox="0 0 15 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,0v13h15V0H0z M14,12H1V1h13V12z" />
              <rect height="1" width="10" x="2.5" y="3" />
              <rect height="1" width="10" x="2.5" y="6" />
              <rect height="1" width="10" x="2.5" y="9" />
            </svg>
          </div>
          <div className="w-[10%] h-8 flex justify-center items-center">
            <svg
              viewBox="0 0 32 32"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="about">
                <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />
                <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />
              </g>
            </svg>
          </div>
          <div className="w-[10%] h-8 flex justify-center items-center">
            <svg
              height="24px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="w-[5%] p-2 h-full flex flex-col">
          <div className="h-[20%] flex flex-col gap-2">
            <div className="flex justify-center h-8">
              <svg
                height="36px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 24 24"
                width="32px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon">
                  <circle cx="12" cy="12" fill="#5476CC" r="11" />
                  <path
                    d="M8.623,18.2C7.8548,18.2,7.2,17.7178,7.2,16.6249c0,-1.6872,1.452,-2.9685,2.1107,-3.3309c0,0,0.9217,0.531,1.8779,0.8726c-1.8999,-1.202,-3.1139,-3.3922,-3.1139,-5.823c0,-2.2718,1.1991,-3.2946,2.2818,-3.2946c0.8709,0,2.9357,0.9581,2.9357,4.6344C13.2922,13.6393,11.228,18.2,8.623,18.2L8.623,18.2zM11.9431,16.9465c0,0.5733,0.2003,0.7978,0.5065,0.7978c0.7663,0,1.9871,-1.7885,1.9407,-3.6663c1.1619,-1.2257,2.5547,-3.1458,2.5547,-4.6837c0,-0.3723,-0.1056,-0.6857,-0.5468,-0.6857c-0.6746,0,-1.6385,1.1627,-2.25,2.3172c-0.5897,1.1961,-1.1413,2.5603,-1.8735,4.4327C12.1037,15.9281,11.9431,16.4969,11.9431,16.9465L11.9431,16.9465z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M4.2218,19.7782C6.2124,21.7688,8.9624,23,12,23c6.0751,0,11,-4.9249,11,-11c0,-3.0376,-1.2312,-5.7876,-3.2218,-7.7782L4.2218,19.7782z"
                    fill="#231F20"
                    opacity="0.1"
                  />
                </g>
              </svg>
            </div>
            <div className="flex justify-center h-8">
              <svg
                class="feather feather-search"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col h-[60%] justify-start gap-6">
            <div className="flex h-8 w-full bg-blue-700 rounded-md justify-center pt-[0.375rem]">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m21.146 8.576-7.55-6.135a2.543 2.543 0 0 0-3.192 0L2.855 8.575a1.119 1.119 0 0 0-.416.873v11.543c0 .62.505 1.13 1.125 1.13h5.062c.62 0 1.125-.51 1.125-1.13v-7.306h4.499v7.306c0 .62.505 1.13 1.125 1.13h5.062c.62 0 1.125-.51 1.125-1.13V9.448a1.122 1.122 0 0 0-.416-.872zm-.71 12.421h-5.062V13.68c0-.62-.505-1.119-1.125-1.119H9.75c-.62 0-1.125.499-1.125 1.119v7.317H3.564V9.448l7.55-6.134a1.411 1.411 0 0 1 1.773 0l7.55 6.134v11.549z"
                  fill="#ffffff"
                  class="fill-000000"
                ></path>
              </svg>
            </div>
            <div className="flex justify-center">
              <svg
                viewBox="0 0 576 512"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z" />
              </svg>
            </div>
            <div className="flex justify-center">
              <svg
                height="24px"
                width="24px"
                id="detail-information-menu-data"
                version="1.1"
                viewBox="0 0 15 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,0v13h15V0H0z M14,12H1V1h13V12z" />
                <rect height="1" width="10" x="2.5" y="3" />
                <rect height="1" width="10" x="2.5" y="6" />
                <rect height="1" width="10" x="2.5" y="9" />
              </svg>
            </div>
            <div className="flex justify-center">
              <svg
                viewBox="0 0 32 32"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="about">
                  <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />
                  <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />
                </g>
              </svg>
            </div>
          </div>
          <div className=" flex flex-col justify-end gap-4 h-[20%]">
            <div className="h-8 flex justify-center items-center">
              <svg
                fill="none"
                height="24"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1336 11C18.7155 16.3755 21 18 21 18H3C3 18 6 15.8667 6 8.4C6 6.70261 6.63214 5.07475 7.75736 3.87452C8.88258 2.67428 10.4087 2 12 2C12.3373 2 12.6717 2.0303 13 2.08949"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="h-8 flex justify-center items-center">
              <svg
                id="Layer_1"
                version="1.1"
                height="24"
                width="24"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <polygon points="91,119 9,119 9,9 91,9 91,1 1,1 1,127 91,127  " />
                  <rect height="8" width="8" x="40" y="60" />
                  <polygon points="90.8,96.8 123.7,64 90.8,31.2 85.2,36.8 108.3,60 58,60 58,68 108.3,68 85.2,91.2  " />
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
