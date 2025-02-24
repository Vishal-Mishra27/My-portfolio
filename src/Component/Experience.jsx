import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Experience2 from "./Experience2";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id="experience">
      {/* Heading */}
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
        className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mx-auto max-w-2xl my-0 mt-5"
      >
        Experience
      </motion.h2>
      <hr />

      {/* Experience Cards */}
      <div className="bg-white py-1 sm:py-3 mt-3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="row">
              {/* First Experience Card */}
              <motion.div
                className="col-sm-6"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={textVariants}
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Digicoders Technologies Pvt. Limited, Lucknow
                    </h5>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>
                        Collaborated with the development team on various
                        software projects, enhancing functionality and user
                        experience.
                      </li>
                      <li>
                        Participated in daily stand-up meetings and contributed
                        to project planning and sprint reviews.
                      </li>
                    </ul>
                    <span
                      style={{
                        background: "#0d6efd",
                        fontWeight: "bold",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      className="p-1"
                    >
                      Intern
                    </span>
                    <div className="card-footer my-2">
                      <small className="text-muted">
                        July, 2024 to Present
                      </small>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Second Experience Card */}
              <motion.div
                className="col-sm-6 mt-1"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={textVariants}
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Acmegrade</h5>
                    <h6>IIT Bombay</h6>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>
                        Assisted in coding, testing, and debugging applications
                        using C, JavaScript, HTML/CSS.
                      </li>
                      <li>
                        Participated in daily stand-up meetings and contributed
                        to project planning and sprint reviews.
                      </li>
                    </ul>
                    <span
                      style={{
                        background: "#0d6efd",
                        fontWeight: "bold",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      className="p-1"
                    >
                      Web Development Training
                    </span>
                    <div className="card-footer my-1.5">
                      <small className="text-muted">
                        August, 2023 to September, 2023
                      </small>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Experience2 />     
    </div>
  );
}
