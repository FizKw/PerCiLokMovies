import React from "react";
import { getPopularList, getUpcoming } from "../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import '../styles.css'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";

function Popular() {
  const [popularMovies, setPopularMovies] = React.useState([]);
  const [upcoming, setUpcoming] = React.useState([]);

  React.useEffect(() => {
    getPopularList().then((result) => {
      setPopularMovies(result);
    });
    getUpcoming().then((result) => {
      setUpcoming(result);
    });
  }, []);
  console.log({ popularMovies: popularMovies });
  return (
    <div>
      <div className="bg-base-300 p-3 rounded-lg mb-4">
        <h3 className="text-center font-bold text-xl mt-2 mb-4">
          Popular Movie Right Now
        </h3>
        <Swiper
          breakpoints={{
            240: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[ Autoplay, FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {popularMovies.map((nowpopular) => {
            return (
              <SwiperSlide key={nowpopular.id}>
                <div className="group bg-base-300 shadow-xl group relative mb-8">
                  <figure>
                    <img
                      src={`${process.env.REACT_APP_BASEIMGURL}/${nowpopular.poster_path}`}
                      className="rounded-3xl group-hover:brightness-50 duration-300"
                      alt="tifa"
                    />
                  </figure>
                  <div className="opacity-0 group-hover:opacity-100 duration-300">
                    <h2 className="justify-center text-neutral-50 font-bold text-2xl sm:text-2xl xs:text-base absolute top-7 left-1/2 -translate-x-1/2 md:text-base">
                      {nowpopular.title}
                    </h2>
                    <Link to={`/details/${nowpopular.id}`}>
                      <button className="btn btn-base-300 absolute top-2/3 inset-x-5 md:inset-x-7 sm:inset-x-20 md:text-sm md:top-2/3">
                        See Details
                      </button>
                    </Link>
                    <div className="flex absolute inset-x-0 bottom-5 md:bottom-1 sm:bottom-8 xs:bottom-1 justify-center">
                      <svg
                        aria-hidden="true"
                        className="w-7 h-7 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <p className="ml-1 text-lg text-white font-bold">
                        {nowpopular.vote_average}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="bg-base-300 p-3 rounded-lg mb-4">
        <h3 className="text-center font-bold text-xl mt-2 mb-4">
          Upcoming Movies
        </h3>
        <Swiper
          breakpoints={{
            360: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {upcoming.map((nowpopular) => {
            return (
              <SwiperSlide key={nowpopular.id}>
                <div className="group bg-base-300 shadow-xl group relative mb-8">
                  <figure>
                    <img
                      src={`${process.env.REACT_APP_BASEIMGURL}/${nowpopular.poster_path}`}
                      className="rounded-3xl group-hover:brightness-50 duration-300"
                      alt="Movie Poster"
                    />
                  </figure>
                  <div className="opacity-0 group-hover:opacity-100 duration-300">
                    <h2 className="justify-center text-neutral-50 font-bold text-2xl sm:text-2xl xs:text-base absolute top-7 left-1/2 -translate-x-1/2 md:text-base">
                      {nowpopular.title}
                    </h2>
                    <Link to={`/details/${nowpopular.id}`}>
                      <button className="btn btn-base-300 absolute top-2/3 inset-x-5 md:inset-x-7 sm:inset-x-20 md:text-sm md:top-2/3">
                        See Details
                      </button>
                    </Link>
                    <div className="flex absolute inset-x-0 bottom-5 md:bottom-1 sm:bottom-8 xs:bottom-1 justify-center">
                      <svg
                        aria-hidden="true"
                        className="w-7 h-7 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <p className="ml-1 text-lg text-white font-bold">
                        {nowpopular.vote_average}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Popular;
