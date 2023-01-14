import React from "react";
import { useState } from "react";
import "./Add.css";
import ResultCart from "./ResultCart";

const Add = () => {
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    fetch(
      `
      https://api.themoviedb.org/3/search/movie?api_key=25fcdc88a9e8c6ac8725c01af2cc2530&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div>
      <div className="add-page">
        <div className="container">
          <div className="add-content">
            <img
              src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
              alt=""
            />
            <div className="titles">
              <h1>Welcome</h1>
              <h2>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h2>
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                onChange={onChange}
                placeholder="Search for a movie, tv show, person..."
              />
            </div>

            {results.length > 0 && (
              <ul className="results">
                {results.map((movie) => (
                  <li key={movie.id}>
                    <ResultCart movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
