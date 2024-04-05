"use client";
import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Link from "next/link";

type Props = {};

const NavbarOne = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    // Close the menu when a page is selected
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="relative bg-white">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="flex-none italic text-xl font-semibold">
                Teni Dev
              </h1>
            </Link>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {!isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:justify-between`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <a
                className={`my-2 text-gray-700 transition-colors duration-300 transform ${
                  currentPage === "Home"
                    ? "hover:text-blue-500"
                    : "hover:text-gray-600"
                } md:mx-4 md:my-0`}
                href="#"
                onClick={() => navigateTo("Home")}
              >
                Home
              </a>
              <a
                className={`my-2 text-gray-700 transition-colors duration-300 transform ${
                  currentPage === "About"
                    ? "hover:text-blue-500"
                    : "hover:text-gray-600"
                } md:mx-4 md:my-0`}
                href="#"
                onClick={() => navigateTo("About")}
              >
                About
              </a>
              <a
                className={`my-2 text-gray-700 transition-colors duration-300 transform ${
                  currentPage === "Contact"
                    ? "hover:text-blue-500"
                    : "hover:text-gray-600"
                } md:mx-4 md:my-0`}
                href="#"
                onClick={() => navigateTo("Contact")}
              >
                Contact
              </a>
            </div>
          </div>
          <hr />
        </div>
      </nav>
      {/* Render content based on currentPage state */}
      {currentPage === "Home" && <Home />}
      {currentPage === "About" && <About />}
      {currentPage === "Contact" && <Contact />}
    </div>
  );
};

export default NavbarOne;
