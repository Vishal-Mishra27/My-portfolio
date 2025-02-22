import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const callouts = [
  {
    name: "Chat Friendly",
    description:
      "Stay connected with ease using our responsive Chat App, designed for smooth conversations on any device. ",
    imageSrc:
      "https://giftysolutions.com/wp-content/uploads/2024/07/Graphic-Design.webp",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Coza Store",
    description:
      "Shop the latest trends at Coza Store, your one-stop eCommerce destination for top-quality products.",
    imageSrc:
      "https://www.proalley.com/blog/content/images/size/w2000/2022/11/web-design-concept-with-drawings.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Mini Music Player",
    description:
      "Enjoy your favorite tunes on the go with our Mini Music Player, designed for simplicity and portability.",
    imageSrc:
      "https://buildfire.com/wp-content/uploads/2021/10/Whats-the-Difference-Between-UX-Design-vs.-UI-Design_@3x-1-scaled.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Mishra-Bhojnaly",
    description:
      "Indulge in a delightful dining experience with our Restaurant Site, featuring a menu full of delicious options.",
    imageSrc:
      "https://s3-alpha.figma.com/hub/file/4210100113/701f36a5-4b41-42b2-8e5f-e5b2039f6c73-cover.png",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Book Store",
    description:
      "Discover a world of stories with our Book Store App, where browsing and buying books is just a tap away.",
    imageSrc:
      "https://rms.koenig-solutions.com/Sync_data/CCE_Logo//2649-BA800x510.jpgL.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "My Portfolio",
    description:
      "Showcasing my skills and projects, My Portfolio is a digital space where creativity meets professionalism.",
    imageSrc:
      "https://rms.koenig-solutions.com/Sync_data/CCE_Logo//2649-BA800x510.jpgL.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
export default function Project() {
  return (
    <div className="bg-gray-100" id="projects">
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
          Projects
        </Button>
      </Stack>

      <h1 style={{ textAlign: "center", fontSize: "25px" }} className="mt-2">
        Here are my recent projects
      </h1>
      <div className="bg-gray-100 mt-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div>
            {/* <h2 className="text-2xl font-bold text-gray-900">Collections</h2> */}

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
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
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
