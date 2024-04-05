import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Over 7 successful projects
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-none">
              <span className="">Hi, I&apos;m</span> AbdulBasit Abiodun
              <br className="hidden md:block" />{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Onasanya
              </span>
            </h2>
            <h4 className="inline-block font-semibold lg:text-2xl text-xl mb-6">
              Software Developer
            </h4>
            <p className="text-base text-gray-700 md:text-lg">
              Transforming ideas into immersive digital experiences through
              meticulous coding and creative innovation.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 
              mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto 
              md:mr-4 md:mb-0 bg-blue-500 hover:bg-blue-600 focus:shadow-outline 
              focus:outline-none"
            >
              <span className="mr-3">Work With US</span>
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors
               duration-200 hover:text-purple-700"
            >
              Get 15% discount
            </a>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover lg:w-[34rem] w-[26rem] rounded shadow-lg "
            src="https://i.ibb.co/YdfG696/Snapchat-258389110-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;