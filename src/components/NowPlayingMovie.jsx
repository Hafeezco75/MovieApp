import React from 'react';
import {useGetAllPopularMoviesQuery} from "../app/service/api";
import style from "./nowPlayingMovie.module.css"

const img = process.env.REACT_APP_MOVIE_IMAGES;

const NowPlayingMovie = () => {

    const {data, isLoading, isError} = useGetAllPopularMoviesQuery();
    console.log(data);

    if (isLoading) {
        return <div><h1>Loading...</h1></div>;
    }

    if (isError) {
        return <div><h1>An error occurred</h1></div>
    }

    return (
        <div className={style.mainWrapper}>
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



export default NowPlayingMovie;