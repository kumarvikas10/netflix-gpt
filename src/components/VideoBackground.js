import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
    useTrailerVideo(movieId);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    // console.log(trailerVideo)
    return (
        <div className="absolute top-0 w-full">
            <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoBackground