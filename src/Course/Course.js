import React from "react";

const Course = (props) => {
  const { name, fee, img } = props?.course;
  return (
    <div className="col-4">
      <div className="card h-100">
        <img
          src={img}
          style={{ height: "250px" }}
          className="card-img-top img-fluid"
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title">
            Program : <span className="text-yellow-custom">{name}</span>
          </h4>
          <h5 className="card-text">Program Fee: $ {fee}</h5>
        </div>
        <div className="mb-4">
          <button className="btn btn-yellow">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
