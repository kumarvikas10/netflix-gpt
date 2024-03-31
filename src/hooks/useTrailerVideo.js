import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from '../utils/movieSlice';

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
        //fetch trailer from movieid and one more api call in tmdb videos section
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?`, API_OPTIONS);

        const json = await data.json();
        // console.log(json)

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieTrailer();
    }, [])
}

export default useTrailerVideo;