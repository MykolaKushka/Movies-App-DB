import React from "react";

const MovieItem = props => {
  const { movie, removeMovie } = props;

  return (
    <div className="card-body">
      <h6 className="card-title">{movie.title}</h6>
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0">Rating: {movie.vote_average}</p>
        <button type="button" className="btn btn-secondary">
          Will watch
        </button>
      </div>
      <button onClick={removeMovie.bind(null, props.movie)}>
        Delete movie
      </button>
    </div>
  );
};

export default MovieItem;
