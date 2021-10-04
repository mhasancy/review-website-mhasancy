//imported file
import React from "react";
//intro/hero section component
const Intro = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ filter: "opacity(15%)" }}
              src="https://www.teacheracademy.eu/wp-content/uploads/2020/10/student-centered-2-1216x808.jpg"
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ filter: "opacity(15%)" }}
              src="https://www.intelligenthq.com/wp-content/uploads/2019/09/ways-online.jpg"
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ filter: "opacity(15%)" }}
              src="http://www.snis.ca/wp-content/uploads/online-education.jpeg"
              className="d-block w-100"
              alt=""
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        style={{
          zIndex: "10",
          position: "absolute",
          top: "50%",
          left: "15%",
        }}
      >
        <h1 className="text-start" style={{ fontSize: "80px" }}>
          Start Learning to Make <br />
          <span className="text-bold text-yellow-custom text-start">
            {" "}
            a better life
          </span>
          .
        </h1>
        <h3 className="fw-light text-start">
          get started now to make your things simpler and <br /> to look better
          and realistic and powerful!
        </h3>
      </div>
    </div>
  );
};

export default Intro;
