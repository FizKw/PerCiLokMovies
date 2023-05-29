import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar";
import {
  fetchCast,
  fetchDetails,
  fetchVideo,
  fetchRecommendation,
} from "../api";
import ReactPlayer from "react-player";
import Footer from "../footer";
import { Link } from "react-router-dom";

function MovieDetails() {
  let item = useParams();
  const [details, setDetails] = React.useState([]);
  const [video, setVideo] = React.useState({});
  const [cast, setCast] = React.useState([]);
  const [recommendation, setRecommendation] = React.useState([]);
  let genres = [];
  const youtubeUrl = "https://www.youtube.com/watch?v=";

  React.useEffect(() => {
    fetchDetails(item.id).then((result) => {
      setDetails(result);
    });
    fetchVideo(item.id).then((result) => {
      setVideo(result);
    });
    fetchCast(item.id).then((result) => {
      setCast(result);
    });
    fetchRecommendation(item.id).then((result) => {
      setRecommendation(result);
    });
    window.scrollTo(0, 0);
  }, [item.id]);

  genres = details.genres;

  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <div className="m-2 p-3 rounded-lg bg-blue-950" key={i}>
          {g.name}
        </div>
      );
    });
  }

  function MoviePlayer() {
    if (video?.key) {
      return (
        <div className="flex mx-auto m-4 justify-center">
          <ReactPlayer url={`${youtubeUrl}${video.key}`} />
        </div>
      );
    } else {
      return (
        <div className="flex mx-auto m-2 justify-center mb-20">
          <img
            src={`${process.env.REACT_APP_BASEIMGURL}/${details.backdrop_path}`}
            alt="img not found"
            className="mx-auto rounded-lg"
          />
        </div>
      );
    }
  }

  const CastList = () => {
    return cast.slice(0, 4).map((list) => {
      return (
        <div>
          <div className="text-center ">
            <img
              src={`${process.env.REACT_APP_BASEIMGURL}/${list.profile_path}`}
              alt="img not found"
              className="mx-auto rounded-3xl md:rounded-full md:scale-75 transition duration-300 md:hover:scale-90 w-52 h-72 md:w-60 md:h-80"
            />
          </div>
          <br />

          <p className="-mt-2 pb-6 lg:pb-0 h-fit">
            <span>{list.name}</span> As{" "}
            <b>
              <span>{list.character}</span>
            </b>
          </p>
        </div>
      );
    });
  };

  const Recommendation = () => {
    return recommendation.slice(0, 4).map((list) => {
      return (
        <div className="card">
          <div className="card group mx-auto text-center relative">
            <Link to={`/details/${list.id}`}>
              <img
                src={`${process.env.REACT_APP_BASEIMGURL}/${list.poster_path}`}
                alt="img not found"
                className="mx-auto rounded-lg w-48 h-72 align-center filter group-hover:brightness-50 duration-300"
              />
            </Link>

            <p className="pt-3 pb-6 h-fit">{list.title}</p>
          </div>
        </div>
      );
    });
  };

  function round(value) {
    var multiplier = Math.pow(10, 2 || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  //console.log({cast:cast})
  //console.log({video: video})
  //console.log({details: details})

  return (
    <div>
      <div className="container mx-auto mt-24 ">
        <Navbar />

        <h1 className="text-center text-6xl font-semibold m-8">
          {details.title}
        </h1>
        <MoviePlayer />
        <div>
          <div className="text-center text-3xl font-semibold m-5">
            <h1>Overview</h1>
          </div>
          <div className="text-start sm:text-md md:text-lg lg:text-xl p-4">
            <h2>{details.overview}</h2>
          </div>
          <h1 className="text-2xl font-semibold m-2">Genres :</h1>
          <div className="flex flex-wrap">{genresList}</div>
        </div>

        <br />
        <hr />
        <br />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1,pb-36 gap-3">
          <div className="flex justify-center text-center p-4 bg-blue-900">
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
            <h1 className="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300">
              {round(details.vote_average)}
            </h1>
          </div>
          <div className="text-center p-3 bg-blue-900">
            <h1>{`Revenue : ${USDollar.format(details.revenue)}`}</h1>
          </div>
          <div className="text-center p-3 bg-blue-900">
            <h1>{details.runtime} Minutes</h1>
          </div>
          <div className="text-center p-3 bg-blue-900">
            <h1>{`Budget : ${USDollar.format(details.budget)}`}</h1>
          </div>
        </div>

        <br />
        <hr />
        <br />

        <div>
          <h1 className="text-center text-4xl font-semibold m-4">Cast</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 text-center">
            <CastList />
          </div>
        </div>
        <br />
        <hr />

        <h1 className="text-center text-4xl font-semibold p-3 pt-6">
          Recommendations
        </h1>
        <br />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 text-center h-full">
          <Recommendation />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MovieDetails;
