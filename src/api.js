import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL


export const fetchTopList = async(page) => {
    const movie = await axios.get(`${baseUrl}/movie/top_rated?page=${page}&api_key=${apiKey}`)
    return movie.data.results
    }

export const searchMovie = async(q) => {
        const search = await axios.get(`${baseUrl}/search/movie?page=1&query=${q}&api_key=${apiKey}`)
        return search.data
    }
export const getPopularList = async() => {
    const popular = await axios.get(`${baseUrl}/movie/popular?&api_key=${apiKey}`)
    return popular.data.results
}

export const getUpcoming = async() => {
    const upcoming = await axios.get(`${baseUrl}/movie/upcoming?&api_key=${apiKey}`)
    return upcoming.data.results
}

export const getGenre = async () => {
    const genreList = await axios.get(`${baseUrl}/genre/movie/list?&api_key=${apiKey}`)
    return genreList.data.genres
}

export const fetchMovieByGenre = async (genre_id, page) => {
    const getGenre = await axios.get(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre_id}&api_key=${apiKey}`)
    return getGenre.data.results
}

export const fetchDetails = async (movie_id) => {
    const getDetails = await axios.get(`${baseUrl}/movie/${movie_id}?&api_key=${apiKey}`)
    return getDetails.data
}

export const fetchVideo = async (movie_id) => {
    const getVideo = await axios.get(`${baseUrl}/movie/${movie_id}/videos?language=en-US&api_key=${apiKey}`)
    return getVideo.data.results[0]
}

export const fetchCast = async (movie_id) => {
    const getCast = await axios.get(`${baseUrl}/movie/${movie_id}/credits?language=en-US&api_key=${apiKey}`)
    return getCast.data.cast
}

export const fetchRecommendation = async (movie_id) => {
    const getRecommendation = await axios.get(`${baseUrl}/movie/${movie_id}/recommendations?language=en-US&api_key=${apiKey}`)
    return getRecommendation.data.results
}