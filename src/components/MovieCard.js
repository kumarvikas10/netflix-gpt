import { IMG_CDN_URL } from "../utils/constants"
const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 rounded-sm pr-6 transition ease-in-out hover:scale-110 overflow-y-hidden">
        <img className="rounded-sm" src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard;