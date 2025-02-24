import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const callouts = [
  {
    name: "HTML",
    description: "HTML provides structure to webpages.",
    imageSrc:
      "https://www.twistedbrackets.com/content/images/size/w1200/2022/12/html.png",
  },
  {
    name: "CSS",
    description: "CSS styles web pages for better presentation.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdDy1MPyAklifM98twCxSuRj7EVJPO0cmHg&s",
  },
  {
    name: "JavaScript",
    description: "JavaScript makes web pages interactive.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFX9mNYv1We2nYQ2SD4cHsxBrEouMGxmwE8Q&s",
  },
  {
    name: "React",
    description: "React is used for building UI components.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKja0lwgwMMD7S9fEjyfgffmqbkkc8A5md7h4MKxrAIVxnyK7jWgbVE-PR7PvWtzemWLg&usqp=CAU",
  },
  {
    name: "MongoDB",
    description: "MongoDB is a NoSQL database for high-volume storage.",
    imageSrc:
      "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2021/07/f5932bc2.jpg",
  },
  {
    name: "Express.js",
    description: "Express is a web framework for Node.js.",
    imageSrc:
      "https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/66502d746f57d299fe0e0c31_Image%201-Express.js.webp",
  },
  {
    name: "Node.js",
    description: "Node.js is a JavaScript runtime for the server.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrNVwxlBhUzwBd6H4YqdJckckasr4N6PjQw&s",
  },
  {
    name: "Bootstrap",
    description: "Bootstrap is a CSS framework for responsive design.",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
  },
  {
    name: "Tailwind CSS",
    description: "Tailwind CSS speeds up styling with utility classes.",
    imageSrc:
      "https://devonblog.com/wp-content/uploads/2022/06/tailwind-thumb.jpg",
  },
];

export default function Whatido() {
  return (
    <div className="bg-gray-100" id="skills">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        className="mt-0 py-4"
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
          What I Do?
        </Button>
      </Stack>

      <h1 style={{ textAlign: "center", fontSize: "25px" }} className="mt-2">
        How I can help your next project
      </h1>
      <div className="bg-gray-100 mt-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              {callouts.map((callout, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, {
                  triggerOnce: true,
                  threshold: 0.2,
                });

                return (
                  <motion.div
                    key={callout.name}
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={cardVariants}
                    className="group relative bg-white p-4 rounded-lg shadow-lg"
                  >
                    <div className="relative h-40 w-full overflow-hidden rounded-lg">
                      <img
                        alt={callout.name}
                        src={callout.imageSrc}
                        className="h-full w-full object-fill object-center"
                      />
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-gray-900">
                      {callout.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {callout.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
