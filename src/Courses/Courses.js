import React from "react";
import Course from "../Course/Course";

const Courses = (props) => {
  const { courses } = props;
  return (
    <div className="container">
      <div className="row">
        {courses?.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
