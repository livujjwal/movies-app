import React, { useState } from "react";
import DisplayMovies from "./Components/DisplayMovies";
import MoviesDetails from "./Components/MoviesDetails";
import data from "./Data/moviesData";
import "./styles.css";
function App() {
  const [selectMovie, setSelectMovie] = useState(null);
  return (
    <div>
        <h1>Movies</h1>
      <DisplayMovies updatedMovie={setSelectMovie} />
      
      <MoviesDetails clickedMovie={selectMovie} />
    </div>
  );
}

export default App;
