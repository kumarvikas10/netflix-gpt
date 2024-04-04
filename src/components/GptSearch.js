import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBox from "./GptSearchBox";
import {Background_IMG} from '../utils/constants';

const GptSearch = () => {
  return (
    <div className="relative">
      <div className="absolute -z-10">
        <img src={Background_IMG} alt="netlix-background" />
      </div>
      <GptSearchBox />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch