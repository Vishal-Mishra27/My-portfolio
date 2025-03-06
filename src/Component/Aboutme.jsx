import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];

const stats = [
  { name: "Name", value: "Vishal Mishra" },
  { name: "Email", value: "vishalmishra27062@gmail.com" },
  { name: "Technology", value: "MERN" },
  { name: "From", value: "UP, India" },
];

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const statsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div id="about">
      {/* About Me Button */}
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        className="mt-3"
      >
        <Button
          style={{
            background: "aqua",
            color: "black",
            fontWeight: "bold",
            cursor: "auto",
            fontSize: "20px",
          }}
        >
          About Me
        </Button>
      </Stack>

      {/* Section Title */}
      <h1 style={{ textAlign: "center", fontSize: "25px" }} className="mt-2">
        Know Me More
      </h1>

      {/* Background Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Animated Heading & Description */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h2 className="text-5xl font-semibold tracking-tight text-[#ffc107] sm:text-7xl">
              Hi, I'm Vishal Mishra
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              Vishal has a solid foundation in web development, having worked on
              numerous projects that showcase his ability to create responsive
              and efficient applications. His proficiency in React allows him to
              build intuitive user interfaces, while his knowledge of Node.js
              and Express.js enables him to develop robust server-side
              applications. With MongoDB as his database of choice, Vishal is
              adept at designing data models that support complex
              functionalities.
            </p>
          </motion.div>

          {/* Animated Stats Section */}
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.name}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={i}
                  variants={statsVariants}
                  className="flex flex-col-reverse gap-1"
                >
                  <dt className="text-base/7 text-gray-300">{stat.value}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-[#ffc107]">
                    {stat.name}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
