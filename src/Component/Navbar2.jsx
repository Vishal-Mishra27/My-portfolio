// import React from "react";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import myimage from "../../public/me.jpg";
// import { Link } from "react-scroll"; 

// export default function Navbar2() {
//   return (
//     <div className="bg-white md:shadow-lg h-screen flex items-center justify-center pt-12 md:pt-0 mt-0">
//       <div className="max-w-7xl mx-auto my-0 w-full px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//           <div className="text-center md:text-left">
//             <h5 className="text-3xl sm:text-4xl font-semibold">
//               Hi, I'm a Web Developer
//             </h5>
//             <h1 className="text-4xl sm:text-5xl font-bold mt-2">
//               Vishal Mishra
//             </h1>
//             <p className="mt-4 text-lg sm:text-xl">
//               Vishal Mishra is a skilled Full Stack Web Developer specializing
//               in the MERN stack (MongoDB, Express.js, React, and Node.js).
//             </p>
//             <h1 className="text-2xl sm:text-3xl font-bold mt-6">
//               based in UP, India
//             </h1>

//             <div className="mt-6 sm:mt-8 space-x-4 sm:space-x-6">
//               <Link to="projects" smooth={true} duration={500}>
//                 <Button
//                   variant="contained"
//                   className="bg-blue-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-blue-600 transition duration-300"
//                 >
//                   View my work
//                 </Button>
//               </Link>
//               <Link to="contact" smooth={true} duration={500}>
//                 <Button
//                   variant="text"
//                   className="text-blue-500 px-6 py-2 sm:px-8 sm:py-3 hover:text-blue-600 transition duration-300"
//                 >
//                   Contact me
//                 </Button>
//               </Link>
//             </div>
//           </div>

//           {/* Right Section: Image */}
//           <div className="flex items-center justify-center md:justify-start">
//             <div className="rounded-full border-4 border-gray-300 overflow-hidden">
//               <img
//                 src={myimage}
//                 alt="Vishal Mishra"
//                 className="w-40 h-40 sm:w-30 sm:h-30 md:w-48 md:h-48 lg:w-full lg:h-full xl:w-full xl:h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import myimage from "../../public/me.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar2() {
  return (
    <div className="bg-white md:shadow-lg h-screen flex items-center justify-center pt-12 md:pt-0 mt-0">
      <div className="max-w-7xl mx-auto my-0 w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Section - Text & Buttons */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.h5
              className="text-3xl sm:text-4xl font-semibold cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{
                y: -5,
                scale: 1.05,
                transition: { type: "spring", stiffness: 200 },
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Hi, I'm a Web Developer
            </motion.h5>

            <motion.h1
              className="text-4xl sm:text-5xl font-bold mt-2 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 200 },
              }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              Vishal Mishra
            </motion.h1>

            <motion.p
              className="mt-4 text-lg sm:text-xl cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{
                x: 15,
                transition: { type: "spring", stiffness: 200 },
              }} // Moves text right on hover
            >
              Vishal Mishra is a skilled Full Stack Web Developer specializing
              in the MERN stack (MongoDB, Express.js, React, and Node.js).
            </motion.p>

            <motion.h1
              className="text-2xl sm:text-3xl font-bold mt-6 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{
                x: -15,
                transition: { type: "spring", stiffness: 200 },
              }} // Moves text left on hover
            >
              Based in UP, India
            </motion.h1>

            <motion.div
              className="mt-6 sm:mt-8 space-x-4 sm:space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link to="projects" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  View my work
                </motion.button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-500 px-6 py-2 sm:px-8 sm:py-3 hover:text-blue-600 transition duration-300"
                >
                  Contact me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section - Profile Image */}
          <motion.div
            className="flex items-center justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              className="rounded-full border-4 border-gray-300 overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={myimage}
                alt="Vishal Mishra"
                className="w-40 h-40 sm:w-30 sm:h-30 md:w-48 md:h-48 lg:w-full lg:h-full xl:w-full xl:h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
