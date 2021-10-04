import React from "react";
import Featured from "../Featured/Featured";
import Intro from "../Intro/Intro";

const Home = (props) => {
  const { courses } = props;
  const coursesFeatured = courses?.slice(0, 4);
  return (
    <div>
      <div>
        <Intro></Intro>
        <div className="container">
          <h1>Featured Courses Available</h1>
          <div className="row">
            {coursesFeatured?.map((course) => (
              <Featured key={course.id} course={course}></Featured>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
