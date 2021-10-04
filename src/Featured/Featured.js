import React from "react";

const Featured = (props) => {
  const { name, fee, img } = props?.course;
  return (
    <div className="col-6 my-4">
      <div className="card h-100">
        <img
          style={{ height: "450px" }}
          src={img}
          className="card-img-top img-fluid"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{fee}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};

export default Featured;
