import React from 'react';
import {useGetTopRatedMoviesQuery} from "../app/service/api";
import style from "./nowPlayingMovie.module.css"


const img = process.env.REACT_APP_MOVIE_IMAGES;

const TopRatedMovie = () => {

    const {data, isLoading, isFalse} = useGetTopRatedMoviesQuery();
    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isFalse) {
        return <div>An Error Occurred</div>;
    }

    return (
        <div className={style.mainWrapper}>
        <div className={style.container}>
            {data?.results?.map((movie) => (
                <div className={style.movie} key={movie.id}>
                    <img className={style.img} src={`${img}${movie.poster_path}`} alt={movie.overview}/>
                    <p>{movie.id}</p>
                    <p>{movie.overview}</p>
                    <p>{movie.releaseDate}</p>
                </div>
            ))}
        </div>
        </div>
    )

}

export default TopRatedMovie;