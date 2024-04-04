import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GptSearch />) : (<>
          <MainContainer />
          <SecondaryContainer />
        </>)
      }


    </div>
  )
}

export default Browse