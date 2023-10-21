import React from "react";

function MoviesDetails({clickedMovie}) {
    console.log(clickedMovie);
    return (<div>
        {
            clickedMovie != null && (
                <div>
                    <h4>{clickedMovie.title}</h4>
                    <img src="https://i.ytimg.com/vi/WUycWJohbtA/maxresdefault.jpg" alt={clickedMovie.title} style={{width:"500px"}}/>
                    <p>Release Date : {clickedMovie.release_date}</p>
                    <p>Actor <span>{clickedMovie.actors[0].name}</span> played character of <span>{clickedMovie.actors[0].character}</span></p>
                    <p>Actor <span>{clickedMovie.actors[1].name}</span> played character of <span>{clickedMovie.actors[1].character}</span></p>
                </div>
            )
        }
    </div>)
}
export default MoviesDetails


