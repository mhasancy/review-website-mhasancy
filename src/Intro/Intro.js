import React from "react";
import "./intro.css";
const Intro = () => {
  return (
    <div>
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
              src="https://www.freepik.com/blog/app/uploads/2019/03/cabecera.jpg"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.freepik.com/blog/app/uploads/2020/05/Freepik-Company-Logo-Cabecera-Blog_Mesa-de-trabajo-1.jpg"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.freepik.com/blog/app/uploads/2018/07/Post-Freepik-Cabecera.jpg"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
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
    </div>
  );
};

export default Intro;
/* <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="white"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Data to enrich your</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  online business
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/abc"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/abc"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-yellow-400 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div> */
/*<div className="carousel relative shadow-2xl bg-white">
        <div className="carousel-inner relative overflow-hidden w-full">
          {/* <!--Slide 1--> */

/* <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "80vh" }}
          >
            <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">
              <img
                src="https://www.freepik.com/blog/app/uploads/2018/07/Post-Freepik-Cabecera.jpg"
                alt=""
              />
              Slide 1
            </div>
          </div>
          <label
            for="carousel-3"
            className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            for="carousel-2"
            className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>

          {/* <!--Slide 2--> */
/* <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "50vh" }}
          >
            <div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">
              Slide 2
              <img
                src="https://www.freepik.com/blog/app/uploads/2020/05/Freepik-Company-Logo-Cabecera-Blog_Mesa-de-trabajo-1.jpg"
                alt=""
              />
            </div>
          </div>
          <label
            for="carousel-1"
            className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            for="carousel-3"
            className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>

         {/* <!--Slide 3--> */
/*  <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "50vh" }}
          >
            <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">
              Slide 3
              <img
                src="https://www.freepik.com/blog/app/uploads/2019/03/cabecera.jpg"
                alt=""
              />
            </div>
          </div>
          <label
            for="carousel-2"
            className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            for="carousel-1"
            className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>

          {/* <!-- Add additional indicators for each slide--> */
/*  <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label
                for="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                for="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                for="carousel-3"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>*/
