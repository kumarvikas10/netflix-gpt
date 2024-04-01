import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    // console.log(movies);
    // if (!movies) return;
    return (
        <div className="px-8 pb-12">
            <div className="">
                <h1 className=" text-2xl text-white mb-4">
                    {title}
                </h1>
            </div>
            <div className="flex overflow-x-scroll" style={{WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList