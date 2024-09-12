import React from 'react';
import { useGetAllNowPlayingMoviesQuery } from "../app/service/api";
import style from "./nowPlayingMovie.module.css"

const img = process.env.REACT_APP_MOVIE_IMAGES;

const NowPlayingMovie = () => {

    const {data, isLoading, isError} = useGetAllNowPlayingMoviesQuery();
    console.log(data);

    if (isLoading) {
        return <div><h1>Loading...</h1></div>;
    }

    if (isError) {
        return <div><h1>An error occurred</h1></div>
    }

    return (
        <div>
        <div className={style.container}>
            {data?.results?.map((movie) => (
                <div className={style.movie} key={movie.id}>
                    <img className={style.img} src={`${img}${movie.poster_path}`} alt={movie.overview} />
                    <p>{movie.title}</p>
                    <p>{movie.overview}</p>
                    <p>{movie.releaseDate}</p>
                </div>
            ))}
        </div>
        </div>
    )
}
    //const res = useGetAllNowPlayingMoviesQuery();
   // console.log(res)

   // return (
       // <div>NowPlayingMovies</div>
    //)
//}

export default NowPlayingMovie;