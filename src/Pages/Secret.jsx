import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import axios from "axios";
import { Link } from "react-router-dom";

var page = 1;


const fetchMovieByGenre = async (moviepage) => {
    const getGenre = await axios.get(`${process.env.REACT_APP_BASEURL}/discover/movie?include_adult=true&include_video=true&language=en-US&page=${moviepage}&sort_by=popularity.desc&with_genres=99&api_key=${process.env.REACT_APP_APIKEY}`)
    return getGenre.data.results
}

function Nothing() {
    const [docMovie, setDocMovie] = React.useState([])
    const [isMax, setIsMax] = React.useState(false);

    React.useEffect(() =>{
        fetchMovieByGenre(1).then((results) => {
            setDocMovie(results)
        })
    }, [])
    
    const showMoreClickHandler = async () => {
        page++;
          fetchMovieByGenre(page).then((result) => {
            setDocMovie((current) => [...current, ...result]);
          });
        if (page === 5) {
          setIsMax(true);
        }
      };
        

    
      console.log({docMovie:docMovie})
    const DocMovies = () => {
        return docMovie.map((movie, index) => {
          return (
            <div className="MovieWrapper group p-2 w-full" key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <div className="card bg-base-300 shadow-xl group-hover:bg-secondary p-2 flex items-center sm:flex-row ">
                  <img
                    src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                    alt="img not found"
                    className="moviePoster rounded-lg m-2 filter group-hover:brightness-75"
                  />
    
                  <div className="self-center flex sm:flex-row sm:w-full p-3">
                    <div className="basis-10/12">
                      <h1 className="text-lg group-hover:text-white">
                        {index + 1}. {movie.title} ({movie.release_date})
                      </h1>
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
                      <p className="basis-2/12 group-hover:text-white">
                        {movie.vote_average}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        });
      };


    return (
      <div className="container mx-auto mt-24">
        <Navbar />
        <DocMovies />
        <button
          type="button"
          className={`btn m-6 btn-xs sm:btn-sm md:btn-md  lg:btn-lg btn-ghost ${
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
        <Footer />  

      </div>
  );
}

export default Nothing;
