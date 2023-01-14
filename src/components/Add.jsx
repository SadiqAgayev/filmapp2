import React from "react";
import './Add.css'

const Add = () => {
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
                <input type="text" placeholder="Search for a movie, tv show, person..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
