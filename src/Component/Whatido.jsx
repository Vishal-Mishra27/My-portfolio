import React from 'react'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const callouts = [
  {
    name: "HTML",
    description:
      "HTML is used to provide structure to a webpage and make it accessible to users of the internet through text, visual formatting and search factors. ",
    imageSrc:
      "https://www.twistedbrackets.com/content/images/size/w1200/2022/12/html.png",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "CSS",
    description:
      "CSS stands for Cascading Style Sheets, and it's used to add style to a web page by dictating how a site is displayed on a browser. ",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdDy1MPyAklifM98twCxSuRj7EVJPO0cmHg&s",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Java Script",
    description:
      "JavaScript is a text-based programming language used both on the client side and the server side, which allows you to make web pages interactive. ",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFX9mNYv1We2nYQ2SD4cHsxBrEouMGxmwE8Q&s",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "React",
    description:
      "React is used for web and mobile development because it's easy to learn, flexible, and can handle complex user interfaces. ",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKja0lwgwMMD7S9fEjyfgffmqbkkc8A5md7h4MKxrAIVxnyK7jWgbVE-PR7PvWtzemWLg&usqp=CAU",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Mongodb",
    description:
      "MongoDB is used for high-volume data storage, helping organizations store large amounts of data while still performing rapidly.",
    imageSrc:
      "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2021/07/f5932bc2.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Express.Js",
    description:
      "Express is a back end web application framework for building RESTful APIs with Node. js, released as free and open-source software under the MIT License.",
    imageSrc:
      "https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/66502d746f57d299fe0e0c31_Image%201-Express.js.webp",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Node.Js",
    description:
      "Node.js is a JavaScript runtime environment that is used to build web applications. It is used because it is fast, efficient, and scalable.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrNVwxlBhUzwBd6H4YqdJckckasr4N6PjQw&s",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Bootstrap",
    description:
      "Bootstrap is a free front-end framework, with the purpose of making web development faster and easier.",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Tailwind CSS",
    description:
      "Tailwind CSS is best used to speed up the development process by writing less code.Tailwind's utility-first approach allows us to quickly implement designs without having to write custom CSS.",
    imageSrc:
      "https://devonblog.com/wp-content/uploads/2022/06/tailwind-thumb.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
export default function Whatido() {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  return (
    <div className="bg-gray-100" id="skills">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        className="mt-0  py-4"
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div>
            <div className="mt-0 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 text-center">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-3 text-sm text-black-500">
                    <p>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </p>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
