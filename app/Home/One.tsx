import React from "react";

type Props = {};

const One = (props: Props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-xl sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="font-sans text-3xl font-semibold italic tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
              About Me
              <br className="hidden md:block" /> and{" "}
              <span className="inline-block text-deep-purple-accent-400">
                My Experience
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base text-gray-700">
              I am a passionate and dedicated software developer with a keen
              interest in front-end development. My journey in the world of
              programming began with a curiosity for creating visually appealing
              and interactive user interfaces. With a strong foundation in HTML,
              CSS, and JavaScript, I have honed my skills in modern front-end
              frameworks such as React, Next.js, and Vite.js. My proficiency
              extends to utilizing frameworks like Tailwind CSS to streamline
              development and enhance the user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default One;
