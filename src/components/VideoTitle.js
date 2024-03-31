import playIcon from '../images/playIcon.svg'

const VideoTitle = ({ title, overview }) => {

  return (
    <div className="w-full h-[100vh] aspect-video relative z-10 bg-gradient-to-r from-black">
      <div className='w-6/12 pt-[400px] pl-8'>
        <h1 className="text-white text-4xl font-semibold mb-3">{title}</h1>
        <h3 className="text-white text-base font-light ">{overview}</h3>
        <div className="mt-4 flex align-middle">
          <button className="rounded-lg px-10 py-2.5 mr-3 bg-slate-100 cursor-pointer inline-flex align-middle hover:bg-slate-100/80"><img className='w-[20px] p-1 mt-[3px]' src={playIcon} alt="play-button-icon" />Play</button>
          <button className="rounded-lg px-5 py-2.5 bg-slate-100/20 cursor-pointer text-white">More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle