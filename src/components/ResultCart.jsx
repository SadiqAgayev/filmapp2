import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./ResultCart.css";

const ResultCart = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext);
  const booleanMovieWatched = watched.find((m) => m.id === movie.id);
  const booleanMovie = watchlist.find((m) => m.id === movie.id)
    ? true
    : booleanMovieWatched
    ? true
    : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release_date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4 className="vote_average">
            IMDB:{" "}
            <strong>{movie.vote_average ? movie.vote_average : "-"}</strong>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={booleanMovie}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>
          <button
            className="btn"
            disabled={booleanMovieWatched}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCart;
