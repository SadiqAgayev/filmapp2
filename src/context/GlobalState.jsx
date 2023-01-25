import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";

// ! create context
export const GlobalContext = createContext();

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// ! provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_FROM_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (movie) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: movie.id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveMovieToWatchlist = (movie) => {
    dispatch({ type: "MOVE_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatched = (movie) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: movie.id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveMovieToWatchlist,
        removeMovieFromWatched,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
