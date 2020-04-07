import React from "react";
import { moviesData } from "../moviesData";

function removeMovie(movie) {
  const updateMovies = this.state.movies.filter(function(item) {
    return item.id !== movie.id;
  });

  this.state.movies = updateMovies;
  this.setState({
    movies: updateMovies
  });
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    };
  }

  render() {
    return (
      <div>
        {this.state.movies.map(movie => {
          return (
            <div>
              <p>{movie.title}</p>
              <button onClick={removeMovie.bind(this, movie)}>
                Delete movie
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
