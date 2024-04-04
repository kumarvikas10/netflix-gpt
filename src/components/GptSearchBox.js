import lang from "../utils/languageConstants"
import { useSelector} from "react-redux";


const GptSearchBox = () => {
  const langKey = useSelector(store => store.config.lang);
  return (
    <div>
        <form className="p-6 text-center pt-60">
            <input type="text" className="bg-white font-normal text-black text-lg w-2/5 text-center p-2 border-2 border-slate-500 rounded-lg text-current mr-4" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="font-semibold p-2 px-10 text-white rounded-md bg-red-600 border-2 border-red-800">{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBox