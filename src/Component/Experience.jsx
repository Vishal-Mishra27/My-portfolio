import React from "react";
import Experience2 from './Experience2'
export default function Experience() {
  return (
    <div id="Experience">
      <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mx-auto max-w-2xl my-0 mt-5">
        Experience
      </h2>
      <hr />
      <div className="bg-white py-1 sm:py-3 mt-3 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Digicoders Technologies Pvt. Limited, Lucknow
                    </h5>
                    <p className="card-text">
                      <ul style={{ listStyleType: "disc" }}>
                        <li>
                          Collaborated with the development team on various
                          software projects, enhancing functionality and user
                          experience.
                        </li>
                        <li>
                          Participated in daily stand-up meetings and
                          contributed to project planning and sprint reviews.
                        </li>
                      </ul>
                    </p>
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
                      <small className="text-muted ">
                        July,2024 to Present
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-1">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Acmegrade</h5>
                    <h6>IIT Bombay</h6>
                    <p className="card-text">
                      <ul style={{ listStyleType: "disc" }}>
                        <li>
                          Assisted in coding, testing, and debugging
                          applications using [technologies/languages used, e.g.,
                          C,JAVASCRIPT, HTML/CSS].
                        </li>
                        <li>
                          Participated in daily stand-up meetings and
                          contributed to project planning and sprint reviews.
                        </li>
                      </ul>
                    </p>
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
                      <small className="text-muted ">
                        August,2023 to September,2023
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Experience2 />
    </div>
  );
}
