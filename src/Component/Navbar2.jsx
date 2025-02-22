import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import myimage from "../../public/me.jpg";
import { Link } from "react-scroll"; 

export default function Navbar2() {
  return (
    <div className="bg-white md:shadow-lg h-screen flex items-center justify-center pt-12 md:pt-0 mt-0">
      <div className="max-w-7xl mx-auto my-0 w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-center md:text-left">
            <h5 className="text-3xl sm:text-4xl font-semibold">
              Hi, I'm a Web Developer
            </h5>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2">
              Vishal Mishra
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Vishal Mishra is a skilled Full Stack Web Developer specializing
              in the MERN stack (MongoDB, Express.js, React, and Node.js).
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold mt-6">
              based in UP, India
            </h1>

            <div className="mt-6 sm:mt-8 space-x-4 sm:space-x-6">
              <Link to="projects" smooth={true} duration={500}>
                <Button
                  variant="contained"
                  className="bg-blue-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  View my work
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <Button
                  variant="text"
                  className="text-blue-500 px-6 py-2 sm:px-8 sm:py-3 hover:text-blue-600 transition duration-300"
                >
                  Contact me
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="rounded-full border-4 border-gray-300 overflow-hidden">
              <img
                src={myimage}
                alt="Vishal Mishra"
                className="w-40 h-40 sm:w-30 sm:h-30 md:w-48 md:h-48 lg:w-full lg:h-full xl:w-full xl:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
