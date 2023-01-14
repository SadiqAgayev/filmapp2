import React from "react";
import "./ResultCart.css";

const ResultCart = ({ movie }) => {
  console.log(movie);
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
          <button className="btn">Add to Watchlist</button>
          <button className="btn">Add to Watched</button>
        </div>
      </div>
    </div>
  );
};

export default ResultCart;
