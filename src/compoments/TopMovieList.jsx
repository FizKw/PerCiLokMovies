import React from "react";
import { getGenre, fetchMovieByGenre, fetchTopList } from "../api";
import { Link } from "react-router-dom";

var page = 1


function TopMovieList () {
    const [topMovies, setTopMovies] = React.useState([])
    const [genre, setGenre] = React.useState([])
    const [header, setHeader] = React.useState("Top 100 Movies")
    const [isTop, setIsTop] = React.useState(true)
    const [idGenre, setIdGenre] = React.useState()
    const [isMax, setIsMax] = React.useState(false)
    
    
    
    React.useEffect(() => {
        fetchTopList(1).then((result) => {
            setTopMovies(result)
        })

        getGenre().then((result) => {
            setGenre(result)
        })
        page = 1
    }, [])


    function topClickHandler(){
        
        page = 1;
        fetchTopList(page).then((result) => {
            setTopMovies(result)
        })
        
        setIsTop(true)
        setHeader("Top 100 Movies")
        setIsMax(false)
    }

    

    console.log({ topMovies: topMovies})
    const Movies = () => {
        return topMovies.map((movie, index) => {
            return(
            <div className="MovieWrapper p-2 w-full " key={movie.id}>
                <div className="card bg-base-300 shadow-xl p-2 flex flex-row">
                    <Link to={`/details/${movie.id}`}>
                        <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="img not found" className="moviePoster rounded-lg m-2" />
                    </Link>
                    <div className="self-center flex flex-row w-full p-3">
                        <div className="basis-10/12">
                            <Link to={`/details/${movie.id}`}>
                                <h1 className="text-lg">{index+1}. {movie.title} ({movie.release_date})</h1>
                            </Link>
                        </div>
                        <p className="basis-2/12">{movie.vote_average}</p>
                    </div>
                </div>
            </div>
            )
        })
    }


    //console.log({genre: genre})

    const genreClickHandler = async(genre_id, genre_name) => {
        page = 1;
        fetchMovieByGenre(genre_id, page).then((result) => {
            setTopMovies(result)
        })
        setIdGenre(genre_id)
        setHeader(genre_name)
        setIsTop(false)
        setIsMax(false)
    }

    const showMoreClickHandler = async() => {
        page++
        
        if (!isTop) {
            fetchMovieByGenre(idGenre, page).then((result) => {
                setTopMovies(current => [...current, ...result])
            })
        }else{
            
            fetchTopList(page).then((result) => {
                setTopMovies(current => [...current, ...result])
            })
        }
        if (page === 5) {
            setIsMax(true)
        }
    }




    const FetchGenre = () => {
        return genre.map((list) => {
            return(
            <div key={list.id}>
                <Link to={`/discover/${list.name}`}>
                    <button type="button"  className="btn no-animation m-2 active:bg-white w-full" onClick={() => {genreClickHandler(list.id, list.name)}}>
                        {list.name}
                    </button>
                </Link>
            </div>
            )
        })
    }

    return(
        <div className="flex">
            <div className="w-3/4 p-2">
                <h1 className="p-2 ml-5 font-bold text-xl">{header} : </h1>
                <Movies />
                <button type="button" className={`btn m-2 ${isMax ? 'hidden' : ''}`} onClick={() => {showMoreClickHandler()}} >Show More</button>
            </div>
            <div className="w-1/4 p-2">
                <h1 className="p-2 ml-1 font-bold text-xl">Filter by :</h1>

                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1">
                    <FetchGenre />
                    <Link to={`/discover/topmovies`}>
                        <button type="button" className="btn m-2 w-full " onClick={() => {topClickHandler()}}>
                            Top 100 Movies {isMax}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
      
}

export default TopMovieList

