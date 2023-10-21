import React from "react";
import data from "../Data/moviesData";
function DisplayMovies({updatedMovie}) {
  return (
    <div>
      {data.map((movie) => 
        <div onClick={() => updatedMovie(movie)}>
            <p>{movie.title}</p>
        </div>
      )}
    </div>
  );
}
export default DisplayMovies;
