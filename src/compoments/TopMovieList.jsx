import React from "react";
import { getGenre, fetchMovieByGenre, fetchTopList } from "../api";
import { Link } from "react-router-dom";

var page = 1;

function TopMovieList() {
  const [topMovies, setTopMovies] = React.useState([]);
  const [genre, setGenre] = React.useState([]);
  const [header, setHeader] = React.useState("Top 100 Movies");
  const [isTop, setIsTop] = React.useState(true);
  const [idGenre, setIdGenre] = React.useState();
  const [isMax, setIsMax] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    fetchTopList(1).then((result) => {
      setTopMovies(result);
    });

    getGenre().then((result) => {
      setGenre(result);
    });
    page = 1;
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  function topClickHandler() {
    page = 1;
    fetchTopList(page).then((result) => {
      setTopMovies(result);
    });

    setIsTop(true);
    setHeader("Top 100 Movies");
    setIsMax(false);
  }

  //console.log({ topMovies: topMovies})
  const Movies = () => {
    return topMovies.map((movie, index) => {
      return (
        <div className="MovieWrapper p-2 w-full " key={movie.id}>
          <div className="card bg-base-300 shadow-xl p-2 flex items-center sm:flex-row ">
            <Link to={`/details/${movie.id}`}>
              <img
                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                alt="img not found"
                className="moviePoster rounded-lg m-2"
              />
            </Link>
            <div className="self-center flex sm:flex-row sm:w-full p-3">
              <div className="basis-10/12">
                <Link to={`/details/${movie.id}`}>
                  <h1 className="text-lg">
                    {index + 1}. {movie.title} ({movie.release_date})
                  </h1>
                </Link>
              </div>
              <div className="flex align-middle text-center">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400 pt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Rating star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p className="basis-2/12">{movie.vote_average}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  //console.log({genre: genre})

  const genreClickHandler = async (genre_id, genre_name) => {
    page = 1;
    fetchMovieByGenre(genre_id, page).then((result) => {
      setTopMovies(result);
    });
    setIdGenre(genre_id);
    setHeader(genre_name);
    setIsTop(false);
    setIsMax(false);
  };

  const showMoreClickHandler = async () => {
    page++;

    if (!isTop) {
      fetchMovieByGenre(idGenre, page).then((result) => {
        setTopMovies((current) => [...current, ...result]);
      });
    } else {
      fetchTopList(page).then((result) => {
        setTopMovies((current) => [...current, ...result]);
      });
    }
    if (page === 5) {
      setIsMax(true);
    }
  };

  const FetchGenre = () => {
    return genre.map((list) => {
      return (
        <div key={list.id}>
          <Link to={`/discover/${list.name}`}>
            <button
              type="button"
              className="btn no-animation m-2 active:bg-white w-full"
              onClick={() => {
                genreClickHandler(list.id, list.name);
              }}
            >
              {list.name}
            </button>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="flex relative mt-24">
      <div className="w-2/3 sm:w-full sm:p-2">
        <h1 className="p-2 ml-5 font-bold text-xl">{header} : </h1>
        <Movies />
        <button
          type="button"
          className={`btn m-6 btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost ${
            isMax ? "hidden" : ""
          }`}
          onClick={() => {
            showMoreClickHandler();
          }}
        >
          Show More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </button>
      </div>
      <div className="w-1/4 p-2 items-right">
        <h1 className="p-2 ml-1 font-bold text-xl">Filter by :</h1>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1">
          <FetchGenre />
          <Link to={`/discover/topmovies`}>
            <button
              type="button"
              className=" item-end btn m-2 w-full "
              onClick={() => {
                topClickHandler();
              }}
            >
              Top 100 Movies {isMax}
            </button>
          </Link>
        </div>
      </div>
      <button
        type="button"
        className="btn m-6 btn-circle fixed bottom-0 right-0 animate-bounce"
        onClick={scrollToTop}
        style={{ display: visible ? "" : "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
          />
        </svg>
      </button>
    </div>
  );
}
// style={{display: visible ? '' : 'none'}}

export default TopMovieList;
