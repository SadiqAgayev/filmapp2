import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import "./Watchlist.css";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watchlists</h1>
          <div className="count-movie">
            {watchlist.length} {watchlist.length < 2 ? "movie" : "movies"}
          </div>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Your list of movie is empty...</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
