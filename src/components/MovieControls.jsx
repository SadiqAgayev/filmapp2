import React, { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { BsEyeSlashFill } from "react-icons/bs";
import { GlobalContext } from "../context/GlobalState";
import "./MovieControls.css";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveMovieToWatchlist,
    removeMovieFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn">
            <FaEye onClick={() => addMovieToWatched(movie)} />
          </button>
          <button className="ctrl-btn">
            <MdClose onClick={() => removeMovieFromWatchlist(movie)} />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn">
            <BsEyeSlashFill onClick={() => moveMovieToWatchlist(movie)} />
          </button>
          <button className="ctrl-btn">
            <MdClose onClick={() => removeMovieFromWatched(movie)} />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
