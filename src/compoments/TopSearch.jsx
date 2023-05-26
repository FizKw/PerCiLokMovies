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
          className="group bg-base-300 text-center p-4 rounded-3xl"
          key={movie.id}
        >
          <div className="group-hover:bg-secondary duration-300 card w-75 p-2 relative">
            <br />

            <figure className="relative">
              <img
                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                alt="img not found"
                className="MovieImg mx-auto align-center rounded-lg w-64 h-96 filter group-hover:brightness-50 duration-300 "
              />
            </figure>
            <div className="btn btn-base-100 absolute top-2/3 xl:inset-x-32 lg:inset-x-20 md:inset-x-28 sm:inset-x-64 xs:inset-x-28 opacity-0 group-hover:opacity-100 duration-300">
              <Link to={`/details/${movie.id}`}>
                <button>Details</button>
              </Link>
            </div>

            <h3 className="MovieName text-xl group-hover:text-white pt-4">
              {movie.title}
            </h3>

            <div className="MovieRating text-sm group-hover:text-white">
              {" "}
              Rating : {Math.round(movie.vote_average * 10) / 10}
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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
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
