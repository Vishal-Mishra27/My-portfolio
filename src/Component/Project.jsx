
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const callouts = [
  {
    name: "Chat Friendly",
    description:
      "Stay connected with ease using our responsive Chat App, designed for smooth conversations on any device.",
    imageSrc:
      "https://giftysolutions.com/wp-content/uploads/2024/07/Graphic-Design.webp",
    imageAlt: "Chat App UI design.",
    href: "#",
  },
  {
    name: "Coza Store",
    description:
      "Shop the latest trends at Coza Store, your one-stop eCommerce destination for top-quality products.",
    imageSrc:
      "https://www.proalley.com/blog/content/images/size/w2000/2022/11/web-design-concept-with-drawings.jpg",
    imageAlt: "Online store UI preview.",
    href: "#",
  },
  {
    name: "Mini Music Player",
    description:
      "Enjoy your favorite tunes on the go with our Mini Music Player, designed for simplicity and portability.",
    imageSrc:
      "https://buildfire.com/wp-content/uploads/2021/10/Whats-the-Difference-Between-UX-Design-vs.-UI-Design_@3x-1-scaled.jpg",
    imageAlt: "Music player UI preview.",
    href: "#",
  },
  {
    name: "Mishra-Bhojnaly",
    description:
      "Indulge in a delightful dining experience with our Restaurant Site, featuring a menu full of delicious options.",
    imageSrc:
      "https://s3-alpha.figma.com/hub/file/4210100113/701f36a5-4b41-42b2-8e5f-e5b2039f6c73-cover.png",
    imageAlt: "Restaurant website UI preview.",
    href: "#",
  },
  {
    name: "Book Store",
    description:
      "Discover a world of stories with our Book Store App, where browsing and buying books is just a tap away.",
    imageSrc:
      "https://rms.koenig-solutions.com/Sync_data/CCE_Logo//2649-BA800x510.jpgL.jpg",
    imageAlt: "Bookstore app UI preview.",
    href: "#",
  },
  {
    name: "My Portfolio",
    description:
      "Showcasing my skills and projects, My Portfolio is a digital space where creativity meets professionalism.",
    imageSrc:
      "https://rms.koenig-solutions.com/Sync_data/CCE_Logo//2649-BA800x510.jpgL.jpg",
    imageAlt: "Portfolio website UI preview.",
    href: "#",
  },
];

export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.3 });

  return (
    <div className="bg-gray-100" id="projects" ref={ref}>
      {/* Section Heading */}
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
          Projects
        </Button>
      </Stack>

      <h1 style={{ textAlign: "center", fontSize: "25px" }} className="mt-2">
        Here are my recent projects
      </h1>

      {/* Project Cards Grid */}
      <div className="bg-gray-100 mt-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-0 grid grid-cols-1 gap-8 lg:grid-cols-3 text-center">
            {callouts.map((callout, index) => (
              <motion.div
                key={callout.name}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                className="group relative p-4 bg-white rounded-lg shadow-md"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-gray-100">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  <a href={callout.href}>{callout.name}</a>
                </h3>
                <p className="text-sm text-gray-600">{callout.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
