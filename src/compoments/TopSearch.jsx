import React from "react";
import { searchMovie } from "../api";
import { Link } from "react-router-dom";
import Popular from "./Popular";

function TopSearch() {
  const [movieSearch, setMovieSearch] = React.useState([]);
  const [searched, setSearched] = React.useState(false);

  const SearchMovieList = () => {
    return movieSearch.map((movie) => {
      return (
        <div
          className="group hover:bg-secondary duration-300 card bg-base-300 text-center p-4 rounded-3xl"
          key={movie.id}
        >
          <div className=" card  pb-4 relative">
            <h3 className="MovieName h-fit my-auto place-self-center align-middle text-xl group-hover:text-white  pb-4">
              {movie.title}
            </h3>

            <figure className="relative">
              <img
                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                alt="img not found"
                className="mx-auto align-center rounded-lg w-72 h-fit filter group-hover:brightness-50 duration-300 "
              />
            </figure>
            <div className="btn btn-base-100 absolute top-2/3 xl:inset-x-32 lg:inset-x-20 md:inset-x-28 sm:inset-x-64 xs:inset-x-28 opacity-0 group-hover:opacity-100 duration-300">
              <Link to={`/details/${movie.id}`}>
                <button>Details</button>
              </Link>
            </div>

            <div className="MovieRating text-base group-hover:text-white text-center flex mx-auto pt-3">
              Rating : {Math.round(movie.vote_average * 10) / 10}
              <span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Rating star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      );
    });
  };
  // {movie.title} {movie.vote_average}
  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setMovieSearch(query.results);
      setSearched(true);
    } else if (q.length < 4) {
      setSearched(false);
    }
  };

  const MovieList = () => {
    return (
      <div>
        {searched ? (
          <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <SearchMovieList />
          </div>
        ) : (
          <Popular />
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="text-center" id="searchBox">
        <div>
          <input
            className="input input-bordered max-w-sm mb-4 text-s ring-1 bg-transparent focus:ring-primary-focus hover:ring-primary-focus pl-10 pr-5  py-3 rounded-full w-full outline-none focus:ring-1"
            type="text"
            placeholder="Search . . . . ."
            onChange={({ target }) => search(target.value)}
          />
        </div>
      </div>

      <MovieList />
    </div>
  );
}

export default TopSearch;
